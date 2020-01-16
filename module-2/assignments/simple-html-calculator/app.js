document.getElementById('add').addEventListener('click', () => {
    let num1 = parseInt(document.getElementById('add-number-one').value);
    let num2 = parseInt(document.getElementById('add-number-two').value);

    let additionOutput;

    if ((isNaN(num1) || isNaN(num2))) {
        document.getElementById('add-output').textContent = 'Please Enter 2 Numbers';
    } else {
        additionOutput = num1 + num2;
        document.getElementById('add-output').textContent = additionOutput;
    }
});

document.getElementById('subtract').addEventListener('click', () => {
    let num1 = parseInt(document.getElementById('subtract-number-one').value);
    let num2 = parseInt(document.getElementById('subtract-number-two').value);

    let subtractOutput;

    if ((isNaN(num1) || isNaN(num2))) {
        document.getElementById('subtract-output').innerHTML = 'Please Enter 2 Numbers';
    } else {
        subtractOutput = num1 - num2;
        document.getElementById('subtract-output').textContent = subtractOutput;
    }

});

document.getElementById('multiply').addEventListener('click', () => {
    let num1 = parseInt(document.getElementById('multiply-number-one').value);
    let num2 = parseInt(document.getElementById('multiply-number-two').value);

    let multiplyOutput;

    if ((isNaN(num1) || isNaN(num2))) {
        document.getElementById('multiply-output').textContent = 'Please Enter 2 Numbers';
    } else {
        multiplyOutput = num1 * num2;
        document.getElementById('multiply-output').textContent = multiplyOutput;
    }
});