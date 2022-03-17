const express = require('express')
const bookRouter = express.Router()
const Book = require('../models/book.js')


bookRouter.get('/', (req, res, next) => {
    Book.find((err, books) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

bookRouter.get('/:authorID', (req, res, next) => {
    Book.find({author: req.params.authorID}, (err, books) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})

bookRouter.put('/like/:bookID', (req, res, next) => {
    Book.findByIdAndUpdate(
        {_id: req.params.bookID}, 
        {
            $inc: {
                likes: 1
            }, 
            $pull: {
                relatedTopics: "some Topic"
            }
        }, 
        
        {new: true}, 
        (err, updatedBook) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBook)
        }
    )
})

bookRouter.post('/:authorID', (req, res, next) => {
    req.body.author = req.params.authorID
    const newBook = new Book(req.body)
    newBook.save((err, savedBook) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBook)
    })
})

bookRouter.get('/search/bylikes', (req, res, next) => {
    Book.where('likes').gte(5).exec((err, book) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(books)
    })
})


module.exports = bookRouter