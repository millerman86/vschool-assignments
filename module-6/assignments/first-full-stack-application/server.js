const express = require('express')
const app = express() 
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressjwt = require('express-jwt')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/full-stack-application', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true,
        useFindAndModify: false
    }, 
    () => console.log('Connected to the DB')
)

app.listen(9000, () => {
    console.log('Server is running on local port 9000')
})
