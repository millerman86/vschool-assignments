const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const bcrypt = require('bcrypt')

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

// pre-save hook to encrypt user passwords on signup
userSchema.pre('save', function(next) {
    const user = this 
    if (!user.isModified('password')) return next()
    bcrypt.hash(user.password, 10, (err, hash) => { // second argument is the salt rounds
        if (err) return next(err)
        user.password = hash
        next()
    })
})


module.exports = mongoose.model('User', userSchema)
