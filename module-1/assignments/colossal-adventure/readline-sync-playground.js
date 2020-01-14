var readlineSync = require('readline-sync')
//     MAX = 60,
//     MIN = 0,
//     value = 0,
//     key;
// console.log('\n\n' + (new Array(20)).join(' ') +
//     '[Z] <- -> [X]  FIX: [SPACE]\n');
// while (true) {
//     console.log('\x1B[1A\x1B[K|' +
//         (new Array(value + 1)).join('-') + 'O' +
//         (new Array(MAX - value + 1)).join('-') + '| ' + value);
//     key = readlineSync.keyIn('', {
//         hideEchoBack: true,
//         mask: '',
//         limit: 'zx '
//     });
//     if (key === 'z') {
//         if (value > MIN) {
//             value--;
//         }
//     } else if (key === 'x') {
//         if (value < MAX) {
//             value++;
//         }
//     } else {
//         break;
//     }
// }
// console.log('\nA value the user requested: ' + value);

readlineSync.promptCLLoop({
    add: function(target, into) {
      console.log(target + ' is added into ' + into + '.');
      // Do something...
    },
    remove: function(target) {
      console.log(target + ' is removed.');
      // Do something...
    },
    bye: function() { return true; }
  });
  console.log('Exited');