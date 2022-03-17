
let countdown = document.getElementById('countdown');

let count = 0;
window.onload = function() {
    window.addEventListener('click', () => {
        count++;
    });

    setTimeout(() => {
        countdown.textContent = count;

        this.localStorage.setItem('count', count)
    }, 3000)
}