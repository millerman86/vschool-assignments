const express = require('express')
const app = express()

// const uuid = require('uuid/v4')
const { v4: uuid } = require('uuid');
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.use('/movies', require('./routes/movieRouter'))
app.use('/tvshows', require('./routes/tvshowRouter'))

// Error handler
app.use((err, req, res, next) => {
    return res.status(500).send({errMsg: err.message}); // You must send this to trigger the catch in the client page
})

app.listen(9000, () => {
    console.log('The server is running on Port 9000');
})