import { ctx, collectionBurgers, bobPosition, intervals, allAudio, gameEnd, buttons, imageElements } from "./rendering.js";

let speedBurger: number = 3000;

let burgerImage: HTMLImageElement = new Image(60 , 50);
burgerImage.src = "../img/burger.png";
imageElements.push(burgerImage);

let seaUrchin: HTMLImageElement = new Image(60 , 50);
seaUrchin.src = "../img/seaUrchin.png";
imageElements.push(seaUrchin);

class Burger {

    xDisposition: number;
    yDisposition: number;
    xSize: number;
    ySize: number;
    poison: boolean;

    constructor (x: number) {
        this.xDisposition = x;
        this.yDisposition = 600;
        this.xSize = 60;
        this.ySize = 50;
        this.poison = true;
    }

    path () {
       
            this.yDisposition -= 1;
    }

    draw () {
        ctx.drawImage(burgerImage, this.xDisposition, this.yDisposition, this.xSize, this.ySize);
    }
};

class Urchin {

    xDisposition: number;
    yDisposition: number;
    xSize: number;
    ySize: number;
    poison: boolean;

    constructor (x: number) {
        this.xDisposition = x;
        this.yDisposition = 600;
        this.xSize = 60;
        this.ySize = 50;
        this.poison = false;
    }

    path () {
       
            this.yDisposition -= 1;
    }

    draw () {
        ctx.drawImage(seaUrchin, this.xDisposition, this.yDisposition, this.xSize, this.ySize);
    }

};

function toBurgerCollection () {
    if (!gameEnd[0]) {
        clearInterval (intervalBurgers);
        return
    };
    allAudio[2].play();
    const xArray = [220, 330, 440, 550, 660, 770]; 
    const xRandom: number = xArray[Math.floor (Math.random() * 6)];
    bobPosition[0] = xRandom - 240;
    if (Math.random() > 0.15) {
        const newBurger = new Burger (xRandom);
        collectionBurgers.push (newBurger);
    }
    else {
        const newSeaUrchin = new Urchin (xRandom);
        collectionBurgers.push (newSeaUrchin);
    };
    if (!gameEnd[0]) {
        clearInterval (intervalBurgers);
    };
};

function toSpeedBurger () {
    if (!gameEnd[0]) {
        clearInterval (intervalSpeedBurgers);
        return
    };
    if (speedBurger > 150) {
        clearInterval (intervalBurgers);
        if (speedBurger > 700) {
            speedBurger -= 500;
        }
        else 
        {
            speedBurger -= 100;
        };
        intervalBurgers = setInterval (toBurgerCollection, speedBurger);
    };
};

let intervalBurgers: any;

let intervalSpeedBurgers: any;

intervals.push (intervalBurgers);

intervals.push (intervalSpeedBurgers);

buttons[0].addEventListener ('click', () => {

    intervalBurgers = setInterval (toBurgerCollection, speedBurger);

    intervalSpeedBurgers = setInterval (toSpeedBurger, 30000);

});

buttons[1].addEventListener ('click', () => {

    speedBurger = 3000;

    intervalBurgers = setInterval (toBurgerCollection, speedBurger);

    intervalSpeedBurgers = setInterval (toSpeedBurger, 30000);


});


