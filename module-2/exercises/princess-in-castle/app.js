let gameActive = true;

class Amren {
    constructor() {
        this.name = "";
        this.totalCoins = 0;
        this.status = "";
        this.hasStar = false;
        this.gameActive = true;
    }

    setName(namePicked = 'amren') {
        this.name = namePicked;
    }

    gotHit() {
        if (this.status === '') this.status = 'Powered Up'
        if (this.status === 'Powered Up') this.status = 'Big';
        if (this.status === 'Big') this.status = 'Small';
        if (this.status === 'Small') {
            this.status = 'Dead';
            gameActive = false;
        }
    }

    gotPowerup() {
        if (this.status === '') this.status = 'Small';
        if (this.status === 'Small') this.status = 'Big';
        if (this.status === 'Big') this.status = 'Powered Up';
    }

    addCoin() {
        this.totalCoins += 1;
    }

    print() {
        console.log('Name: ', this.name);
        console.log('Status: ', this.status);
        console.log('Total: ', this.totalCoins);
    }
}


const amren = new Amren();
amren.setName();


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let clearId = setInterval(() => {
    if (gameActive === false) {
        clearInterval(clearId)
    }

    let random = getRandomInt(0, 2);

    if (random === 0) amren.gotHit();
    if (random === 1) amren.gotPowerup();
    if (random === 2) amren.addCoin();

    amren.print();
}, 1000);

