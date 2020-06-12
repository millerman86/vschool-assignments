// import {collection} from '../../db.js';



const plugin = (server, options, next) => {
  server.route({
    method: 'POST',
    path: '/login',
    config: {
      plugins: {
        body: {merg: false, sanitizer: {stripNullorEmpty: false}}
      },
      tags: ['api', 'v1'],
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with']
      },
    },
    handler: {
      async: async(request, reply) => {
        let {username, password} = request.payload;

        return reply({"token": 'token'});
      }
    }
  });
  return next();
};



plugin.attributes = {
  name: 'login',
  version: '1.0.0'
};

export default plugin;

