let readline = require('readline-sync');
console.log('Hello, Dear Traveler, are you ready to begin your journey?');
let name = readline.question('Please tell me your name, \nPlease type here: ');

let command = '';
while (command != 'q') {
    command = readline.question('Press w to walk, otherwise press q to quit');
    let attackOrNot = Math.random() * 10;
    if (Math.ceil(attackOrNot) * 10 <= ((1 / 4) * 100)) {
        // EXTRA CREDIT: FIND OUT HOW TO REVERSE THE BEAR STRING WHILE STILL PRESERVING WHITE SPACE, THEN I CAN USE IT IN MY GAME, USE A REGEX
        // https://www.asciiart.eu/animals/bears
        // let deadBear = "'........`                 '-.......`    sgj\r\n'-......;        '.`'\"\"'`         '.        '......` \r\n;      ;      '._._      __..--`'.      '.__      '. \r\n.`   ;        :              '.      '.      '.__   \r\n.`;          :            ;      '.-`    '.       \r\n;           :           ;       ;    .`.         \r\n;            `           :        `     .`        \r\n;                        '               .`       \r\n;                                   '\"'   .`      \r\n'.;                                '._'-`_.` :      \r\n; ;                             '.: '--'--' :.`     \r\n.`,`                          :  .`   :   '.  :    \r\n.'        \"'--....-\"'\"\"'---:     _.-0-._     :   \r\n_.....__                 :      a   a      :   \r\n.`    ^   ^    '.    \r\n'.             .`    \r\n;\"'._..---.._.'\":";


        let animals = [
            {'name': 'a bear', 'value': '   :\"\'._..---.._.\'\";\r\n    `.             .\'\r\n    .\'    ^   ^    `.\r\n   :      a   a      :                 __....._\r\n   :     _.-0-._     :---\'\"\"\'\"-....--\'\"        \'.\r\n    :  .\'   :   `.  :                          `,`.\r\n     `.: \'--\'--\' :.\'                             ; ;\r\n      : `._`-\'_.\'                                ;.\'\r\n      `.   \'\"\'                                   ;\r\n       `.               \'                        ;\r\n        `.     `        :           `            ;\r\n         .`.    ;       ;           :           ;\r\n       .\'    `-.\'      ;            :          ;`.\r\n   __.\'      .\'      .\'              :        ;   `.\r\n .\'      __.\'      .\'`--..__      _._.\'      ;      ;\r\n `......\'        .\'         `\'\"\"\'`.\'        ;......-\'\r\njgs    `.......-\'                 `........\''},
            {'name': 'a beetle', 'value': '     _   _\r\n     /(   )\\\r\n     \\(   )/\r\n   |/ \\\\_//  \\|\r\n  /  (#) (#)  \\\r\n  \\  /     \\  /\r\n   \\ \\_____/ /\r\n    \\/  |  \\/  \r\n  _ | o | o | _\r\n | \\|o  |  o|/ |\r\n |  |  o|o  |  |\r\n/|\\ |o  |  o| /|\\\r\n    \\  o|o  /\r\n    /\\__|__/\\\r\n   /         \\\r\n   \\         /\r\n   |\\       /|'},
            {'name': 'a BIG beetle', 'value': "          .--.         .--.\r\n              \\       /        \r\n       |\\      `\\___/'       /|\r\n        \\\\    .-'@ @`-.     //  \r\n        ||  .'_________`.  ||\r\n         \\\\.'^    Y    ^`.//\r\n         .'       |       `.\r\n        :         |         :\r\n       :          |          :\r\n       :          |          :\r\n       :     _    |    _     :\r\n       :.   (_)   |   (_)    :\r\n     __::.        |          :__\r\n    /.--::.       |         :--.\\\r\n __//'   `::.     |       .'   `\\\\___\r\n`--'     //`::.   |     .'\\\\     `--'\r\n         ||  `-.__|__.-'   || \r\njgs      ||                ||\r\n         //                \\\\\r\n        |/                  \\|"}
        ];

        // let animalArray = [bear, beetle, BIGbeetle];

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


        let run;
        while (run != 'y' || run != 'n') {
            console.log(run)
            run = readline.question('Will you run? y/n?').toLowerCase();
            if (run === 'y' || run === 'n') break;
        }

        let escapeOrNot = Math.floor(Math.random() * 2);


        switch (escapeOrNot) {
            case 0:
                console.log('You have escaped');
                break;
            case 1:
                console.log(`You have not escaped. Now you must fight the ${attackerName}`);
                animalAttack();
                break;
            default: 
                break;
        }

        const animalAttack = () => {
            
        }


    }
    console.log('You have not been attacked.....for now')
}