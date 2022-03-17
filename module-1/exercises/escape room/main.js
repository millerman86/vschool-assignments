let readline = require('readline-sync');

console.log('You find yourself locked in a room. In order to escape the room, you need to find the key in the room and then open the door. Theres also a hole in the wall in the room. If you put your hand in the hole, you will die.');


// THIS AUTOMATICALLY ENUMERATES THE ARRAY OPTIONS 
let options = [
    'Put hand in hole', 
    'Find the key, or', 
    'Open the door'
];


let choice = readline.keyInSelect(options, 'What is your choice?');
switch(choice) {
    case 0:
        console.log('You lose');
        break;
    case 1:
        console.log('You win');
        break;
    case 2: 
        console.log('You lose');
        break;
}
