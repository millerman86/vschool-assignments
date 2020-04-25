const express = require('express')

// Routes for 'fruits'
const fruitRouter = express.Router();


fruitRouter.route("/")
    .get((req, res) => {
        res.send("GET on /fruit blah");
    })
    .post((req, res) => {
        res.send("POST on /fruit endpoint");
    });

fruitRouter.route("/:fruitId")
    .get((req, res) => {
        res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
    });


module.exports = fruitRouter
