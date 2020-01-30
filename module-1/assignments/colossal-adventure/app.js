let readline = require('readline-sync');


console.log('Let\'s play a game!! You will fight an animal.');
let name = readline.question('Please tell me your name, \nPlease type here: ');
console.clear();
console.log(`Hello, ${name}, are you ready to begin your journey?`);

pause(3000);

function pause(milliseconds) {
    var dt = new Date();
    while ((new Date()) - dt <= milliseconds) {
        /* Do nothing */
    }
}

// THE DOCUMENTATION FOR BOTH OF THE NUMBER FUNCTIONS BELOW CAN BE FOUND AT THE GIVEN LINK
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)); // input is zero-based
}

// This example returns a random integer between the specified values. 
// The value is no lower than min (or the next integer greater than min if min isn't an integer), 
// and is less than (but not equal to) max.
function getRandomIntMinMax(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let playerInventory = {
    inventoryItems: [],
    hp: 0
}

let loot = [
    'New bag',
    'Very Sharp Sword',
    'Bug-Infested Potato'
]

let animals = [{
        'name': 'a bear',
        'value': '   :\"\'._..---.._.\'\";\r\n    `.             .\'\r\n    .\'    ^   ^    `.\r\n   :      a   a      :                 __....._\r\n   :     _.-0-._     :---\'\"\"\'\"-....--\'\"        \'.\r\n    :  .\'   :   `.  :                          `,`.\r\n     `.: \'--\'--\' :.\'                             ; ;\r\n      : `._`-\'_.\'                                ;.\'\r\n      `.   \'\"\'                                   ;\r\n       `.               \'                        ;\r\n        `.     `        :           `            ;\r\n         .`.    ;       ;           :           ;\r\n       .\'    `-.\'      ;            :          ;`.\r\n   __.\'      .\'      .\'              :        ;   `.\r\n .\'      __.\'      .\'`--..__      _._.\'      ;      ;\r\n `......\'        .\'         `\'\"\"\'`.\'        ;......-\'\r\njgs    `.......-\'                 `........\'',
        'health': 100,
        'isDead': false,
    },
    {
        'name': 'a beetle',
        'value': '     _   _\r\n     /(   )\\\r\n     \\(   )/\r\n   |/ \\\\_//  \\|\r\n  /  (#) (#)  \\\r\n  \\  /     \\  /\r\n   \\ \\_____/ /\r\n    \\/  |  \\/  \r\n  _ | o | o | _\r\n | \\|o  |  o|/ |\r\n |  |  o|o  |  |\r\n/|\\ |o  |  o| /|\\\r\n    \\  o|o  /\r\n    /\\__|__/\\\r\n   /         \\\r\n   \\         /\r\n   |\\       /|',
        'health': 50,
        'isDead': false
    },
    {
        'name': 'a BIG beetle',
        'value': "          .--.         .--.\r\n              \\       /        \r\n       |\\      `\\___/'       /|\r\n        \\\\    .-'@ @`-.     //  \r\n        ||  .'_________`.  ||\r\n         \\\\.'^    Y    ^`.//\r\n         .'       |       `.\r\n        :         |         :\r\n       :          |          :\r\n       :          |          :\r\n       :     _    |    _     :\r\n       :.   (_)   |   (_)    :\r\n     __::.        |          :__\r\n    /.--::.       |         :--.\\\r\n __//'   `::.     |       .'   `\\\\___\r\n`--'     //`::.   |     .'\\\\     `--'\r\n         ||  `-.__|__.-'   || \r\njgs      ||                ||\r\n         //                \\\\\r\n        |/                  \\|",
        'health': 70,
        'isDead': false
    }
];

let player = {
    health: 50
};

let command = '';



let progression = 0;
BeginGame: while (command != 'q') {
    console.clear();
    console.log('You are trying to make it to grandma\'s house in the woods to save her from being eaten. \nPress w to walk, otherwise press q to quit');

    let innerCommand;

    [innerCommand, progression] = showProgressBar(progression);

    if (progression === 30) endGame();
    progression += 1;


    if (innerCommand === 'q') break;

    let attackOrNot = Math.random() * 10;
    if (Math.ceil(attackOrNot) * 10 <= ((4 / 4) * 100)) {
        // EXTRA CREDIT: FIND OUT HOW TO REVERSE THE BEAR STRING WHILE STILL PRESERVING WHITE SPACE, THEN I CAN USE IT IN MY GAME, USE A REGEX
        // https://www.asciiart.eu/animals/bears
        // let deadBear = "'........`                 '-.......` n   sgj\r\n'-......;        '.`'\"\"'`         '.        '......` \r\n;      ;      '._._      __..--`'.      '.__      '. \r\n.`   ;        :              '.      '.      '.__   \r\n.`;          :            ;      '.-`    '.       \r\n;           :           ;       ;    .`.         \r\n;            `           :        `     .`        \r\n;                        '               .`       \r\n;                                   '\"'   .`      \r\n'.;                                '._'-`_.` :      \r\n; ;                             '.: '--'--' :.`     \r\n.`,`                          :  .`   :   '.  :    \r\n.'        \"'--....-\"'\"\"'---:     _.-0-._     :   \r\n_.....__                 :      a   a      :   \r\n.`    ^   ^    '.    \r\n'.             .`    \r\n;\"'._..---.._.'\":";

        let attacker = Math.floor((Math.random()) * 3)
        let attackerName = animals[attacker]['name'];

        switch (attacker) {
            case 0:
                console.log('\n', animals[0]['value'], `\nYou have been attacked! By ${animals[0]['name']}!!!`);
                break;
            case 1:
                console.log('\n', animals[1]['value'], `\nYou have been attacked! By ${animals[1]['name']}!!!`);
                break;
            case 2:
                console.log('\n', animals[2]['value'], `\nYou have been attacked! By ${animals[2]['name']}!!!`);
                break;
            default:
                console.log('I guess I wrote my code wrong')
                break;
        }

        let ask = true;

        Ask: while (ask) {
            let run = readline.question('Will you run? y/n?').toLowerCase();


            console.clear();




            if (run === 'n') {
                // console.clear();
                console.log('You have chosen to stay and attack the animal');

                let playerIsDead, animalKilled;
                [animalKilled, playerIsDead] = animalAttack(animals[attacker], loot);

                if (playerIsDead) gameOver();

                if (!animalKilled) {
                    console.log('You are still alive........')
                    console.log('but the animal is not yet dead, so the battle rages on!');
                    pause(5000);
                    console.clear();
                    
                    continue Ask;
                } else {
                    for (let animal of animals) {
                        animal['health'] = 100;
                        animal['isDead'] = false; // RESET ALL ANIMAL HEALTH
                    }
                    continue BeginGame;
                }

            } else {
                let escapeOrNot = Math.floor(Math.random() * 2);
                switch (escapeOrNot) {
                    case 0:

                        runSequence(2000);

                        console.log('You have escaped!');

                        pause(1300);

                        animals.forEach((animal) => {
                            animal['health'] = 0;
                            animal['isDead'] = false;
                        })

                        continue BeginGame


                        function runSequence(milliseconds) {
                            var dt = new Date();
                            while ((new Date()) - dt <= milliseconds) {
                                console.log(`
oOOO() 
/  _)   
|  (   
\__)    
                                `)
                                console.log(`\n\n\n\n
        ()OOOo   
        (_   \\ 
         )   |   
         (__/                             
                                `)
                            }
                        }

                        function pause(milliseconds) {
                            var dt = new Date();
                            while ((new Date()) - dt <= milliseconds) {
                                /* Do nothing */
                            }
                        }
                        case 1:

                            runSequence(2000);

                            console.log(`You have not escaped. Now you must fight ${attackerName}`);

                            pause(700);




                            if (!animals[attacker]['isDead']) {

                                let playerIsDead;
                                [animalKilled, playerIsDead] = animalAttack(animals[attacker], loot);

                                if (playerIsDead) gameOver();
                                if (animalKilled) {
                                    continue BeginGame;
                                }
                                if (!animalKilled) {
                                    console.log('But the animal is not yet dead, the battle rages on!')
                                    continue Ask;
                                }
                            }



                            function runSequence(milliseconds) {
                                var dt = new Date();
                                while ((new Date()) - dt <= milliseconds) {
                                    console.log(`
    oOOO() 
    /  _)   
    |  (   
    \__)    
                                    `)
                                    console.log(`\n\n\n\n
            ()OOOo   
            (_   \\ 
             )   |   
             (__/                             
                                    `)
                                }
                            }

                            function pause(milliseconds) {
                                var dt = new Date();
                                while ((new Date()) - dt <= milliseconds) {
                                    /* Do nothing */
                                }
                            }
                            break;
                        default:
                            break;
                }
            }
        }

        function animalAttack(attacker, loot) {
            let animalKilled;
            let minDamage = 20;
            let maxDamage = 40;
            let damageDealt = getRandomIntMinMax(minDamage, maxDamage);
            let playerIsDead;

            attacker['health'] -= damageDealt;

            console.log('You take your best swing at the wild beast! \n\nThe result?\n');
            console.log(`You have dealt the wild beast ${damageDealt} damage points`)

            if (attacker['health'] < 1) {
                attacker['isDead'] = true;
                animalKilled = true;
                console.log('You have killed the enemy');

                playerInventory['hp'] += 10;
                let newItem = Math.floor(Math.random() * 3);
                playerInventory['inventoryItems'].push(loot[newItem]);

                console.log('It dropped something.....you pick it up and put it in your inventory');
                console.log('Here is your inventory: ', playerInventory['inventoryItems']);

                pause(5000);
                // for (let animal of animals) {
                //     animal['health'] = 100;
                //     animal['isDead'] = false; // RESET ALL ANIMAL HEALTH
                // }
            } else if (attacker['health'] > 1) {
                animalKilled = false;


                animalAttacksBack();
            }

            function animalAttacksBack() {
                let minDamage = 20;
                let maxDamage = 40;
                let damageDealt = getRandomIntMinMax(minDamage, maxDamage);
                
                console.log('The wild beast takes his turn');
                console.log(`It deals ${damageDealt} damage!`);

                player['health'] -= damageDealt;

                console.log(player['health'])
                pause(4000);
                console.clear();



                if (player['health'] < 0) {
                    // let playerIsDead = true;
                    return gameOver();
                    // return [animalKilled, playerIsDead];
                } else {
                    animalKilled = false;
                    playerIsDead = true;
                }
            }

            playerIsDead = false;
            return [animalKilled, playerIsDead];
        }
    } else {
        console.log('You have not been attacked')
        continue BeginGame;
    }
}



function showProgressBar(progress) {
    let MAX = 30,
        MIN = 0,
        value = progress,
        key;
    console.log('\n\n' + (new Array(20)).join(' ') +
        'Walk: [W]  QUIT: [Q]\n');
    while (true) {
        console.log('\x1B[1A\x1B[K|' +
            (new Array(value + 1)).join('-') + 'O' +
            (new Array(MAX - value + 1)).join('-') + '| ' + value);
        key = readline.keyIn('', {
            hideEchoBack: true,
            mask: '',
            limit: 'wq '
        });

        if (value === 10) return ['', value]
        if (value === 20) return ['', value]
        if (value === 30) return ['', value]

        if (key === 'w') {
            if (value < MAX) {
                value++;
            }
        } else if (key === 'q') {
            return ['q', value]
        }
    }
}

function endGame() {
    console.log('You have saved your grandma!! Congratulations!!')
    process.exit(0)
}

console.log('You have decided to quit, your grandma was eaten by a pack of wild animals')

function gameOver() {
    console.log('The game is OVER!!!! You lost!!')
    process.exit(0);
}