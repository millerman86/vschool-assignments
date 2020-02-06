let todos = document.getElementById('todos');


let deleteTodos = document.getElementById('deleteTodos');
deleteTodos.addEventListener('click', () => {
    deleteAllTodos();
})


let addTodo = document.getElementById('add-todo');
addTodo.addEventListener('click', () => {
    postTodoFunction();
});

let todoUrl = 'https://api.vschool.io/amren/todo/';

fetchTodos();

let todoList = []; // RAW DATA
function fetchTodos() {
    axios.get(todoUrl).then((response) => {
        todoList = response.data;

        while (todos.firstChild) {
            todos.removeChild(todos.firstChild);
        }

        renderTodoList(todoList);
    }).catch((err) => {
        console.log(err)
    });
}



function renderTodoList(todoList) {
    todoList.forEach((i) => {
        let listContainer = document.createElement('li');
        listContainer.className = 'list-container';


        listContainer.addEventListener('click', () => {
            let id = i._id; // I WOULD NEED THIS IF THERE WAS A PROBLEM WITH THE PAGE BLINKING

            axios.put(`${todoUrl}${i._id}`, {
                ...i,
                completed: !i.completed
            }).then((response) => {
                fetchTodos();
            })
        })


        let listItem = document.createElement('div');
        listItem.className = 'todoTitle';
        listItem.innerText = i['title'];

        let xButton = document.createElement('span');
        xButton.classList.add('xButton');
        listItem.appendChild(xButton);
        let xIcon = document.createTextNode('\u00D7')
        xButton.appendChild(xIcon);


        if (i.completed) listItem.classList.add('completed')


        let listItem2 = document.createElement('div');
        listItem2.className = 'todoDescription';
        listItem2.innerText = i['description'];



        listContainer.appendChild(listItem);
        listContainer.appendChild(listItem2);

        todos.appendChild(listContainer);

        xButton.addEventListener('click', (event) => {
            event.stopPropagation();
            deleteTodo(i);
        })
    });
}



function postTodoFunction() {
    let title = document.getElementById('newTodoTitle').value;
    let description = document.getElementById('newTodoDescription').value;

    if (!title) return

    let newTodo = {
        description,
        title,
    }

    axios.post(todoUrl, newTodo).then(res => {
        fetchTodos();
    }).catch(err => {
        console.log(err)
    });
}

function deleteTodo(singleTodoObject) {
    axios.delete(todoUrl + singleTodoObject._id)
        .then((response) => {
            alert("Your todo was successfully deleted!");
        })
        .then(() => {
            fetchTodos();
        }), () => {
            alert("There was a problem deleting your todo :(");
        }
};


function deleteAllTodos() {
    todoList.forEach((i) => {
        axios.delete(todoUrl + i['_id']).then((response) => {
            fetchTodos();
        }).then(() => {}), () => {
            alert('There was a problem deleting all of your todos!')
        }
    });
    alert('You have chosen to delete all of your todos!');
}


























// The baseUrl is: https://api.vschool.io/<yourname>/todo[/<todoId>]

// (Where <yourname> is your actual name, i.e.: 
//     https://api.vschool.io/jonsmith/todo) and <todoId> is the _id attribute 
//     of an already-existing todo item. (Only to be used for GET (one), PUT, and 
//     DELETE requests.) See the Using id section below for more info on how to use 
//     _id in your requests.


// All todo items are tracked by your name so don't forget to enter it in the url.
// let getTodo = 'https://api.vschool.io/amren/todo[/<todoId>]'; // get one todo
// let getAllTodos = 'https://api.vschool.io/amren/todo'; // get all todos


// POST requests
// POST a new todo: https://api.vschool.io/<yourname>/todo
// let postTodo = 'https://api.vschool.io/amren/todo';


// PUT requests
// Update (PUT) an existing todo: https://api.vschool.io/<yourname>/todo/<todoId>
// let putTodo = 'https://api.vschool.io/amren/todo/<todoId>';


// DELETE requests
// DELETE an existing todo: https://api.vschool.io/<yourname>/todo/<todoId>
// let deleteTodoString = 'https://api.vschool.io/amren/todo/<todoId>';


// This is what the database model looks like
// {
//     title: {
//         type: String,
//         required: true
//     },
//     description: String,
//     price: Number,
//     imgUrl: String,
//     completed: Boolean,
//     sessionId: {
//         type: String,
//         required: true
//     }
// }

// GRAB BAG CODE
// var list = document.querySelector('ul');
// list.addEventListener('click', function (ev) {
//     if (ev.target.tagName === 'LI') {
//         ev.target.classList.toggle('checked');
//     }
// }, false);


// document.querySelectorAll('.close');
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }