const express = require('express')
const Issue = require('../models/issue')
const issueRouter = express.Router()



// First, we want to get all the issues that belong to the user using the application
// // Then, we want to get all the political issues
issueRouter.get('/', (req, res) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issueRouter.get('/user', (req, res) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})



issueRouter.post('/', (req, res) => {
    req.body.user = req.user._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})


module.exports = issueRouter