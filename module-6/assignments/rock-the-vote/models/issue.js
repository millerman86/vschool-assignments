const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const issueSchema = new Schema({
    issue: {
        type: String, 
        required: true
    }, 
    user: {
        type: String, 
        required: true
    }, 
    
})

module.exports = mongoose.model('Issue', issueSchema)
