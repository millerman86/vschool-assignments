const mongoose = require('mongoose')
const Schema = mongoose.Schema 

const authorSchema = new Schema({
    name: {
        type: String, 
        required: true 
    }
})

module.exports = mongoose.model('Author', authorSchema)

