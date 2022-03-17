import {collection} from '../../db.js';
let ObjectId = require('mongodb').ObjectId;





// REFACTOR THE ENDPOINTS TO LOOK LIKE THIS
//
// blog/
// blog/:id/edit(update)
// blog/create/
// blog/:id view a single blog
// blog/:id/delete

const plugin = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/blog/{id}',
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

        let {id} = request.params;
        // RUN ENCODE URI COMPONENT HERE

        let topics = await collection('topics');


        let blog =  topics.findOne( { "_id": ObjectId(id) } );
        // let blogEntry = await topics.findOne({ObjectId(id)});

        return reply({
          "blog entry": blog
        });
      }
    }
  });
  server.route({
    method: 'POST',
    path: '/blog/create',
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
        let topics = await collection('topics');
        let result = await topics.findOneAndUpdate({topic: 'bananas'}, {$set: {'content': request.payload}});

        console.log(result);

        return reply({message: 'SUCCESS!!'});
      }
    }
  });
  server.route({
    method: 'PUT',
    path: '/blog/{id}/edit',
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

        // RUN ENCODE URI COMPONENT HERE

        let topics = await collection('topics');
        let result = await topics.findOneAndUpdate({topic: 'bananas'}, {$set: {'content': request.payload}});

        console.log(result);

        return reply({message: 'SUCCESS!!'});
      }
    }
  });
  server.route({
    method: 'DELETE',
    path: '/blog/{id}/delete',
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

        // RUN ENCODE URI COMPONENT HERE
        let topics = await collection('topics');
        let result = await topics.findOneAndUpdate({topic: 'bananas'}, {$set: {'content': request.payload}});

        console.log(result);

        return reply({message: 'SUCCESS!!'});
      }
    }
  });
  return next();
};



plugin.attributes = {
  name: 'blog',
  version: '1.0.0'
};

export default plugin;

