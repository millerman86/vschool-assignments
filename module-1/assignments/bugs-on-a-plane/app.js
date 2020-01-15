let form;
let submit;


form = document.getElementById("airline-form");
submit = document.getElementById('submit');

submit.addEventListener('click', function() {
    let inputs = [...document.querySelectorAll('input[class=diet]:checked')].map((i) => i.value)
    formAlert(inputs);
});

let theform = document['airline-form']


let inputsinform = document.forms['airline-form'];


let diet = {};


function formAlert(inputs) {
    let firstName = form.elements["first-name"].value;
    let lastName = form.elements["last-name"].value;
    let age = form.elements["age"].value;
    let gender = form.elements["gender"].value;
    let location = form.elements["travel-location"].value;

    alert("First Name: " + firstName + "\nLast Name: " + lastName + 
    "\nAge: " + age + "\nGender: " + gender + 
    "\nTravel Location: " + location + 
    "\nDiet: " + inputs.join(', ') + // TRY AND CHANGE THIS TO THE WAY THAT THE TEACHER SAID TO DO ITÍ
    "\n Awesome, now if you die, it won't be an accident"
    )
}
    








































// console.dir(form);


// if (form.elements['vegan'].checked) {
//     if (!document.getElementById('vegan-input').value) {
//         delete diet[' Vegan']
//     } else diet[' Vegan'] = " " + document.getElementById("vegan-input").value;
// } 
// if (form.elements['gluten'].checked) {
//     if (!document.getElementById('gluten-input').value) {
//         delete diet[' Gluten']
//     } else {
//         diet[' Gluten'] = " " + document.getElementById("gluten-input").value;        
//     }
// } 
// if (form.elements['paleo'].checked) {  
//     if (!document.getElementById('paleo-input').value) {
//         delete diet[' Paleo']
//     } else { 
//         diet[' Paleo'] = " " + document.getElementById("paleo-input").value;
//     }
// } 