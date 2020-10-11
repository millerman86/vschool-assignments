const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/issue')
const Comment = require('../models/comment')
const User = require('../models/user')



issueRouter.get('/', (req, res, next) => {
    Issue.find((err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        let promiseArray = []
        issues.forEach((issue, i) => {
            let promise = new Promise((resolve, reject) => {
                Comment.find({'issueId': issue._id}, (err, commentCount) => {
                    if (err) {
                        reject(err)
                    }
                    resolve(commentCount)
                   
                }).countDocuments()
            })

            let createdArray = []
            for (let i = 0; i < issues.length; i++) {
                createdArray.push(i)
            }

            createdArray.forEach(() => {
                promiseArray.push(promise)
            })
        })
        
        Promise.all(promiseArray)
            .then((values) => {
                issues.forEach((issue, i) => {
                    issue['commentCount'] = values[i]
                })
                return res.status(201).send(issues)
            })
            .catch(err => {
                return res.sendStatus(404)
            })
    })
})


// We want to be able to get all the issues that belong to the user using the application
issueRouter.get('/user', (req, res, next) => {
    Issue.find({user: req.user._id}, (err, issues) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        let promiseArray = []
        issues.forEach((issue, i) => {
            let promise = new Promise((resolve, reject) => {
                Comment.find({'issueId': issue._id}, (err, commentCount) => {
                   if (err) {
                       reject(err)
                   }
                   resolve(commentCount)
                }).countDocuments()
            })

            let createdArray = []
            for (let i = 0; i < issues.length; i++) {
                createdArray.push(i)
            }

            createdArray.forEach(() => {
                promiseArray.push(promise)
            })
        })

        Promise.all(promiseArray)
            .then((values) => {
                issues.forEach((issue, i) => {
                    issue['commentCount'] = values[i]
                })

                return res.status(201).send(issues)
            })
            .catch(() => {
                res.sendStatus(500)
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

issueRouter.get('/:id', (req, res, next) => {
    req.body.user = req.user._id
    Issue.findOne({_id: req.params.id}, (err, issue) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send({issue})

    })
})


// '/api/issue/upvote'
issueRouter.get('/user/upvote/:id', (req, res, next) => {
    const { id } = req.params
    User.findOneAndUpdate({_id: req.user._id}, {'$set': {upVotedIssues: [id]}, '$pull': {downVotedIssues: id}}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }

        // Only updates if it hasn't updated before
        if (!user.upVotedIssues.includes(id) && !user.downVotedIssues.includes(id)) {
            Issue.findByIdAndUpdate({_id: id}, {'$inc': {voteCount: 1}}, (err, issue) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
            })
        } else if (user.downVotedIssues.includes(id)) {
            Issue.findByIdAndUpdate({_id: id}, {'$inc': {voteCount: 2}}, (err, issue) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
            })
        }
    })

    User.findOne({_id: req.user._id}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        
        Issue.findById({_id: id}, (err, issue) => {
            if (err) {
                res.status(500)
                return next(err)
            }

            return res.status(201).send({user: user.withoutPassword(), issue})
        })
    })
})



// '/api/issue/downvote'
issueRouter.get('/user/downvote/:id', (req, res, next) => {
    const { id } = req.params
    User.findOneAndUpdate({_id: req.user._id}, {'$set': {downVotedIssues: [id]}, '$pull': {upVotedIssues: id}}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        
        if (!user.downVotedIssues.includes(id) && !user.upVotedIssues.includes(id)) {
            Issue.findByIdAndUpdate({_id: id}, {'$inc': {voteCount: -1}}, (err, issue) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
            })
        } else if (user.upVotedIssues.includes(id)) {
            Issue.findByIdAndUpdate({_id: id}, {'$inc': {voteCount: -2}}, (err, issue) => {
                if (err) {
                    res.status(500)
                    return next(err)
                }
            })
        }
    })
    
    User.findOne({_id: req.user._id}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        
        
        Issue.findById({_id: id}, (err, issue) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            
            return res.status(201).send({user: user.withoutPassword(), issue})
        })
    })
})

issueRouter.get('/getcomments/:id', (req, res, next) => {
    req.body.user = req.user._id
    Comment.find({issueId: req.params.id}, (err, comments) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send({comments: comments})
        
    })
})


module.exports = issueRouter