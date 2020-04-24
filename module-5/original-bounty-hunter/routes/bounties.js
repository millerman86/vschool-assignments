const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid')


const bounties = [
    {firstName: "amren", lastName: "miller", living: false, bountyAmount: 0, type: "", _id: uuid.v4()}
]

bountyRouter.route('/blah')
    .get((req, res) => {
        console.log('blah')
        res.send('blah')
    })
    .post((req, res) => {
        const newBounty = req.body 
        newBounty._id = uuid.v4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} to the database!`)
    })
    .put((req, res) => {
        console.log('put bounties')
    })
    .delete((req, res) => {
        console.log('delete bounty')
    })


module.exports = bountyRouter