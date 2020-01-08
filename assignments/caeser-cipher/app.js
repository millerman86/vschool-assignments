var readline = require('readline-sync');



var alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

// console.log(alphabet[25]);
const enumerated = {};
for (const [a, b] of alphabet.entries()) {
    enumerated[a] = b;
}
// console.log(enumerated);


var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();

while (true) {
    shift = parseInt(readline.question('How many letters would you like to shift? '));
    if (Number.isNaN(shift)) continue;
    if (shift > 26) { 
        console.log('Please choose a number 26 or below');
        continue;
    }
    break;
}

shift -= 1;

input = input.split('');

let startingIndex;
input = input.map((item) => {
    if (alphabet.indexOf(item) != -1) {
        startingIndex = alphabet.indexOf(item)
    }

    let currentIndex = startingIndex;
    let endIndex;
    for (let i = shift; i > 0; i--) {
        
        if (currentIndex < 25) currentIndex++;
        else currentIndex = 0;
    }

    if (alphabet.indexOf(item) === -1) return item;
    endIndex = currentIndex;
    return enumerated[currentIndex];

})

console.log(input.join(''))








// FIND A WAY TO USE THIS LATER, JUST FOR PRACTICE
// String.prototype.replaceAt = function (index, char) {
//     var a = this.split("");
//     a[index] = char;
//     return a.join("");
// }
