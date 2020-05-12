const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie')

movieRouter.get('/', (req, res, next) => {
    Movie.find((err, movies) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})


movieRouter.get('/search/genre', (req, res, next) => {
    console.log(req.query.genre);
    Movie.find({genre: req.query.genre}, (err, movies) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
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


movieRouter.post('/', (req, res, next) => {
      const newMovie = new Movie(req.body);
      newMovie.save((err, savedMovie) => {
          if (err) {
              res.status(500)
              return next(err)
          }
          return res.status(201).send(savedMovie)
      })
})

movieRouter.delete('/:movieId', (req, res, next) => {
    Movie.findOneAndDelete({_id: req.params.movieId}, (err, deleteItem) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deleteItem.title} from the database`)
    })
})


movieRouter.put('/:movieId', (req, res, next) => {
   Movie.findOneAndUpdate( // Similar to Object.assign()
       {_id: req.params.movieId}, // Find this one to update
       req.body, // Update the object with this data
       {new: true}, // updated version of the object that gets sent to the frontend
       // Upsert: If the records matching the criteria does not exist in the database, a new record will be inserted
       // By default, find one and update will send you the outdated version of the object
       (err, updatedMovie) => {
           if (err) {
               res.status(500)
               return next(err)
            }
            return res.status(201).send(updatedMovie)
       }
   )
})



module.exports = movieRouter




// movieRouter.put('/:movieId', (req, res) => {
//     const movieId = req.params.movieId
//     const updateObject = req.body
//     const movieIndex = movies.findIndex(movie => movie._id === movieId)
//     const updatedMovie = Object.assign(movies[movieIndex], updateObject)
//     res.send(updatedMovie)
// })


// movieRouter.get('/:movieId', (req, res, next) => {
//     const movieId = req.params.movieId
//     const foundMovie = movies.find(movie => movie._id === movieId) // This line will return undefined
//     if (!foundMovie) {
//         const error = new Error(`The item with id ${movieId} was not found!!`)
//         res.status(500)
//         next(error) // Call the next middlware in line (of middlewares) and will skip the first ones
//     }
//     res.status(200).send(foundMovie)
// })
