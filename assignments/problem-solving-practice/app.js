/* Write a function that takes an array of numbers and 
returns the largest (without using Math.max()) */

const largest = (arrayToTest) => {
    let largest;

    try {
        arrayToTest.forEach((i, index) => {
            if (isNaN(i)) throw 'you cant do that, ' + i + ' is not a number'
        })
        
    } catch (err) {
        console.log(err)
        return;
    }
    arrayToTest.forEach((i, index) => {
        if (index === 0) {
            largest = i;
        } else if (i > largest) {
            largest = i;
        }
    })
    console.log(largest + ' is the largest')
}

largest([1, 2, 'f', 'a', 'b', 2, 3, ])
largest([10, 2, 3, 4, 5])

// Write a function that takes an array of 
// words and a character and return each word 
// that has that letter present.

const lettersWithStrings = (arrayToTest, testCase) => {
    arrayToTest.forEach((i) => {
        if (i.toString().indexOf(testCase) != -1) {
            console.log(i + ' matches your case')
        }
    })
}

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]

const isDivisible = (num1, num2) => {
    console.log((num1 % num2) === 0)
}

isDivisible(4, 2) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false