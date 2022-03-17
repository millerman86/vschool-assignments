let header = document.querySelector('#header');
let h1 = document.createElement('h1');
header.appendChild(h1);

h1.innerHTML = `JavaScript Made This!!!`;

let h3 = document.createElement('h3');
h3.innerHTML = `<span class="name">Amren Miller</span> wrote the JavaScript`;
header.appendChild(h3)


let selectedOption = document.getElementById('theme-drop-down').value;
let leftHandValue = document.getElementById('theme-drop-down').value.split(' ')[0];
function changeTheme(event) {
    let previousValues = selectedOption;
    selectedOption = event.target.value; // retain state for future execution of function 
    previousValues = previousValues.split(' ');

    let nextValues = event.target.value;
    nextValues = nextValues.split(' ');

    replaceColors(previousValues, nextValues);

    function replaceColors(previous, nextValues) {
        let previousObject = {};
        let nextObject = {};

        for (const [index, element] of previous.entries()) {
            previousObject[index] = element;
        }
        for (const [index, element] of nextValues.entries()) {
            nextObject[index] = element;
        }

        leftHandValue = nextObject[0];

        document.querySelectorAll('.message.left').forEach(function(i) {
            i.classList.remove(previousObject[0])
            i.classList.add(nextObject[0])
        });

        document.querySelectorAll('.message.right').forEach(function(i) {
            i.classList.remove(previousObject[1])
            i.classList.add(nextObject[1])
        });
    }
}


function sendMessage(event) {
    event.preventDefault();
    let text = document.getElementById('input').value;
    if (!text.length) return;
    document.querySelector('.messages').insertAdjacentHTML('beforeend',
        `<div class="message left ${leftHandValue}">
        ${text}
    </div>`);
    document.getElementById('input').value = '';
}

document.getElementById('clear-button').addEventListener('click', function (e) {
    document.querySelectorAll('.message').forEach(function (e) {
        e.remove();
    });
})

