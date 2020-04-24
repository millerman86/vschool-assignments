const express = require('express')
const app = express()

app.use(express.json())

app.use('/bounties', require('./routes/bounties.js'))

app.listen(9000, () => {
    console.log('The server is listening on Port 9000')
})