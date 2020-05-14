const express = require("express");
const inventoryRouter = express.Router();
const InventoryItem = require("../models/inventoryItem.js");

inventoryRouter
  .route("/")
  .get((req, res, next) => {
    InventoryItem.find((err, inventoryItems) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(inventoryItems);
    });
  })
  .post((req, res, next) => {
    const newInventoryItem = new InventoryItem(req.body);
    newInventoryItem.save((err, savedInventoryItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(savedInventoryItem);
    });
  });

inventoryRouter
  .route("/:inventoryId")
  .get((req, res, next) => {
    const { inventoryId } = req.params;
    InventoryItem.find({ _id: inventoryId }, (err, inventoryItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(inventoryItem);
    });
  })
  .put((req, res, next) => {
    const { inventoryId } = req.params;
    const { name, description } = req.body;

    InventoryItem.findByIdAndUpdate(
      { _id: inventoryId },
      req.body,
      { new: true },
      (err, updatedInventoryItem) => {
        if (err) {
          res.status(500);
          return next(err);
        }
        return res.status(201).send(updatedInventoryItem);
      }
    );
  })
  .delete((req, res) => {
    const { inventoryId } = req.params;
    InventoryItem.findByIdAndDelete(inventoryId, (err, deletedItem) => {
      if (err) {
        res.send(500);
        return next(err);
      }
      return res.status(201).send(deletedItem);
    });
  });

module.exports = inventoryRouter;
