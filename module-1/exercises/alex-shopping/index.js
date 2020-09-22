//SELECTORS
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');

//EVENT LISTENERS
// //add item
todoButton.addEventListener('click', addTodoItem);

//delete and complete todo item
todoList.addEventListener('click', deleteAndCompleteTodoItem);

// shows local storage items in the UI
document.addEventListener('DOMContentLoaded', showTodosInUI);
// FUNCTIONS
// generate a new todo with delete and completed buttons
function addTodoItem(e) {
  e.preventDefault();
  //create a div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  // put newTodo inside the created div
  todoDiv.appendChild(newTodo);

  //SAVE TODO TO LOCAL STORAGE
  saveLocalTodos(todoInput.value);

  // COMPLETED BUTTON
  const completedBtn = document.createElement('button');
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add('completed-btn');
  //append completed button to the div
  todoDiv.appendChild(completedBtn);

  // DELETE BUTTON
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add('delete-btn');
  //append delete button to the div
  todoDiv.appendChild(deleteBtn);

  // APPEND TODO TO LIST
  todoList.appendChild(todoDiv);
  // clear todo input value
  todoInput.value = '';
}

function deleteAndCompleteTodoItem(e) {
  // console.log(e.target);
  let item = e.target;
  // DELETE TODO
  if (item.classList[0] === 'delete-btn') {
    const todo = item.parentElement;
    // console.log(todo);
    //fall animation class
    todo.classList.add('fall');
    //delete to do from Local Storage
    deleteLocalStorageTodos(todo);
    // when fall animation is finishes the function will run and the item will get deleted from the list
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }
  if (item.classList[0] === 'completed-btn') {
    // COMPLETE TODO
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

//save todos to local storage
function saveLocalTodos(todo) {
  let todos = [];
  //check if i already have todos in local storage
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}
// pulls items out of local storage and display them in the UI
function showTodosInUI() {
  let todos = [];
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    // put newTodo inside the created div
    todoDiv.appendChild(newTodo);

    // COMPLETED BUTTON
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add('completed-btn');
    //append completed button to the div
    todoDiv.appendChild(completedBtn);

    // DELETE BUTTON
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    //append delete button to the div
    todoDiv.appendChild(deleteBtn);
    // APPEND TODO TO LIST
    todoList.appendChild(todoDiv);
  });
}

//delete localStorage todos
function deleteLocalStorageTodos(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  //remove todos by its position in the LS
  // console.log(todo.children[0].innerText);
  // console.log(todos.indexOf('apple'));
  const todoIndex = todo.children[0].innerText;
  // checking the todos array in local storage and splicing out the index of the item that im deleting. How many items im removing? --> 1
  todos.splice(todos.indexOf(todoIndex), 1);
  //need to set todos to back to local storage
  localStorage.setItem('todos', JSON.stringify(todos));
}
