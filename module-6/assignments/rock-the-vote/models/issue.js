const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const issueSchema = new Schema({
    issue: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: false
    },
    user: {
        type: String, 
        required: true
    }, 
    link: {
        type: String, 
        required: false
    }, 
    imgUrl: {
        type: String, 
        required: false
    }
    
})

module.exports = mongoose.model('Issue', issueSchema)
