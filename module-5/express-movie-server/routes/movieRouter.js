const express = require('express')
const movieRouter = express.Router()
const {v4: uuid} = require('uuid')


const movies = [
    {title: 'die hard', genre: 'action', _id: uuid()}, 
    {title: 'star wars IV', genre: 'fantasy', _id: uuid()}, 
    {title: 'lion king', genre: 'fantasy', _id: uuid()}, 
    {title: 'Friday the 13th', genre: 'horror', _id: uuid()}
]


movieRouter.get('/search/genre', (req, res, next) => {
    const genre = req.query.genre 
    if (!genre) {
        const error = new Error('You must provide a genre')
        return next(error)
    }
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    res.status(200).send(filteredMovies)
})


movieRouter.route('/')
    .get((req, res, next) => {
        if (movies.length === 0) {
            const error = new Error('There are no movies in the database')
            res.status(500)
            return next(error)
        }
        res.status(500)
    })
    .post((req, res) => {
        const newMovie = req.body
        newMovie._id = uuid()
        movies.push(newMovie)
        res.status(201).send(newMovie)
    })

movieRouter.get('/:movieId', (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId) // This line will return undefined
    if (!foundMovie) {
        const error = new Error(`The item with id ${movieId} was not found!!`)
        res.status(500)
        next(error) // Call the next middlware in line (of middlewares) and will skip the first ones
    }
    res.status(200).send(foundMovie)
})

movieRouter.delete('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send('Successfully done')
})

movieRouter.put('/:movieId', (req, res) => {
    const movieId = req.params.movieId
    const updateObject = req.body
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movies[movieIndex], updateObject)
    res.send(updatedMovie)
})


module.exports = movieRouter
