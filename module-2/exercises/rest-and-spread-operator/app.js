// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
function collectAnimals(...animals) {
    console.log(animals)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");


// Write a function that returns a food object with the array names as properties using Object Literals:
function combineFruit(fruit, sweets, vegetables) {
    return {
        fruit,
        sweets,
        vegetables
    }
}

combineFruit(["apple", "pear"],
    ["cake", "pie"],
    ["carrit"]);


console.log(
    combineFruit(["apple", "pear"],
        ["cake", "pie"],
        ["carrit"])
)



const vacation = {
    location: "Burly Idaho",
    duration: "2 weeks"
};

function parseSentence({
    location,
    duration
}) {
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation))



function returnFirst(items) {
    const [firstItem, secondItem] = items; /*change this line to be es6*/
    return firstItem + secondItem
}

console.log(returnFirst(["magnets", "snowboarding", "philanthropy", "janitor work", "eating"]));





const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    /*your code here*/
    const [firstFav, secondFav, thirdFav] = arr;
    return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav
}

console.log(returnFavorites(favoriteActivities));





function combineAnimals(...args) {
    return args.reduce((acc, val) => [...acc, ...val]);
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function product(a, b, c, d, e) {
    var numbers = [a, b, c, d, e];

    return numbers.reduce(function (acc, number) {
        return acc * number;
    }, 1)
}

// Write some destructuring code to help this function out. Use object literals to simplify it:
function populatePeople(names) {
    return names.map(function (name) {
        name = name.split(" ");
        // your code
        const [firstName, lastName] = name;

        return {
            firstName: firstName,
            lastName: lastName
        }
    });
}



console.log('blah', populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]));

// [
//   {firstName: "Frank", lastName: "Peterson"},
//   {firstName: "Suzy", lastName: "Degual"},
//   {firstName: "Liza", lastName: "Jones"},
// ]