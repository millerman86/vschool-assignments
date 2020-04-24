const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid')


// bountyRouter.use('/bounties/:id', function (req, res, next) {
//     console.log('Request Id:', req.params.id);
//     next();
// });


const bounties = [
    {firstName: "amren", lastName: "miller", living: false, bountyAmount: 0, type: "", _id: uuid.v4()}
]
console.log(bounties[0])
bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body 
        newBounty._id = uuid.v4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} to the database!`)
    })


bountyRouter.route('/:id')
    .get((req, res) => {
        const bountyId = req.params.id 
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })
    .delete((req, res) => {
        console.log(req.params.id)
        res.send('blah')
        console.log('delete bounty')
    })
    .put((req, res) => {
        console.log(req.params.id)
        res.send('blah2')
        console.log('put bounties')
    })

module.exports = bountyRouter
    
    
    
    
    

// http://localhost:9000/bounties/