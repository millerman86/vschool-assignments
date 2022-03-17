const readlineSync = require('readline-sync');
console.clear();
//hero section
// ************************************************************************
//enemies
const hero = {
  name: '',
  health: 0,
  characterName: ''
};


let inventoryItems = [`KAMEHAMEHA`, `SPIRIT BOMB`, `DEATH BEAM`];
//enemy section
// ************************************************************************
function Enemy(name, health) {
  this.name = name;
  this.health = health;
}

let enemies = [
  new Enemy('Frieza', 100),
  new Enemy('Cell', 100),
  new Enemy('Vageta', 100),
];


// let remainingEnemies = '';
// enemies.forEach((item) => {
//   remainingEnemies += item.name + ' ';
// });

function startGame() {
  console.log(
    'Welcome to Earth! Earth is currently under attack by enemies from different parts of the universe. You must protect the people!'
  );
  // heros name
  hero.name = readlineSync.question('What name should we call you by? ');

    createCharacter()
  console.log(` Welcome ${
    hero.name
  }! You are a ${hero.characterName}. Select WALK to start saving our planet! 
  `);
  while (hero.health > 0) {
    walk();
  }
}

startGame();
//************************************************************************
//Games starting message
function createCharacter() {
  const character = Math.floor(Math.random() * 4);

  if (character === 0) {
    hero.health += 110;
    hero.characterName = `Saiyan`;

  } else if (character === 1) {
    hero.health += 120;
    hero.characterName = `Super Saiyan`;

  } else if (character === 2) {
    hero.health += 150;
    hero.characterName = `Super Saiyan God`;

  } else if (character === 3) {
    hero.health += 100;
    hero.characterName = `Human`;
  }
}


// walk, inventory, fight,
//*************************************************************************
function walk() {
  if (!enemies.length) winGame();
  const userChoice = readlineSync.keyInSelect(
    ['walk', 'inventory'],
    'what would you like to do?'
  );

  switch (userChoice) {
    case 0: 
        const randomNumber = Math.floor(Math.random() * 3);
            if (randomNumber === 0) {
                fight();
            } else {
                console.log(`Continue walking ${hero.name}. The enemies are near by.`);

                return walk()
            }
        break;
    case 1:
        inventory();
        
        console.log(
            `${hero.name} Here's some special moves you can use against your enemies: ${inventoryItems}.
            Your health is ${hero.health}/100.
            Press WALK to continue saving the planet.
            `
            );
    
        return walk()

        break;
    default: 
        console.log(`There are still enemies causing havoc on Earth. You must keep fighting!`)
        return walk()
    }
}

function fight() {
  let indexOfEnemy = Math.floor(Math.random() * enemies.length);
  console.log(
    `${enemies[indexOfEnemy].name} is challenging you to a fight!!!!`
  );
  const defenseChoice = readlineSync.keyInSelect(
    ['fight the enemy', 'run from the fight'],
    `Do you want to keep fighting or do you choose to run away?`
  );
  if (defenseChoice === 1) {
    run();
  } else {
    encounterLoop(indexOfEnemy);
  }
}



function run() {
  const chanceOfEscape = Math.floor(Math.random() * 2);
  if (chanceOfEscape === 0) {
    console.log(`Great!! You've successfully escaped. Continue walking.`);
  } else {
    console.log(`The opponent didn't let you escape. You must fight back!`);
    enemyAttack(hero);
  }
}
function inventory() {
  return `${inventoryItems}`;
}

function encounterLoop(indexOfEnemy) {
  while (enemies[indexOfEnemy].health > 0) {
    enemyAttack(hero);
    let continueFighting = readlineSync.keyInSelect(
      ['keep fighting', 'run away'],
      'What would you like to do now?'
    );
    if (continueFighting === 0) {
      console.log(
        `Great!! You decided to keep fighting. The people of Earth are cheering your name. Good luck ${hero.name} !!
        People on Earth: ${hero.name}, ${hero.name}, ${hero.name}!!
        `
      );
      attackEnemy(indexOfEnemy);
    } else {
      console.log(`You decided to run away`);
      run();
    }
  }
}

function enemyAttack(hero) {
  function randomDeduction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive
  }
  hero.health = hero.health - randomDeduction(0, 25);
  console.log(
    `The enemy is attacking you. ${hero.name}, your health level is`,
    hero.health
  );
  if (hero.health <= 0) {
    console.log(
      `You fought well. But you didn't have what it takes to save the planet!`
    );
    die();
  }
}
function attackEnemy(indexOfEnemy) {
  function randomDeduction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is inclusive and the minimum is inclusive
  }
  enemies[indexOfEnemy].health = enemies[indexOfEnemy].health - randomDeduction(0, 100);

  console.log(`${hero.name}, You are doing great! ${enemies[indexOfEnemy].name} is taking damage.`);

  if (enemies[indexOfEnemy].health <= 0) {
    enemyDie(indexOfEnemy);
  }
}
function die() {
  console.log(`Frieza, Cell, and Vageta took over the planet.
  
                    GAME OVER!!!!!'`);
  let playerOption = readlineSync.keyInSelect(
    ['play again', 'quit game'],
    `Would you like to try to save the planet again or you've had enough ?`
  );
  if (playerOption === 0) {
    inventoryItems = [`KAMEHAMEHA`, `SPIRIT BOMB`, `DEATH BEAM`];
    return startGame();
  } else {
    return endGame();
  }
}
function enemyDie(indexOfEnemy) {
  enemies[indexOfEnemy].health = 0;

  const enemyItems = [
    `Super Sayan 1`,
    `Super Sayan 2`,
    `Super Sayan 3`,
    `Super Sayan 4`,
  ];
  inventoryItems.push(enemyItems[Math.floor(Math.random() * 4)]);
  hero.health = hero.health + 10;
  enemies.splice(indexOfEnemy, 1);

  console.log(`
    The enemy is dead and you are victorious. You've earned a new special ability. You can see it in your inventory. 
    Here is your inventory list: ${inventoryItems}
    You've also received a senzu bean from Gohan. Your health is restored 10 points.`);

  console.log(`You only have ${enemies.length} ${enemies.length > 1 ? 'enemies' : 'enemy'} left to fight.`);
  
  if (enemies.legnth === 0) winGame()
  if (enemies.legnth > 0) return walk()
}



function winGame() {
  console.log(`CONGRATS YOU SAVED THE PLANET!!!`);
  process.exit(0);
}

//****************************************************************************
function endGame() {
  console.log(`The game is OVER!!!! You lost!!`);
  process.exit(0);
}