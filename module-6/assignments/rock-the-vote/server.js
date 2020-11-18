const express = require('express')
const app = express() 
const morgan = require('morgan')
const mongoose = require('mongoose')
/* Error handling for jwt
The default behavior is to throw an error when the token is
invalid, so you can add your custom logic to manage unauthorized access as follows: */
const expressjwt = require('express-jwt')
const cors = require('cors')

let amren = 'amren'
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
app.use('/api', expressjwt({secret: process.env.SECRET})) // Remember: The token is in the header
app.use('/api/issue', require('./routes/issueRouter'))
app.use('/api/comment', require('./routes/commentRouter'))

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

console.log(amren);



//////

// // ... other imports 
// const path = require("path")

// // ... other app.use middleware 
// app.use(express.static(path.join(__dirname, "client", "build")))

// // ...
// // Right before your app.listen(), add this:
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });


//////

// BASIC USAGE FOR JWT
// Basic usage using an HS256 secret:
// var jwt = require('express-jwt');
 
// app.get('/protected',
//   jwt({ secret: 'shhhhhhared-secret' }),
//   function(req, res) {
//     if (!req.user.admin) return res.sendStatus(401);
//     res.sendStatus(200);
// });