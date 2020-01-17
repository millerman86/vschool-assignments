document.getElementById('goomba').addEventListener('click', () => {
    document.getElementById('goomba-input').stepUp();
})

document.getElementById('bob-ombs').addEventListener('click', () => {
    document.getElementById('bob-ombs-input').stepUp();

})

document.getElementById('cheep-cheeps').addEventListener('click', () => {
    document.getElementById('cheep-cheeps-input').stepUp();

})






document.getElementById('goomba').nextElementSibling.addEventListener('click', () => {
    document.getElementById('goomba-input').stepDown();
})

document.getElementById('bob-ombs').nextElementSibling.addEventListener('click', () => {
    document.getElementById('bob-ombs-input').stepDown();

})

document.getElementById('cheep-cheeps').nextElementSibling.addEventListener('click', () => {
    document.getElementById('cheep-cheeps-input').stepDown();

})

