
import { collectionBonuses, countCoins, countCrystal, moneyUpdateEvent } from "./collectionAchievements.js";
import { queue, queueObject } from "./queueObject.js";
import { allGame, draw, RenderObject, canvasMain, ctxMain, widthCtxMain, heightCtxMain, blinking, countersIntervals } from "./rendering.js";
import { coloringMainButton } from "./funcForProgress.js";

let toiletBobs = new Image(2800,600);
toiletBobs.src = "../img/bathroom/toiletBobs.png";
const toiletBobsObject = new RenderObject (toiletBobs, 60, 4, 700, 600, 50, 150, 500, 500);

let showerCanvas = document.getElementById("showerCanvas");
let ctxShowerCanvas = showerCanvas.getContext("2d");
let widthCtxShowerCanvas = showerCanvas.width;
let heightCtxShowerCanvas = showerCanvas.height;

let showerSprite = new Image(600,520);
showerSprite.src = "../img/bathroom/showerSprite_2.png";

const toBathroom = document.getElementById ('toBathroom');
const washcloth = document.getElementById ('washcloth');
const showerDown = document.getElementById ('showerDown');
const showerUp = document.getElementById ('showerUp');
const dirt = document.getElementById ('dirt');
export const foamCollection = [];
const newWashclothPosition = [760,495];
const movePosition = [0,0];
let countFrameShower = 1;
let booleanShower = false;
const countDirt = [0,0];
let washInterval;

setInterval (() => {
collectionBonuses.dirtBobs += 0.01;
if (collectionBonuses.dirtBobs > 1) {
    collectionBonuses.dirtBobs = 1;
};
dirt.style.opacity = `${collectionBonuses.dirtBobs}`;
}, 60000)

export function toilet () {

    if (collectionBonuses.pleasureLevels[2] < 21) {

        queueObject.listenerNone();
        let newInt;

        setTimeout (() => {
            dirt.style.display = 'none';
            allGame (toiletBobsObject);
            newInt = setInterval (() => {
                collectionBonuses.pleasureLevels[2] += 1;
                 if (collectionBonuses.pleasureLevels[2] > 100) {
                     collectionBonuses.pleasureLevels[2] = 100;
                 };
                coloringMainButton(collectionBonuses.pleasureLevels[2],toBathroom);
            }, 33.333);
        }, 500);
        
        setTimeout (() => {
            clearInterval(newInt);
            dirt.style.display = 'block';
            queueObject.listenerBlock();
        },4700);

    };

};

function createFoam (xPosition,yPosition) {

    if ((xPosition > 300) && (xPosition < 560) && (yPosition > 175) && (yPosition < 570)) {
        const newFoam = document.createElement ('div');
        newFoam.classList.add ('foamStyle');
        if (xPosition > 490) {
            xPosition = 490;
        };
        if (yPosition > 530) {
            yPosition = 530;
        };
        if (!(xPosition % 5) && !(yPosition % 5)) {
            newFoam.style.left = `${xPosition}px`;
            newFoam.style.top = `${yPosition}px`;
            document.body.append(newFoam);
            foamCollection.push(newFoam);
        };
        
    };
   
};

function washFoam () {

    if (foamCollection.length) {
        foamCollection.shift().remove();
    };
    
};

export function exitFoam () {

    foamCollection.forEach ((element) => {
        element.remove ();
    });
    foamCollection.filter (() => {
        return false;
    });
};

function drawShower (pruning) {
    ctxShowerCanvas.drawImage(showerSprite,pruning,0,150,520,0,0,300,540);
    if (!(countFrameShower % 5)) {
        pruning += 150;
    };
    if (pruning > 500) {
        pruning = 0;
    };
    if (booleanShower) {
        countFrameShower += 1;
        requestAnimationFrame(() => {drawShower(pruning)});
    }
    else {
        countFrameShower = 1;
        ctxShowerCanvas.clearRect(0, 0, widthCtxShowerCanvas, heightCtxShowerCanvas);
    };
};

washcloth.addEventListener ('mousedown',(event) => {

    if ((770<event.x) && (860>event.x) && (505<event.y) && (575>event.y)) {

        countersIntervals.countYawn = 0;
        countersIntervals.countBlink = 0;
        queueObject.listenerNone();
        const newX = event.x - 760;
        const newY = event.y - 495;
        movePosition[0] = newX;
        movePosition[1] = newY;

    };
    
});

washcloth.addEventListener ('mousemove',(event) => {

    if (event.buttons === 1) {
    if (((newWashclothPosition[0]+10)<event.x) && ((newWashclothPosition[0] + 100)>event.x) && ((newWashclothPosition[1]+10)<event.y) && ((newWashclothPosition[1] + 80)>event.y)) {

        const newPositionX = event.x - movePosition[0];
        const newPositionY = event.y - movePosition[1];
        newWashclothPosition[0] = newPositionX;
        newWashclothPosition[1] = newPositionY;
        washcloth.style.left = `${newPositionX}px`;
        washcloth.style.top = `${newPositionY}px`;
        createFoam(newPositionX,newPositionY);

    };
    
    };
});

washcloth.addEventListener ('mouseup',(event) => {

    queueObject.listenerBlock();
    washcloth.style.left = `760px`;
    washcloth.style.top = `495px`;
    newWashclothPosition[0] = 760;
    newWashclothPosition[1] = 495;

});

showerDown.addEventListener ('mousedown',() => {

    countDirt[0] = foamCollection.length;
    booleanShower = true;
    drawShower(0);
    washInterval = setInterval (() => {
        washFoam();
    }, 100);
    
});

showerDown.addEventListener ('mouseup',() => {

   booleanShower = false;
   clearInterval(washInterval);
   countDirt[1] = foamCollection.length;
   const dirtOpacity = collectionBonuses.dirtBobs;
   let newOpacity = dirtOpacity - ((countDirt[0] - countDirt[1])/25);
   if (newOpacity < 0) {
        newOpacity = 0;
   };
   collectionBonuses.dirtBobs = newOpacity;
   dirt.style.opacity = `${newOpacity}`;
   
});

showerUp.addEventListener ('mousedown',() => {
    
    countDirt[0] = foamCollection.length;
    booleanShower = true;
    drawShower(0);
    washInterval = setInterval (() => {
        washFoam();
    }, 100);
    
});

showerUp.addEventListener ('mouseup',() => {

   booleanShower = false;
   clearInterval(washInterval);
   countDirt[1] = foamCollection.length;
   const dirtOpacity = collectionBonuses.dirtBobs;
   let newOpacity = dirtOpacity - ((countDirt[0] - countDirt[1])/25);
   if (newOpacity < 0) {
        newOpacity = 0;
   };
   collectionBonuses.dirtBobs = newOpacity;
   dirt.style.opacity = `${newOpacity}`;
    
});



/*document.body.addEventListener ('click',(event) => {
    console.log (`x = ${event.x}; y = ${event.y}`);
});*/