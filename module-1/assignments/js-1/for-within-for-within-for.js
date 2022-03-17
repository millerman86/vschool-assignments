// Write a function that takes two arrays as parameters. The first array will be an array of people's
// names, and the second array will be the alphabet. Using a for
// loop within a for loop, create and return array that looks like this:


function forception(people, alphabet){
    // your code here
    // let newArray = [];
    //
    // people.forEach(person => {
    //   newArray.push(person, ...alphabet.toUpperCase().split(''))
    // })
    //
    // return newArray

    let newArray = [];

    for (i = 0; i < people.length; i++) {
      newArray.push(people[i])
      for (i = 0; i < alphabet.length; i++) {
        newArray.push(alphabet[i].toUpperCase())
      }
    }
}

var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz";

console.log(forception(people, alphabet))
