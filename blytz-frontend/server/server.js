let express = require('./config/express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

let app = express();

app.listen(3001);
console.log('Server running at http://localhost:3001/');
module.exports = app;