document.getElementById('add').addEventListener('click', () => {
    let num1 = parseInt(document.getElementById('add-number-one').value);
    let num2 = parseInt(document.getElementById('add-number-two').value);
   
    let additionOutput;
    if ((num1 && num2) != undefined) {
        additionOutput = num1 + num2;
        document.getElementById('add-output').textContent = additionOutput;
    }
});

document.getElementById('subtract').addEventListener('click', () => {
    let num1 = parseInt(document.getElementById('subtract-number-one').value);
    let num2 = parseInt(document.getElementById('subtract-number-two').value);
  
    let subtractOutput;
    if ((num1 && num2) != undefined) {
        subtractOutput = num1 - num2;
        document.getElementById('subtract-output').textContent = subtractOutput;
    }
});

document.getElementById('multiply').addEventListener('click', () => {
    let num1 = parseInt(document.getElementById('multiply-number-one').value);
    let num2 = parseInt(document.getElementById('multiply-number-two').value);

    let multiplyOutput;
    if ((num1 * num2) != undefined) {
        multiplyOutput = num1 * num2;
        document.getElementById('multiply-output').textContent = multiplyOutput;
    }
});