const express = require('express')
const bountyRouter = express.Router()
const { v4: uuid } = require('uuid')


const bounties = [{firstName: '', lastName: '', living: null, bountyAmount: 0, type: '', id: uuid()}]


function Bounty(bounty) {
    const {firstName, lastName, living, bountyAmount, type} = bounty

    this.firstName = firstName
    this.lastName = lastName
    this.living = living
    this.bountyAmount = bountyAmount
    this.type = type
    this.uuid = uuid()
}


bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const bounty = req.body
        const newBounty = new Bounty(bounty)
        bounties.push(newBounty)
        res.send(bounties)
    })

bountyRouter.route('/:id')
    .put((req, res) => {
        let id = req.params.id
        const updateObject = req.body 
        const bountyIndex = bounties.findIndex(bounty => bounty.id === id)
        let updatedBounty
        if (bountyIndex !== -1) {
            updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
        }

        res.send(updatedBounty)
    })
    .delete((req, res) => {
        let id = req.params.id

        const bountyIndex = bounties.findIndex(bounty => bounty.id === id)
        if (bountyIndex !== -1) {
            bounties.splice(bountyIndex, 1)
        }
        
        res.send('Delete successful!!!')
    })

module.exports = bountyRouter
