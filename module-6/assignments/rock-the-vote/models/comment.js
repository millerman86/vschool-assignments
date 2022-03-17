const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const commentSchema = new Schema({
    comment: {
        type: String, 
        required: true
    }, 
    user: {
        type: Object, 
        required: true 
    }, 
    
    posted: {
        type: String, 
        default: Date.now
    }, 
    
    issueId: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("Comment", commentSchema)