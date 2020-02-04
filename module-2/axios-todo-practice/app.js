// The baseUrl is: https://api.vschool.io/<yourname>/todo[/<todoId>]

// (Where <yourname> is your actual name, i.e.: 
//     https://api.vschool.io/jonsmith/todo) and <todoId> is the _id attribute 
//     of an already-existing todo item. (Only to be used for GET (one), PUT, and 
//     DELETE requests.) See the Using id section below for more info on how to use 
//     _id in your requests.

// All todo items are tracked by your name so don't forget to enter it in the url.

let getTodo = 'https://api.vschool.io/amren/todo[/<todoId>]'; // get one todo
let getAllTodos = 'https://api.vschool.io/amren/todo'; // get all todos


// POST requests
// POST a new todo: https://api.vschool.io/<yourname>/todo
let postTodo = 'https://api.vschool.io/amren/todo';

// PUT requests
// Update (PUT) an existing todo: https://api.vschool.io/<yourname>/todo/<todoId>

// DELETE requests
// DELETE an existing todo: https://api.vschool.io/<yourname>/todo/<todoId>


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



// Get all the todos from the database and assign them to the variable "todoList"
axios.get("https://api.vschool.io/jonsmith/todo/").then(function(response) {
    var todoList = response.data;
});

// Let's assume I've also added a delete button next to each todo item in my view 
// I can add an click handler and this will pass the entire todo object to the function we called.

var deleteTodo = function(singleTodoObject) {
// This "singleTodoObject" I passed in has an attribute "_id" I can use to delete it
// I just need to add that "_id" to the end of my URL to which I'm sending this DELETE request
    axios.delete("https://api.vschool.io/jonsmith/todo/" + singleTodoObject._id).then(function(response) {
        // This made a DELETE request to "https://api.vschool.io/jonsmith/todo/5630dcfcac2dfab2428b8c02"
        // Assuming I used the object from the example above.
        alert("Your todo was successfully deleted!")
    }, function(response) {
        alert("There was a problem deleting your todo :(");
    });
};