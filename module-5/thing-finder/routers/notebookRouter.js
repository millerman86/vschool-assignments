const express = require("express");
const notebookRouter = express.Router();
const { v4: uuid } = require('uuid')


// As per the database relational diagram from the evernote API docs
const notebook = {
  id: uuid(),
  guid: uuid(),
  name: "test",
  // Notes should ideally be a separate object, but we'll ignore that for now
  notes: []
};

const notebookCollection = [
  {...notebook} // This shall be my first default notebook
]





// It should be noted that the entire content part is stored in one giant string, and parsed using quill
// const note = {
//   id: "",
//   title: "",
//   // Content could also be called body
//   content: "",
//   active: false,
// };







// As per the assignment, I will only be putting the notebooks in this file for now
// const notes = [{ title: "", count: 0, id: "", text: "" }];

notebookRouter.route("/").get((req, res) => {
  res.send(notebookCollection)
});

notebookRouter.route("/:id")
  .get((req, res) => {
    const foundNotebook = notebookCollection.find(notebook => notebook.id === req.params.id)
    res.send(foundNotebook)
  })

module.exports = notebookRouter;
