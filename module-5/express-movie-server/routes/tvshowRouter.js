const express = require('express')
const tvshowRouter = express.Router()
const {v4: uuid} = require('uuid')


const tvShows = [
    {title: 'Rick and Morty', _id: uuid()},
    {title: 'Watchmen', _id: uuid()},
    {title: 'Rick and Morty', _id: uuid()},
    {title: 'Rick and Morty', _id: uuid()}
]

tvshowRouter.route('/')
    .get((req, res) => {
        res.send(tvShows)
    })
    .post((req, res) => {
        const newShow = req.body 
        newShow._id = uuid()
        tvShows.push(newShow)
        res.send(`Successfully added ${newShow.title} to the database`)
    })

tvshowRouter.get('/:tvshowId', (req, res) => {
    const tvShowId = req.params.tvshowId
    const foundShow = tvShows.find(show => show._id === tvShowId)
    res.send(foundShow)
})


module.exports = tvshowRouter