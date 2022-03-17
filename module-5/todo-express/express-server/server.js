const express = require('express')
const app = express()
const todoRouter = require('./routers/todo-router')


app.use('/', express.json())

app.use('/todos', todoRouter)

app.listen(9000, () => {
    console.log('Server listening on port 9000');
})