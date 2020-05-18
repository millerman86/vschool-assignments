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
    'mongodb://localhost:27017/rock-the-vote-app', // all collections will go into one database entry
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true,
        useFindAndModify: false
    }, 
    () => console.log('Connected to the DB')
)

app.use('/auth', require('./routes/authRouter')) // for signup and login
app.use('/api', expressjwt({secret: process.env.SECRET}))
app.use('/api/issue', require('./routes/issueRouter'))


app.use((err, req, res, next) => {
    console.log(err)
    if (err.name === 'UnauthorizedError') {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log('Server is running on local port 9000')
})