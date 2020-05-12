const express = require('express')
const app = express()
const mongoose = require('mongoose')

const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost:27017/moviesdb', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true, 
        useFindAndModify: false
    }, 
    () => console.log('Connected to the DB')
)


app.use('/movies', require('./routes/movieRouter'))
app.use('/tvshows', require('./routes/tvshowRouter'))

// Error handler
app.use((err, req, res, next) => {
    return res.send({errMsg: err.message}); // You must send this to trigger the catch in the client page
})

app.listen(9000, () => {
    console.log('The server is running on Port 9000');
})