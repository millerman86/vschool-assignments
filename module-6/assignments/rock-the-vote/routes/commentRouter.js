const express = require('express')
const Issue = require('../models/issue')
const Comment = require('../models/comment')
const issue = require('../models/issue')
const commentRouter = express.Router()



// First, we want to be able to get all the political issues
// This is correct
commentRouter.get('/', (req, res) => {
    Comment.find((err, comments) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        console.log(comments);
        return res.status(200).send(comments)
    })
})

module.exports = commentRouter