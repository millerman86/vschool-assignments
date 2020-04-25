const express = require('express')
const bountyRouter = express.Router()
const uuid = require('uuid')


const bounties = [
    {firstName: "amren", lastName: "miller", living: false, bountyAmount: 0, type: "", _id: '1788d37d-2f44-4f98-be82-3a7a6f3fca6b'}
]

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


const findBounty = (id, newValues = {test: 'test'}) => {
    if (typeof newValues !== 'object') return 
    let foundBounty;
    bounties.find((item, index) => {
        let found;
        if (item._id === id) found = index
        if (found === undefined) return 
        bounties[found] = {...bounties[found], ...newValues}
        foundBounty = bounties[found]

    })
    return foundBounty
}


bountyRouter.route('/:id')
    .get((req, res) => {
        const bountyId = req.params.id 
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })
    .delete((req, res) => {
        bounties.forEach((bounty, i) => {
            if (bounty._id === req.params.id) {
                bounties.splice(i, 1)
            }
        })
        res.send(bounties)
    })
    .put((req, res) => {
        let foundBounty = findBounty(req.params.id, req.body)
        res.send(foundBounty)
    })

module.exports = bountyRouter