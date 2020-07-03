const express = require('express')
const Issue = require('../models/issue')
const Comment = require('../models/comment')
const issueRouter = express.Router()





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


module.exports = issueRouter














// issueRouter.get('/user/:issueId', (req, res) => {
//     console.log('you are in the wrong function');
//     let {issueId} = req.params
//     Issue.findOne({_id: req.params.issueId}, (err, issue) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }

//         return res.status(200).send(issue)
//     })
// })
