const express = require('express')
const authRouter = express.Router()
require('dotenv').config()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

authRouter.post('/signup', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (user) {
            res.status(403)
            return next(new Error('That username is already taken'))
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
            // The reason that we send information about the user separately is that
            return res.status(201).send({token, user: savedUser.withoutPassword()})
        })
    })
})

// Login
authRouter.post('/login', (req, res, next) => {
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if (!user) {
            res.status(403)
            return next(new Error('Username or Password are incorrect'))
        }
        user.checkPassword(req.body.password, (err, isMatch) => {
            if (err) {
                res.status(403)
                return next(new Error('Username or Password are incorrect'))
            }
            if (!isMatch) {
                res.status(403)
                return next(new Error('Username or Password are incorrect'))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(200).send({token, user: user.withoutPassword()})
        })


        // // Is the password that they submitted not equal to the one they have saved in the database?
        // if (req.body.password !== user.password) {
        //     res.status(403) 
        //     return next(new Error('Username or Password are incorrect'))
        // }
    })
})

module.exports = authRouter



// READ THE DOCS!!!
// https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1



// UserSchema.pre(‘save’, { var user = this;
//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('password')) return next();
    
//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return next(err);
    
//         // hash the password along with our new salt
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if (err) return next(err);
    
//             // override the cleartext password with the hashed one
//             user.password = hash;
//             next();
//         });
// The above code will accomplish our goal of always hashing the password when a 
// document is saved to the database. There are a couple things to be aware of though: 
// Because passwords are not hashed until the document is saved, be careful if you’re 
// interacting with documents that were not retrieved from the database, as any passwords 
// will still be in cleartext. Mongoose middleware is not invoked on update() operations, 
// so you must use a save() if you want to update user passwords. Step 3: Password 
// Verification Now that we have our User model and we’re hashing passwords, the only thing 
// left is to implement password verification. Adding this to our model turns out to be 
// just a few more lines of code: