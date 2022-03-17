const readline = require('readline-sync');

let firstNumber = readline.question('Please enter your first number: ');
let secondNumber = readline.question('Please enter your second number: ');


const add = (num1, num2) => {
    return num1 + num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

var operation = readline.question('Please enter the operation to perform: Add, Subtract, Multiply, or Divide: ');
console.log(operation);

if (operation.toLowerCase() === 'subtract' || 'add' || 'multiply' || 'divide') {
    if (isNaN(firstNumber) || isNaN(secondNumber)) return;
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if (operation === 'add') {
        console.log(`The result is ${add(parseInt(firstNumber), parseInt(secondNumber))}`);
    } else if (operation === 'subtract') {
        console.log(`The result is ${subtract(firstNumber, secondNumber)}`);
    } else if (operation === 'divide') {
        console.log(`The result is ${divide(firstNumber, secondNumber)}`);
    } else if (operation === 'multiply') {
        console.log(`The result is ${multiply(firstNumber, secondNumber)}`);
    }
}
