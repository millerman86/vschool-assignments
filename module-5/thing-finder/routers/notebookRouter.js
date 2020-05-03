const express = require("express");
const notebookRouter = express.Router();
const { v4: uuid } = require("uuid");

// Right now, it will suffice to have these be object literals, but later I will have to change to constructor functions
const note = {
  title: "",
  guid: uuid(),
  id: uuid(),
  text: "",
};

// As per the database relational diagram from the evernote API docs
const notebook = {
  id: uuid(),
  guid: uuid(),
  name: "test",
  notes: [{ ...note }],
};

const notebookCollection = [{ ...notebook }];

notebookRouter.route("/").get((req, res) => {
  console.log(req.query);
  let foundNotebook;
  if (Object.keys(req.query).length > 1) {
    foundNotebook = notebookCollection.find(notebook => {
      return notebook['name'] === req.query.name
    })
    res.send(foundNotebook)
  } else {
    res.send(notebookCollection);
  }
});

notebookRouter.route("/:notebookId").get((req, res) => {
  const foundNotebook = notebookCollection.find(
    (notebook) => notebook.notebookId === req.params.notebookId
  );
  res.send(foundNotebook);
});

module.exports = notebookRouter;
