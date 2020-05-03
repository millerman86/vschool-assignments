const express = require('express')
const movieRouter = express.Router()
const {v4: uuid} = require('uuid')


const movies = [
    {title: 'die hard', genre: 'action', _id: uuid()}, 
    {title: 'star wars IV', genre: 'fantasy', _id: uuid()}, 
    {title: 'lion king', genre: 'fantasy', _id: uuid()}, 
    {title: 'Friday the 13th', genre: 'horror', _id: uuid()}
]

movieRouter.route('/')
    .get((req, res) => {
        res.send(movies)
    })
    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuid()
        movies.push(newMovie)
        res.send(`The movie, ${newMovie.title} has been successfully added to the database`)
    })


movieRouter.get('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})

module.exports = movieRouter
