const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const movieSchema = new Schema({
    title: {
        type: String, 
        required: true, 
    }, 
    genre: {
        type: String, 
        enum: ['action', 'fantasy'],
        required: true
    }, 
    releaseYear: Number, 
})

module.exports = mongoose.model('Movie', movieSchema)

