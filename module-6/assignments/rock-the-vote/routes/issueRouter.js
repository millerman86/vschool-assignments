const express = require('express')
const Issue = require('../models/issue')
const Comment = require('../models/comment')
const issue = require('../models/issue')
const comment = require('../models/comment')
const issueRouter = express.Router()



// First, we want to be able to get all the political issues
// This is correct
issueRouter.get('/', (req, res) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

// Then, we want to be able to get all the issues that belong to the user using the application
// Get issue by user id 
// Since we have already authorized the user by hitting the /api/issue endpoint, we 
issueRouter.get('/user', (req, res, next) => {
    // The user id is sent in the header
    // Remember that all properties that were used when signing are available after the 
    // token gets parsed
    console.log('id', req.user._id);
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
            console.log(createdArray);

            let array = []
            createdArray.forEach(() => {
                array.push(promise)
            })

            Promise.all(array).then((values) => {
                issues.forEach((issue, i) => {
                    issue['commentCount'] = values[i]
                })
            }).then(() => {
                console.log(issues);
                res.status(201).send(issues)
            })
        })
    })

})

issueRouter.post('/', (req, res, next) => {
    req.body.user = req.user._id
    console.log(req.body);
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