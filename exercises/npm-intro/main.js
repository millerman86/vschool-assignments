const readlineSync = require('readline-sync');

let firstNumber = readlineSync.question('Please enter your first number: ');
let secondNumber = readlineSync.question('Please enter your second number: ');


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

var operation = readlineSync.question('Please enter the operation to perform: Add, Subtract, Multiply, or Divide: ');
console.log(operation);

if (operation.toLowerCase() === 'subtract' || 'add' || 'multiply' || 'divide') {
    if (isNaN(firstNumber) || isNaN(secondNumber)) return;
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if (operation === 'add') {
        console.log(`Your result is ${add(parseInt(firstNumber), parseInt(secondNumber))}`);
    } else if (operation === 'subtract') {
        console.log(`Your result is ${subtract(firstNumber, secondNumber)}`);
    } else if (operation === 'divide') {
        console.log(`Your result is ${divide(firstNumber, secondNumber)}`);
    } else if (operation === 'multiply') {
        console.log(`Your result is ${multiply(firstNumber, secondNumber)}`);
    }
}
