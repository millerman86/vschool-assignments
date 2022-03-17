// 1) Sort an array from smallest number to largest
function leastToGreatest(arr) {
    // your code here

    return arr.sort((a, b) => {
        return a - b;
    })
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 


// 2) Sort an array from largest number to smallest
function greatestToLeast(arr) {
    // your code here
    return arr.sort((a, b) => {
        return b - a;
    })
}


console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 

// 3) Sort an array from shortest string to longest
function lengthSort(arr) {
    // your code here
    return arr.sort();
}


console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 

// 5) Sort the objects in the array by age
function byAge(arr) {
    // your code here

    return arr.sort((a, b) => {
        return a['age'] - b['age']
    })
}

console.log(byAge([{
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]));
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]