
const form = document.airlineForm;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    formAlert();
});

const formAlert = () => {

    let checkedInputs = [];

    for (let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            checkedInputs.push(form.diet[i].value)
        }
    }

    console.log(checkedInputs);

    alert(`
        First Name: ${form.firstName.value}
        Last Name: ${form.lastName.value} 
        Age: ${form.age.value} 
        Gender: ${form.gender.value}
        Location: ${form.location.value}
        Dietary Restrictions: ${checkedInputs}
    `)
}

