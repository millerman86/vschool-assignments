const express = require('express')
const app = express()
// const uuid = require('uuid/v4')
const { v4: uuid } = require('uuid');
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.use('/movies', require('./routes/movieRouter'))
app.use('/tvshows', require('./routes/tvshowRouter'))

app.listen(9000, () => {
    console.log('The server is running on Port 9000');
})