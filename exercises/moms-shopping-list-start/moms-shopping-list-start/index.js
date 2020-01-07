function deleteListItem(event) {
    let parentElement = event.target.parentElement;
    parentElement.remove();

    determineIfDisplayNoItems();

    function determineIfDisplayNoItems() {
        if (document.getElementById('list').querySelectorAll('li').length === 0) {
            document.querySelector('#list-header').innerHTML = 'You have no items'
        }
    }
}

function submitNewListItem(event) {
    event.preventDefault();
}

function submitNewListItem(event) {
    event.preventDefault();

    let text = document.getElementById('title').value;
    document.getElementById('list').insertAdjacentHTML('beforeend', `
    <li>
        <p>${text}</p>
        <button onclick="showEdit()">edit</button>
        <button onclick="deleteListItem(event)">X</button>
    </li>`);
}

function editListItem(event) {
    event.preventDefault();
}

function showEdit(event) {
    document.querySelector('#edit-todo').classList.remove('hidden');
    document.querySelector('#edit-todo').classList.add('show');
    
    console.log(event.target.parentElement.querySelector('.todo'))
    document.querySelector('#edit-text').value = event.target.parentElement.querySelector('.todo').textContent;
}


function cancelEdit() {
    console.log('you are here')
    document.querySelector('#edit-text').textContent = '';
    document.querySelector('#edit-todo').classList.add('hidden');

}














// document.getElementById("list").addEventListener("click", function (event) {
//     var tgt = event.target;
//     if (tgt.tagName.toUpperCase() == "LI") {
//         tgt.parentNode.removeChild(tgt); // or tgt.remove();
//     }
// });




// template.content.firstChild; 

// document.getElementById('add-todo').addEventListener('click', function (event) {
//     event.preventDefault();

//     let text = document.getElementById('title').value;
//     document.getElementById('list').insertAdjacentHTML('beforeend', `
//     <li>
//         <div>${text}</div>
//         <button>edit</button>
//         <button>X</button>
//     </li>`);

// let newElement = document.createElement(`li`);
// newElement.innerHTML = `
//     <div>${text}</div>
//     <button>edit</button>
//     <button>X</button>
// `;
// document.getElementById('list').appendChild(newElement);

// })
// console.dir(document.getElementById('add-todo'))



 // let newElement = document.createElement(`li`);
    // newElement.innerHTML = `
    //     <div>${text}</div>
    //     <button>edit</button>
    //     <button>X</button>
    // `;
    // document.getElementById('list').appendChild(newElement);