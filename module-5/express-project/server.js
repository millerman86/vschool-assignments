const express = require('express')
const app = express()
const uuid = require('uuid/v4')


const movies = [
    { title: "die hard", genre: "action", _id: uuid()}, 
    { title: "star wars", genre: "fantasy", _id: uuid()}, 
    { title: "lion king", genre: "fantasy", _id: uuid()}, 
    { title: "friday the 13th", genre: "horror", _id: uuid()}, 
]

app.get('/', (req, res) => {
    console.log('hello world');
})

app.get('/user', (req, res) => {
    res.send({ name: 'amren', age: 33 })
})

app.post('/movies', (req, res) => {
    const newMovie = req.body 
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(`Successfully added ${newMovie.title} to the database!`)
})

app.listen(9000, () => {
    console.log('The server is running on Port 9000');
})