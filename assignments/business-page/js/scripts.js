window.onload = function () {

    document.querySelector('.hamburger-icon').addEventListener('click', function () {
        document.querySelector('body').classList.toggle('nav-open')
    });

    document.querySelector('.hamburger-popout').addEventListener('click', function () {
        document.querySelector('body').classList.toggle('nav-open')
    });


}