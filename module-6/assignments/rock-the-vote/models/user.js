const mongoose = require('mongoose')
const Schema = mongoose.Schema 


// We can specify if the user is an admin by using isadmin
const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        lowercase: true, // normalize, make data 'uniform'
        unique: true
    }, 
    password: {
        type: String, 
        required: true
    }, 
    memberSince: {
        type: Date, 
        default: Date.now
    }, 
    isAdmin: {
        type: Boolean, 
        default: false
    }
})

module.exports = mongoose.model('User', userSchema)
