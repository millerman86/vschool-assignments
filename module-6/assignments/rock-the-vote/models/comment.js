const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const commentSchema = new Schema({
    comment: {
        type: String, 
        required: true
    }, 
    user: {
        type: String, 
        required: true 
    }, 
    posted: {
        type: String, 
        default: Date.now
    }, 
    issue: {
        // The string will be an id, of course
        type: String, 
        required: true
    }, 
    issueId: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)