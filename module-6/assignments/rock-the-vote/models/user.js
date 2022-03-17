const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const bcrypt = require('bcrypt')

// We can specify if the user is an admin by using isadmin
// The schema is almost like the constructor method of a class
const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        lowercase: true, // normalize , make data 'uniform'
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
    }, 
    upVotedIssues: {
        type: Array, 
    }, 
    downVotedIssues: {
        type: Array, 
    }
})


// pre-save hook to encrypt user passwords on signup
// this is considered a hook, fires on the in-between
userSchema.pre('save', function(next) {
    const user = this 
    console.log('user', user);
    // Returns true if this document was modified, else false.
    // If path is given, checks if a path or any full path containing path as part of its path
    // chain has been modified.
    console.log('modified', user.isModified('password'));
    console.log('isAdmin', user.isModified('isAdmin'));
    console.log('username', user.isModified('username'));

    // If the password for the user is not modified, then exit and don't run the encryption
    // this will also run when updating a password, in which case it will check to see if it has been modified against the database entry, 
    // and this will avoid double hashing 
    // This will both run when updating, as well as signing up
    // Assuming that this function gets run when the user updates, it will have already found the user from the database,
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next() // Show bcrypt that this is the first time that they are signing up with a password
    bcrypt.hash(user.password, 10, (err, hash) => { // second argument is the salt rounds
        if (err) return next(err)
        user.password = hash
        next()
    })
})

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    // passwordAttempt is plain text
    // this.password is the actual entrypted password from the database
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => { 
        if (err) return callback(err) // The return keyword here actually ends the function
        return callback(null, isMatch)
    })
}

userSchema.methods.withoutPassword = function() {
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model('User', userSchema)

// Document#isModified([path])
// Returns true if this document was modified, else false.

// The User model should be resistant to program logic errors, 
// like double-encrypting the password on user updates bcrypt interactions 
// should be performed asynchronously to avoid blocking the event loop 
// (bcrypt also exposes a synchronous API)

// visible password = cleartext