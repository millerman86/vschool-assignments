import {collection} from '../../db.js';

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}


// REFACTOR THE ENDPOINTS TO LOOK LIKE THIS
//
// team/
// team/:id/edit(update)
// team/create/
// team/:id view a single team



// ACCORDING TO STANDARD PROCEDURE, THE TOPICS ENDPOINT SHOULD EITHER GET ALL TOPICS,
// OR DO A STANDARD SEARCH, USING A QUERY STRING, NOT PATH VARIABLES, BIG DIFFERENCE
const plugin = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/topics',
    config: {
      plugins: {
        body: {merg: false, sanitizer: {stripNullorEmpty: false}}
      },
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      },
    },
    handler: {
      async: async(request, reply) => {

        let queryStringParams = request.query; // SINCE THE QUERY OBJECT IS FROM THE QUERY STRING, YOU IDEALLY SHOULD NAME PARAMS QUERYPARAMS INSTEAD
        if (isEmpty(queryStringParams)) {

          let topics = await collection('topics');
          topics = await topics.find().toArray(); // RETURNS ARRAY OF JSON OBJECTS

          reply({
            'topicCollection': topics
          });

        } else if (!isEmpty(queryStringParams)) { // THIS WOULD BE BETTER SUITED TO MULTIPLE FINDONE QUERIES

          let searchItems = Object.values(queryStringParams);

          let topics = await collection('topics');

          // THE SYNTAX READS LIKE IF YOU WERE AT A LIBRARY AND YOU'RE SEARCHING FOR A SUBJECT IN MYSTERY OR WHATEVER ELSE
          topics = await topics.find({topic: {$in: [...searchItems]}}).collation({locale: 'en', strength: 2}).toArray();

          // IT'S CONSIDERED BEST PRACTICE FOR ALL RESPONSES TO BE IN OBJECT FORMAT, LIKE A DICTIONARY
          return reply({
            'topics': topics
          });

        }
      }
    }
  });




  // SINCE THIS IS A POST REQUEST, THIS WILL BE FOR ADDING A TOPIC THAT DIDN'T ALREADY EXIST
  // SINCE MONGODB ALREADY ADDS A UNIQUE IDENTIFIER BY DEFAULT, ALL I NEED TO DO IS SPECIFY THE DATE AND AUTHOR, I GUESS
  server.route({
    method: 'POST',
    path: '/topics/create',
    config: {
      plugins: {
        body: {merg: false, sanitizer: {stripNullorEmpty: false}}
      },
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      },
    },
    handler: {
      async: async(request, reply) => {
        let payload = JSON.parse(request.payload); // WHY DO I NEED TO RUN JSON.PARSE INSTEAD OF USING HAPI BODYPARSER?
        const {topic, description} = payload; // PAYLOAD IS THE SAME AS BODY

        let topics = await collection('topics');
        let topicsBlogEntries = await collection('topics blog entries');
        // THE INSERTONE OPERATION RETURNS EITHER A 1 OR 0, DEPENDING ON IF THE OPERATION WAS SUCCESSFUL OR NOT
        // IN MY OTHER PROJECT, I HAD ADDED THE ID MANUALLY, BUT THIS OBVIOUSLY WILL NOT BE NECESSARY
        // THE INSERTONE OPERATION IS DIFFERENT FROM BULK INSERTS, AND THE RESPONSE INCLUDES THE OBJECTID FROM THE CREATION OPERATION
        if (!topic) return reply();



        const createTopicResult = await topics.insertOne({
          topic: topic,
          description: description || ''
        });


        await topics.createIndex({'topic': 1}, {collation: {locale: 'en', strength: 2}});


        // THIS WILL RUN NO MATTER WHAT IN ORDER TO CREATE THE RELATIONAL DATABASE LINK FOR INDIVIDUAL BLOG ENTRIES
        // NORMALLY THE _ID WOULD BE AUTO-GENERATED, BUT ACCORDING TO A TUTORIAL, THE NAME, (WHICH IS A FOREIGN KEY), IS UNIQUE ENOUGH THAT IT CAN BE USED INSTEAD
        await topicsBlogEntries.insertOne({
          _id: topic.toLowerCase(),
          topic: topic, // CASE IS PRESERVED FOR DISPLAY
          description: description || '',
          "blog entries": []
        });


        // await topicsBlogEntries.createIndex({"_id": 1}, {collation: {locale: 'en', strength: 2}});



        if (createTopicResult.insertedCount === 1) {
          return reply(201, {message: 'New topic submitted successfully!'})
        } else {
          return reply({message: 'The topic could not be created.'})
        }





        // const result = await topics.insertOne({
        //   topic: topic,
        //   description: description || "",
        //   // UNLESS BLOG ENTRIES IS INDEPENDENTLY USEFUL APART FROM THE PARENT DOCUMENT, YOU SHOULD STORE EVERYTHING IN THE SAME DOCUMENT
        //   // SO THIS IS A GOOD IDEA TO INSERT IT LIKE THIS
        //   'blog entries': [
        //     {
        //       title: '',
        //       date: '',
        //       "short description": '',
        //
        //     }
        //   ],
        // });
        //
        // // THIS REALLY ONLY NEEDS TO BE DONE ONE TIME, BUT FOR NOW, THIS WORKS RIGHT HERE
        // await topics.createIndex({"topic": 1}, {collation: {locale: "en", strength: 2}});
        //
        // if (result.insertedCount === 1) {
        //   return reply(201, {message: 'New topic submitted successfully'})
        // } else {
        //   return reply({message: "The topic could not be created"})
        // }






      }
    }
  });

  server.route({
    method: 'PUT',
    path: '/topics',
    config: {
      plugins: {
        body: {merg: false, sanitizer: {stripNullorEmpty: false}}
      },
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      },
    },
    handler: {
      async: async(request, reply) => {
        let {topic, description, _id} = request.payload; // PAYLOAD IS THE SAME AS BODY // TOPIC MUST BE DEFINED
        console.log(topic, description);

        let topics = await collection('topics');

        let result = topics.findOneAndUpdate({topic: topic}, {$set: {description: description}});


        if (result.insertedCount === 1) {
          return reply(201, {message: 'New topic submitted successfully'})
        } else {
          return reply({message: "The topic could not be created"})
        }
      }
    }
  });





  server.route({
    method: 'GET',
    path: '/topicblogentries',
    config: {
      plugins: {
        body: {merg: false, sanitizer: {stripNullorEmpty: false}}
      },
      tags: ['api'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      },
    },
    handler: {
      async: async(request, reply) => {

        let queryStringParams = request.query;

        let {_id} = queryStringParams;

        let topicBlogEntries = await collection('topics blog entries');

        let blogEntries = await topicBlogEntries.findOne({"_id": _id});

        console.log(blogEntries);

        return reply(blogEntries)
      }
    }
  });





  // I DON'T THINK I'M GOING TO NEED THIS FOR NOW, BUT THIS MIGHT BE A BETTER OPTION IN SOME CIRCUMSTANCES
  // server.route({
  //   method: 'GET',
  //   path: '/topics{id}',
  //   config: {
  //     plugins: {
  //       body: {merg: false, sanitizer: {stripNullorEmpty: false}}
  //     },
  //     tags: ['api', 'v1'],
  //     cors: {
  //       origin: ['*'],
  //       additionalHeaders: ['cache-control', 'x-requested-with']
  //     },
  //   },
  //   handler: {
  //     async: async(request, reply) => {
  //       let params = request.params;
  //
  //       console.log(params);
  //       let topics = await collection('topics');
  //
  //       topics = await topics.find().toArray();
  //
  //       return reply({
  //         topics: topics
  //       })
  //     }
  //   }
  // });


  return next();

};


plugin.attributes = {
  name: 'topics',
  version: '1.0.0'
};

export default plugin;
