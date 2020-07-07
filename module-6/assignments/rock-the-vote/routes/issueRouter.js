const express = require('express')
const Issue = require('../models/issue')
const Comment = require('../models/comment')
const issueRouter = express.Router()
const User = require('../models/user')




issueRouter.get('/', (req, res) => {
    Promise.all([
        Issue.find(),
      ]).then( ([ issues ]) => {
          issues.forEach((issue, i) => {
            let promise = new Promise((resolve, reject) => {
                Comment.find({'issueId': issue._id}, (err, comments) => {
                   
                }).countDocuments().then(data => { 
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





// We want to be able to get all the issues that belong to the user using the application
issueRouter.get('/user', (req, res, next) => {
    // The user id is sent in the header
    // Remember that all properties that were used when signing are available after the 
    // token gets parsed
    
    Promise.all([
        Issue.find({user: req.user._id}),
      ]).then( ([ issues ]) => {
          issues.forEach((issue, i) => {
            console.log('id', issue._id);
            let promise = new Promise((resolve, reject) => {
                Comment.find({'issueId': issue._id}, (err, comments) => {
                   
                }).countDocuments().then(data => { 
                    console.log('data', data);
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




// '/api/issue/upvote'
issueRouter.get('/user/upvote/:id', (req, res) => {
    const { id } = req.params
    User.findOneAndUpdate({_id: req.user._id}, {'$set': {upVotedIssues: [id]}}, {'$pull': {downVotedIssues: [id]}}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        Issue.findByIdAndUpdate({_id: id}, {'$inc': {voteCount: 1}}, (err, issue) => {
            if (err) {
                res.status(500)
                return next(err)
            }

        })
    })

    User.findOne({_id: req.user._id}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        
        Issue.findOne({_id: id}, (err, issue) => {
            return res.send({user: user.withoutPassword(), issue})
        })
    })
})

// '/api/issue/downvote'
issueRouter.get('/user/downvote/:id', (req, res, next) => {
    const { id } = req.params

    User.findOneAndUpdate({_id: req.user._id}, {'$set': {downVotedIssues: [id]}}, {'$pull': {upVotedIssues: [id]}}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
    })

    Issue.findByIdAndUpdate({_id: id}, {'$inc': {voteCount: -1}}, (err, issue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
    })

    User.findOne({_id: req.user._id}, (err, user) => {

        Issue.findOne({_id: id}, (err, issue) => {
            return res.send({user: user, issue})
        })
    })
})


module.exports = issueRouter










