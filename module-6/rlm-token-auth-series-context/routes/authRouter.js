const express = require('express')
const authRouter = express.Router()
require('dotenv').config()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

 
authRouter.post('/signup', (req, res, next) => {
    User.findOne({username: req.body.username}, (err, user) => {
        if (err) {
            console.log('error');
            res.status(500)
            return next(err)
        }
        if (user) {
            console.log('user found');
            return next()
        }
        const newUser = new User(req.body)
        newUser.save((err, savedUser) => {
            console.log('savedUser', savedUser);
            if (err) {
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            return res.status(201).send({token, user: savedUser})
        })
    })
})
  
module.exports = authRouter

