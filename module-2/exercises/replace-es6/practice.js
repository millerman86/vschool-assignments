// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         // name;
//         console.log(name)
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])



const carrots = ["bright orange", "ripe", "rotten"]

const mapVegetables = (arr) => {
    return arr.map(function (carrot) {
        return {
            type: "carrot",
            name: carrot
        }
    })
}

console.log(mapVegetables(carrots));




const people = [{
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

const filterForFriendly = (arr) => {
    return arr.filter(function (person) {
        return person.friendly
    })
}

filterForFriendly(people)




const doMathSum = (a, b) => {
    return a + b
}

const produceProduct = (a, b) => {
    return a * b
}


const printString = (firstName = "Jane", lastName = "Doe", age = 100) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be 40?`
}



const animals = [{
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];

function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}
// Turns into
const filterForDogsArrowFunction = (arr) => arr.filter(animal => animal.type === "dog" ? true : false)