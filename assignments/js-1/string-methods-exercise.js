// Make a function that will return any given string into all caps followed by the same string all lowercase.

function capitalizeAndLowercase(word) {
  console.log(word.toUpperCase());
}

capitalizeAndLowercase("Hello") // => "HELLOhello"


// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

function findMiddleIndex(string) {
  let half = string.length / 2;
  return Math.floor(half);
}

console.log(findMiddleIndex("Hello"));// => 2
console.log(findMiddleIndex("Hello World")); // => 5


// Make a function that uses slice() and the other functions you've written to return the first half of the string


function returnFirstHalf(string) {
  return string.split('').splice(0, findMiddleIndex(string)).join('')
}

console.log(returnFirstHalf("Hello"));// => "He"
console.log(returnFirstHalf("Hello World")); // => "Hello"


// Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.
//
// hint: If the half way point is a decimal, or rather, your string length is odd. Use Math.floor to round down.


console.log('In capitalizeAndLowercaseReturnMixed function')

function capitalizeAndLowercaseReturnMixed(string) {
  return string.split('').splice(0, findMiddleIndex(string)).join('').toUpperCase() + string.split('').splice(findMiddleIndex(string), string.length).join('').toLowerCase()
}

console.log(capitalizeAndLowercaseReturnMixed("Hello")); // => "HEllo"
console.log(capitalizeAndLowercaseReturnMixed("Hello World")); // => "HELLO world"
