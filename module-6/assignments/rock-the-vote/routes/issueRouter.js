const express = require('express')
const Issue = require('../models/issue')
const Comment = require('../models/comment')
const issueRouter = express.Router()



// First, we want to be able to get all the political issues
// This is correct
issueRouter.get('/user/:issueId', (req, res) => {
    Issue.findOne({_id: req.params.issueId}, (err, issue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issue)
    })
})




// Then, we want to be able to get all the issues that belong to the user using the application
// Get issue by user id 
// Since we have already authorized the user by hitting the /api/issue endpoint, we 
issueRouter.get('/user', (req, res, next) => {
    // The user id is sent in the header
    // Remember that all properties that were used when signing are available after the 
    // token gets parsed
    Promise.all([
        Issue.find({user: req.user._id}),
      ]).then( ([ issues ]) => {
          
          issues.forEach((issue, i) => {

            let promise = new Promise((resolve, reject) => {
                Comment.find({'issue': '1234'}, (err, comments) => {
                   
                }).count().then(data => { 
                    resolve(data)
                })
            })

            let createdArray = []
            for (let i = 0; i < issues.length; i++) {
                createdArray.push(i)
            }

            let array = []
            createdArray.forEach(() => {
                array.push(promise)
            })

            Promise.all(array).then((values) => {
                issues.forEach((issue, i) => {
                    issue['commentCount'] = values[i]
                })
            }).then(() => {
                res.status(201).send(issues)
            })
        })
    })
})

issueRouter.post('/', (req, res, next) => {
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