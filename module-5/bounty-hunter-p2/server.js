const express = require('express')
const app = express()
const bountyRouter = require('./routers/bountyRouter')

app.use('/', express.json())

app.use('/bounties', bountyRouter)
app.listen(9000, () => {
    console.log('Server is listening on port 9000');
})