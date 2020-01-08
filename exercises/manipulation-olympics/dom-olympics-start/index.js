function changeTheme(event) {
    if (event.target.value === 'theme-two') {
        document.querySelector('.messages').classList.add('theme-two');

    } else {
        document.querySelector('.messages').classList.remove('theme-two');
    }
    console.log(event.target.value)
}

function sendMessage(event) {
    event.preventDefault();
    let text = document.getElementById('input').value;
    document.querySelector('.messages').insertAdjacentHTML('beforeend', 
    `<div class="message left">
        ${text}
    </div>`);
    document.getElementById('input').value = '';
}

let header = document.querySelector('#header');
let h1 = document.createElement('h1');
header.appendChild(h1);

h1.innerHTML = `JavaScript Made This!!!`;

let h3 = document.createElement('h3');
h3.innerHTML = `<span class="name">Amren Miller</span> wrote the JavaScript`;
header.appendChild(h3)


document.getElementById('clear-button').addEventListener('click', function (e) {
    document.querySelectorAll('.message').forEach(function (e) {
        e.remove();
    });
})