const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('hello world');
})

app.get('/user', (req, res) => {
    res.send({ name: 'amren', age: 33 })
})

app.listen(9000, () => {
    console.log('The server is running on Port 9000');
})