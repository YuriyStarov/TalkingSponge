
import { collectionBonuses, countCoins, countCrystal, moneyUpdateEvent } from "./collectionAchievements.js";
import { queue, queueObject } from "./queueObject.js";
import { allGame, draw, RenderObject, canvasMain, ctxMain, widthCtxMain, heightCtxMain, blinking, countersIntervals } from "./rendering.js";
import { coloringMainButton } from "./funcForProgress.js";

const washcloth = document.getElementById ('washcloth');
const showerDown = document.getElementById ('showerDown');
const showerUp = document.getElementById ('showerUp');
const foamCollection = [];
const newWashclothPosition = [760,495];
const movePosition = [0,0];
let washInterval;

export function toilet () {

    /*if (collectionBonuses.pleasureLevels[2] < 21) {

        queueObject.listenerNone();

300-600x  185-620y
110/90 size
    };*/

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

    washInterval = setInterval (() => {
        washFoam();
    }, 100);
    
});

showerDown.addEventListener ('mouseup',() => {

   clearInterval(washInterval);
    
});

showerUp.addEventListener ('mousedown',() => {

    washInterval = setInterval (() => {
        washFoam();
    }, 100);
    
});

showerUp.addEventListener ('mouseup',() => {

   clearInterval(washInterval);
    
});



/*document.body.addEventListener ('click',(event) => {
    console.log (`x = ${event.x}; y = ${event.y}`);
});*/