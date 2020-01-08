let form;
let submit;

window.onload = function () {
    form = document.getElementById("airline-form");
    submit = document.getElementById('submit');
    // let query = document.querySelector;
    // formAlert();
    submit.addEventListener('click', function() {
        formAlert();
    })
}

let diet = {};

Object.prototype.replaceAll = function() {

}

function formAlert() {
    let firstName = form.elements["first-name"].value;
    let lastName = form.elements["last-name"].value;
    let age = form.elements["age"].value;
    let gender = form.elements["gender"].value;
    let location = form.elements["travel-location"].value;

    // console.dir(form);


    if (form.elements['vegan'].checked) {
        if (!document.getElementById('vegan-input').value) {
            delete diet[' Vegan']
        } else diet[' Vegan'] = " " + document.getElementById("vegan-input").value;
    } 
    if (form.elements['gluten'].checked) {
        if (!document.getElementById('gluten-input').value) {
            delete diet[' Gluten']
        } else {
            diet[' Gluten'] = " " + document.getElementById("gluten-input").value;        
        }
    } 
    if (form.elements['paleo'].checked) {  
        if (!document.getElementById('paleo-input').value) {
            delete diet[' Paleo']
        } else { 
            diet[' Paleo'] = " " + document.getElementById("paleo-input").value;
        }
    } 
    alert("First Name: " + firstName + "\nLast Name: " + lastName + 
    "\nAge: " + age + "\nGender: " + gender + 
    "\nTravel Location: " + location + 
    (Object.keys(diet).length ? "\nHere is your diet: " : "\nYou are going to get fat") + JSON.stringify(diet).replace(/{/g, '').replace(/}/g, '').replace(/"/g, '')+
    "\nAwesome, now if you die, it won't be an accident..");
}

