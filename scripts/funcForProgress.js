import { collectionBonuses } from "./collectionAchievements.js";

const toPlayroom = document.getElementById ('toPlayroom');
const toKitchen = document.getElementById ('toKitchen');
const toBathroom = document.getElementById ('toBathroom');
const toBedroom = document.getElementById ('toBedroom');

const mainButtonArray = [];

mainButtonArray.push(toPlayroom);
mainButtonArray.push(toKitchen);
mainButtonArray.push(toBathroom);
mainButtonArray.push(toBedroom);

export function coloringMainButton (pleasureLevel,button) {

    if (pleasureLevel < 21) {
        const gradient = `linear-gradient(0deg, #FFFF0099 ${pleasureLevel}%, #FF0000 ${pleasureLevel}%)`
        button.style.backgroundImage = gradient;
    }
    else {
        const gradient = `linear-gradient(0deg, #FFFF0099 ${pleasureLevel}%, #6495ed99 ${pleasureLevel}%)`
        button.style.backgroundImage = gradient;
    };     

};

for (let i = 0; i < mainButtonArray.length; i += 1) {

    coloringMainButton (collectionBonuses.pleasureLevels[i],mainButtonArray[i]);

};

let goColoring = setInterval (() => {

    collectionBonuses.pleasureLevels.forEach ((el,index) => {
        if (el > 0) {
            collectionBonuses.pleasureLevels[index] -= 1;
        }
        else {
            clearInterval(goColoring);
        };
        coloringMainButton (el,mainButtonArray[index]);
    });

}, 1500)

