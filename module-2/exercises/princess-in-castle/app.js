
class Player {
    totalCoins = 0
    status = "Small"
    hasStar = false
    gameActive = true
    
    
    constructor(name) {
        this.setName(name)
    }

    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit() {
        if (this.status === 'Powered Up') this.status = 'Big';
        else if (this.status === 'Big') this.status = 'Small';
        else if (this.status === 'Small') {
            this.status = 'Dead'
            gameActive = false
            console.log('You died!');
            this.print()
        }
    }

    // gotPowerup of type function - called when a powerup is received and sets the status accordingly. 
    // (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)
    gotPowerup() {
        if (this.status === 'Small') this.status = 'Big';
        else if (this.status === 'Big') this.status = 'Powered Up';
        else if (this.status === 'Powered Up') {
            if (!this.hasStar) console.log('you get a star!')
            this.hasStar = true
        };
    }

    addCoin() {
        this.totalCoins += 1;
    }

    print() {
        console.log('Name: ', this.name);
        console.log('Status: ', this.status);
        console.log('Total Coins: ', this.totalCoins);
        console.log();
    }
}

const player = new Player("Luigi");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let gameActive = true;
let clearId = setInterval(() => {
    let random = getRandomInt(1, 3)
    
    player.print()
    if (random === 1) {
        if (!player.hasStar) {
            player.gotHit()
        } else if (player.hasStar) {
            console.log('You were protected by your star!');
            player.hasStar = false
        }
    }
        
    if (random === 2) {
        player.gotPowerup()
    }

    if (random === 3) {
        player.addCoin()
    }

    if (!gameActive) {
        clearInterval(clearId)
    }
}, 800)

