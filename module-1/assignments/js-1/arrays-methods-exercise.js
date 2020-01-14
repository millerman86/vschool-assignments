// Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


function logFood(fruit, vegetables) {
  console.log("fruit: ", fruit);
  console.log("vegetables: ", vegetables);
}

// 1. Remove the last item from the vegatable array
vegetables.pop()
logFood(fruit, vegetables)

// 2. Remove the first item from the fruit array
fruit.shift()
logFood(fruit, vegetables)

// 3. Find the index of the 'orange'
console.log(fruit.indexOf('orange'))
logFood(fruit, vegetables)


// 4. Add that number to the end of the fruit array
fruit.push(fruit.indexOf('orange'))
logFood(fruit, vegetables)

// 5. Use the length property to find the length of the vegatable array
console.log(vegetables.length)
logFood(fruit, vegetables)


// 6. Add that number to the end of the vegetable array
vegetables.push(vegetables.length)


// 7. Put the two arrays together into one array. Fruit first. Call the new array 'food'
let food = fruit.concat(vegetables);
logFood(fruit, vegetables)


// 8. Remove 2 elements from your new array starting at index 4 with one method
console.log(food.splice(4, 2));
logFood(fruit, vegetables)

// 9. Reverse your array
food = food.reverse()
console.log(food)
logFood(fruit, vegetables)

// 10. Turn the array into a string and return it
console.log(food.join())
