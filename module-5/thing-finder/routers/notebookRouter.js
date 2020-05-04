const express = require("express");
const notebookRouter = express.Router();
const { v4: uuid } = require("uuid");



function noteFunction(title = '', content) {
  const newObject = {};
  newObject.guid = uuid();
  newObject.id = uuid();
  newObject.title = title;
  newObject.content = content || "";

  return newObject;
}

function notebookFunction(name = '') {
  return {
    id: uuid(), // The execution will be deferred
    guid: uuid(),
    name, 
    notes: [noteFunction(), noteFunction()]
  };
}

const notebookCollection = [
  notebookFunction(), 
  notebookFunction(), 
  notebookFunction(), 
  notebookFunction(), 
  notebookFunction(), 
  notebookFunction(), 
  notebookFunction(), 
  notebookFunction(), 
  notebookFunction(), 
  notebookFunction(), 
];

console.log(notebookCollection);
console.log(notebookCollection[0].notes);

notebookRouter.route("/").get((req, res) => {
  console.log(req.query);
  let foundNotebook;
  if (req.query.name !== undefined) {
    foundNotebook = notebookCollection.find((notebook) => {
      return notebook["name"] === req.query.name;
    });
    res.send(foundNotebook);
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
