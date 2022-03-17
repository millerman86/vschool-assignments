const express = require('express')
const app = express()
const mymiddlewarefunction = require('./middleware/mymiddlewarefunction')


app.use('/', mymiddlewarefunction) 

app.listen(9000, () => {
    console.log('server listening on port 9000');
})