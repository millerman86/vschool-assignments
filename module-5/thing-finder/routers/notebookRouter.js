const express = require('express')
const notebookRouter = express.Router()


const notes = [
    {
        text: '', 
        title: '', 
        _id: ''
    }
]

notebookRouter.route('/')
    .get((req, res) => {
        
    })

notebookRouter.route('/:id')
    .get((req, res) => {

    })

module.exports = notebookRouter 
