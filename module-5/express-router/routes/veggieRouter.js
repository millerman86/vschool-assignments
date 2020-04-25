const express = require('express')
// Routes for 'vegetables'
const veggieRouter = express.Router();


veggieRouter.route("/")
    .get((req, res) => {
        res.send("GET on /vegetable endpoint");
    })
    .post((req, res) => {
        res.send("POST on /vegetable endpoint");
    });

veggieRouter.route("/:vegetableId")
    .get((req, res) => {
        res.send(`GET  on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT  on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE  on /vegetable/${req.params.vegetableId} endpoint`);
    });
module.exports = veggieRouter