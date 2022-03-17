let goomba = document.getElementById('goomba');
let goombaInput = document.getElementById('goomba-input');

let bobOmbs = document.getElementById('bob-ombs');
let bobOmbsInput = document.getElementById('bob-ombs-input');

let cheepCheeps = document.getElementById('cheep-cheeps');
let cheepCheepsInput = document.getElementById('cheep-cheeps-input');


let goombaChevron = document.getElementById('goomba-chevron');
let bobombsChevron = document.getElementById('bob-ombs-chevron');
let cheepcheepsChevron = document.getElementById('cheep-cheeps-chevron');



goomba.addEventListener('click', () => {
    goombaInput.stepUp();
});
goombaChevron.addEventListener('click', () => {
    goombaInput.stepDown();
});


bobombsChevron.addEventListener('click', () => {
    bobOmbsInput.stepDown();
});
bobOmbs.addEventListener('click', () => {
    bobOmbsInput.stepUp();
});


cheepCheeps.addEventListener('click', () => {
    cheepCheepsInput.stepUp();
});
cheepcheepsChevron.addEventListener('click', () => {
    cheepCheepsInput.stepDown();
});


let totalCost = document.getElementById('total-cost');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', () => {
    let gi = parseInt(goombaInput.value);
    let bi = parseInt(bobOmbsInput.value);
    let ci = parseInt(cheepCheepsInput.value);

    let totalOutput = gi + bi + ci;
    totalCost.textContent = totalOutput;
})


