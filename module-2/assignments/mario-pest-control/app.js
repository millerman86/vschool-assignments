

let goomba = document.getElementById('goomba');
let goombaInput = document.getElementById('goomba-input');

goomba.addEventListener('click', () => {
    goombaInput.stepUp();
});





let bobOmbs = document.getElementById('bob-ombs');
let bobOmbsInput = document.getElementById('bob-ombs-input')

bobOmbs.addEventListener('click', () => {
    bobOmbsInput.stepUp();
})

document.getElementById('bob-ombs').addEventListener('click', () => {

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

let calculate = document.getElementById('calculate');
calculate.addEventListener('click', () => {

})

let totalCost = document.getElementById('totalCost');

