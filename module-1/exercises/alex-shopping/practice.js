// SELECTORS
const todoInput = document.getElementById('todo-input');
const todoButton = document.getElementById('todo-button');
const todoList = document.getElementById('todo-list');

todoInput.autocomplete = 'off'

//EVENT LISTENERS
todoButton.addEventListener('click', addTodoItem);

// todoList.addEventListener('click', deleteCompleteEditTodoItem); // THIS IS BULLSHIT, TARGET THE ELEMENTS INDIVIDUALLY

document.addEventListener('DOMContentLoaded', showTodosInUI);

//FUNCTIONS
function addTodoItem(e) {
  e.preventDefault();
  
  const todoDiv = document.createElement('div');
  todoDiv.className = 'todo';
  
  const newTodo = document.createElement('li');
  newTodo.className = 'todo-item'
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);
  
  saveLocalTodos(todoInput.value); // THIS IS SOME GRADE-A BULLSHIT RIGHT HERE. IF YOU KEEP ON TRYING TO SAVE DATA TO THE DATABASE 
  // JUST BY THE STRING VALUE, YOUR CODE WILL NEVER WORK CORRECTLY. THERE IS BASICALLY ONLY TWO WAYS TO DO THIS: USE A UUID USING 
  // AN NPM PACKAGE, OR ENUMERATE THE LIST IN YOUR CODE AND DELETE IT OUT BEFORE SAVING TO LOCALSTORAGE. I HAVE INCLUDED MY OWN SOLUTION FOR YOU.
  
  const completedBtn = document.createElement('button');
  
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.className = 'completed-btn'
  completedBtn.addEventListener('click', function(e) {
    console.log('hello');
    const todo = e.currentTarget.parentElement;
    todo.classList.toggle('completed');
  })
  todoDiv.appendChild(completedBtn);
  
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.className = 'delete-btn'
  deleteBtn.addEventListener('click', function(e) {
    const todo = e.currentTarget.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function () {
      todo.remove();
      deleteLocalStorageTodos();
    });
  })
  todoDiv.appendChild(deleteBtn);
  
  const editBtn = document.createElement('button');
  
  editBtn.innerHTML = '<i class="fas fa-edit"></i>';
  editBtn.className = 'edit-btn'
  editBtn.addEventListener('click', function(event) {

    if (event.currentTarget.innerHTML === '<i class="fas fa-edit"></i>') {
      todoInput.value = event.currentTarget.parentElement.querySelector('.todo-item').innerText
      document.getElementById('todo-input').focus();
      
      
      const editButtons = document.querySelectorAll('.edit-btn')
      editButtons.forEach(function(i) {
        i.innerHTML = '<i class="fas fa-edit"></i>'
      })
      event.currentTarget.innerHTML = '<i class="fas fa-save"></i>'
    } else if (event.currentTarget.innerHTML === '<i class="fas fa-save"></i>') {
      event.currentTarget.parentElement.querySelector('.todo-item').innerText = todoInput.value
      todoInput.value = ''
      event.currentTarget.innerHTML = '<i class="fas fa-edit"></i>'

      updateLocalStorageTodos()

      return 
    }
  })

  todoDiv.appendChild(editBtn);
  
  todoList.appendChild(todoDiv);
  
  todoInput.value = '';
}


//save to local storage
function saveLocalTodos(todo) {
  let todos = [];
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

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

    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.className = 'completed-btn'
    completedBtn.addEventListener('click', function(e) {
      console.log('hello');
      const todo = e.currentTarget.parentElement;
      todo.classList.toggle('completed');
    })
    todoDiv.appendChild(completedBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.className = 'delete-btn'
    deleteBtn.addEventListener('click', function(e) {
      const todo = e.currentTarget.parentElement;
      todo.classList.add('fall');
      todo.addEventListener('transitionend', function () {
        todo.remove();
        deleteLocalStorageTodos();
      });
    })
    todoDiv.appendChild(deleteBtn);
    //edit button
    const editBtn = document.createElement('button');

    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', function(event) {

      if (event.currentTarget.innerHTML === '<i class="fas fa-edit"></i>') {
        todoInput.value = event.currentTarget.parentElement.querySelector('.todo-item').innerText
        document.getElementById('todo-input').focus();
        
        
        const editButtons = document.querySelectorAll('.edit-btn')
        editButtons.forEach(function(i) {
          i.innerHTML = '<i class="fas fa-edit"></i>'
        })
        event.currentTarget.innerHTML = '<i class="fas fa-save"></i>'
      } else if (event.currentTarget.innerHTML === '<i class="fas fa-save"></i>') {
        event.currentTarget.parentElement.querySelector('.todo-item').innerText = todoInput.value
        todoInput.value = ''
        event.currentTarget.innerHTML = '<i class="fas fa-edit"></i>'
  
        updateLocalStorageTodos()

        return 
      }
    })
    todoDiv.appendChild(editBtn);

    todoList.appendChild(todoDiv);
  });
}
function deleteLocalStorageTodos() {
  const todoItems = document.querySelectorAll('.todo-item')

  let todosToStore = []
  todoItems.forEach(function(i) {
    console.log(i.innerText);
    todosToStore.push(i.innerText)
  })

  localStorage.setItem('todos', JSON.stringify(todosToStore));
}

function updateLocalStorageTodos() {
  const todoItems = document.querySelectorAll('.todo-item')

  let todosToStore = []
  todoItems.forEach(function(i) {
    console.log(i.innerText);
    todosToStore.push(i.innerText)
  })

  localStorage.setItem('todos', JSON.stringify(todosToStore));
}
