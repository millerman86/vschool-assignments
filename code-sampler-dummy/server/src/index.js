import {Server} from 'hapi';
import Topics from './plugins/topics/topics';
import Blog from './plugins/blog/blog';
import Login from './plugins/login/login';


const server = new Server({});
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3001;

server.connection({
  port,
  router: {
    isCaseSensitive: false
  },
  routes: {
    cors: true
  }
});


server.register([
  require('hapi-bodyparser'),
  require('inert'),
  require('vision'),
  require('blipp'),
  require('tv'),
  require('hapi-async-handler'),
  {
    register: require('hapi-swagger'),
    options: {
      cors: true,
      jsonEditor: true,
      documentationPath: '/',
      info: {
        title: 'Example',
        version: '1.0.0',
        description: 'An example api',
      }
    }
  },


  {
    register: require('good'),
    options: {
      ops: {
        interval: 5000
      },
      reporters: {
        console: [
          {
            module: 'good-console',
            args: [{
              log: '*',
              response: '*', request: '*', error: '*'
            }]
          }, 'stdout']
      }
    }
  },
  Blog,
  Topics,
  Login
], err => {
  if (err) throw err;

  if (env !== 'testing') {
    server.start(err => {
      if (err) throw err;
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  }

});


export default server;
