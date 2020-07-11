const express = require('express')
const Comment = require('../models/comment')
const commentRouter = express.Router()



// First, we want to be able to get all the political issues
// This is correct
commentRouter.get('/', (req, res, next) => {
    Comment.find((err, comments) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})

commentRouter.post('/', (req, res, next) => {
    const newComments = new Comment(req.body)
    newComments.save((err, savedComment) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedComment)
    })
})

module.exports = commentRouter