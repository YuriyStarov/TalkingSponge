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

function coloringMainButton (pleasureLevel,button) {

    if (pleasureLevel === 0) {
        button.style.backgroundImage = 'linear-gradient(0deg, #FF0000 0%, #FF0000 100%)';
    } 
    else {
        const middle = 100 - pleasureLevel;
        const gradient = `linear-gradient(0deg, #FFFF0099 ${middle}%, #6495ed99 ${middle}%)`
        button.style.backgroundImage = gradient;
    };     

};

for (let i = 0; i < mainButtonArray.length; i += 1) {

    coloringMainButton (collectionBonuses.pleasureLevels[i],mainButtonArray[i]);

};

