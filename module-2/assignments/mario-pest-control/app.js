let goomba = document.getElementById('goomba');
let goombaInput = document.getElementById('goomba-input');

goomba.addEventListener('click', () => {
    goombaInput.stepUp();
});


let bobOmbs = document.getElementById('bob-ombs');
let bobOmbsInput = document.getElementById('bob-ombs-input')

bobOmbs.addEventListener('click', () => {
    bobOmbsInput.stepUp();
});


let cheepCheeps = document.getElementById('cheep-cheeps');
let cheepCheepsInput = document.getElementById('cheep-cheeps-input');

cheepCheeps.addEventListener('click', () => {
    cheepCheepsInput.stepUp();
});





document.getElementById('goomba').nextElementSibling.addEventListener('click', () => {
    document.getElementById('goomba-input').stepDown();
})

document.getElementById('bob-ombs').nextElementSibling.addEventListener('click', () => {
    document.getElementById('bob-ombs-input').stepDown();

})

document.getElementById('cheep-cheeps').nextElementSibling.addEventListener('click', () => {
    document.getElementById('cheep-cheeps-input').stepDown();

})



let totalCost = document.getElementById('total-cost');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', () => {
    let gi = parseInt(goombaInput.value);
    let bi = parseInt(bobOmbsInput.value);
    let ci = parseInt(cheepCheepsInput.value);

    let totalOutput = gi + bi + ci;
    totalCost.textContent = totalOutput;
})


