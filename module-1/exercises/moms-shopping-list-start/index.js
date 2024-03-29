// THIS FUNCTION CAN BE RUN AT ANY POINT IN ORDER TO GIVE AN INDEX POSITION TO THE ITEMS IN THE LIST 
function listIndexingFunction() {
    var g = document.getElementById('list');
    for (var i = 0, len = g.children.length; i < len; i++) {

        (function (index) {
            g.querySelectorAll('li')[i].querySelector('.edit').onclick = function (event) {
                showEdit(event, index);
            }
        })(i);

    }
}

determineIfDisplayNoItems();

function determineIfDisplayNoItems() {
    if (document.getElementById('list').querySelectorAll('li').length === 0) {
        document.querySelector('#list-header').innerHTML = 'You have no items'
    }

    if (document.getElementById('list').querySelectorAll('li').length > 0) {
        document.querySelector('#list-header').innerHTML = 'You have things to do.'

    }
}

function submitNewListItem(event) {
    event.preventDefault();

    let text = document.getElementById('title').value;
    document.getElementById('list').insertAdjacentHTML('beforeend', `
    <li>
        <p class="todo">${text}</p>
        <button class="edit">Edit</button>
        <button onclick="deleteListItem(event)">X</button>
    </li>`);

    listIndexingFunction();
    determineIfDisplayNoItems()
}


function deleteListItem(event) {
    let parentElement = event.target.parentElement;
    parentElement.remove();

    determineIfDisplayNoItems();

    listIndexingFunction();
}

let editItemIndex = undefined;
function showEdit(event, index) {
    document.querySelector('#edit-todo').classList.remove('hidden');
    document.querySelector('#edit-todo').classList.add('show');

    document.querySelector('#edit-text').value = event.target.parentElement.querySelector('.todo').textContent;

    editItemIndex = index;
}

function editListItem(event, itemToEdit) {
    event.preventDefault();

    let replacementText = document.forms['editItem'].querySelector('#edit-text').value;

    var list = document.getElementById('list');
    list.querySelectorAll('li')[itemToEdit].querySelector('.todo').textContent = replacementText;
}


function cancelEdit() {
    document.querySelector('#edit-text').textContent = '';
    document.querySelector('#edit-todo').classList.add('hidden');
}











