


//
//
// else if (!isEmpty(params)) { // PARAMS ARE NOT THE SAME THING AS A QUERY STRING, SO WHEN PARAMS ARE NOT EMPTY,
//   // THAT IS LOOKING RATHER FOR A SPECIFIC PIECE OF DATA, RATHER THAN CASTING A NET, SO TO SPEAK
//   let topics = await collection('topics');
//
//   // FIGURE OUT A WAY TO MAKE THIS CASE INSENSITIVE
//   let searchItem = params.topic[0].toUpperCase() + params.topic.slice(1);
//
//   // THESE TWO STATEMENTS WORK, BUT THE MODEL NEEDS TO BE DIFFERENT
//   // let topic = topics.find({[searchItem]: {$exists: true}});
//   // topic = await topic.toArray();
//
//
//   let topic = topics.findOne({'topic': searchItem});
//
//   return reply(topic);
//
// }
