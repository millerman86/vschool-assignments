let count = 0;

let countdown = document.getElementById('countdown');

window.onload = function() {
    window.addEventListener('click', () => {
        count++;
    });

    setTimeout(() => {
        countdown.textContent = count;

        this.localStorage.setItem('count', count)
    }, 3000)
}