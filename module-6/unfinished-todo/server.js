const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressjwt = require('express-jwt')


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  'mongodb://localhost:27017/user-authentication',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to the DB')
)

app.use('/auth', require('./routes/authRouter.js'))
// expressjwt takes the user out of the token and puts it in req.user so that we can use it as a regular object
app.use('/api', expressjwt({secret: process.env.SECRET})) // unauthorized error
app.use('/api/todo', require('./routes/todoRouter.js'))

app.use((err, req, res, next) => {
  console.log(err)
  if (err.name === "UnauthorizedError") {
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})