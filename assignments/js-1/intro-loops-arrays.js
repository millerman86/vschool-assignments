// Loop through the following array, and log to the console "hooray" for every party there is.

var eventsAtWork = ["work", "pretend to work", "party", "work", "meeting", "party", "daily grind", "work", "party"];

for (let events of eventsAtWork) {
  console.log('hurray');
}


// Loop through the following array, and count how many "trues" there are.

var booleans = [true, true, false, true, false, false, false];

let i = 0;
booleans.forEach((element) => {
  if (element === true) i++;
});

console.log(i);


// Add an isAdmin property to each of the users in this array.

var users = [
  {
    name: "Sophie",
    age: 12
  },
  {
    name: "Larry",
    age: 32
  },
  {
    name: "Cathy",
    age: 40
  }
];

users.forEach((user) => {
  user.isAdmin = undefined;
})

console.log(users);
