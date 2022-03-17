const express = require("express");
const todoRouter = express.Router();
const { v4: uuid } = require("uuid");

const todos = [
  {
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuid(),
  },
  {
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuid(),
  },
  {
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuid(),
  },
  {
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuid(),
  },
];

todoRouter.route("/")
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        todos.push(newTodo)
        res.send(todos)
    })
todoRouter.route('/:todoId')
    .put((req, res) => {
        const updateObject = req.body
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        if (todoIndex !== -1) {
            todos[todoIndex] = {
                ...todos[todoIndex], 
                ...updateObject
            }
        res.send(todos[todoIndex])
        }
    })
    .delete((req, res) => {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todo._id === todoId)
        if (todoIndex !== -1) {
            todos.splice(todoIndex, 1)
            res.send(todos)
        }
    });

module.exports = todoRouter