// Methods 
    // The are functions that are properties of (inside of) objects.

// function speak(){

// }

// const user = {
//     speak: function(){

//     }
// }

// speak()
// user.speak()
// push, pop, shift, unshift

const names = ["joe", "mary"]
names.push("something")
console.log(names)
names.pop()
console.log(names)

const name = "joe"


console.log(name.toUpperCase())


function Employee(name, age){
    this.name = name
    this.age = age
}

Employee.prototype.print = function(){
    console.log(this.name)
}

const emp1 = new Employee('dave', 20)
emp1.print()



// function capilizeAndLowercase(str){
//     const uppercase = str.toUpperCase()
//     const lowercase = str.toLowerCase()
//     return uppercase + lowercase
// }


// console.log(capilizeAndLowercase("Hello")) // => "HELLOhello"
// capilizeAndLowercase("HEY") // => "HEYhey"



