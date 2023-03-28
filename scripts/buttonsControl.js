
import { audioArray } from "./main.js";

const backToPlayroom = document.getElementById ('backToPlayroom');
const toMiniGame = document.getElementById ('toMiniGame');
const toBurgerGame = document.getElementById ('krubsBurgerGame');
const mainGrand = document.getElementById ('mainGrand');
const gameMenu = document.getElementById ('gameMenu');
const iframeGame1 = document.getElementById ('iframeGame1');
//const toBurgerGame = document.getElementById ('krubsBurgerGame');

toMiniGame.addEventListener ('click', () => {
    audioArray.forEach ((el) => {
        el.volume = 0;
    });
    mainGrand.style.display = 'none';
    gameMenu.style.display = 'block';
});

toBurgerGame.addEventListener ('click', () => {
    gameMenu.style.display = 'none';
    iframeGame1.style.display = 'block';
});

backToPlayroom.addEventListener ('click', () => {
    audioArray.forEach ((el) => {
        el.volume = 1;
    });
    gameMenu.style.display = 'none';
    mainGrand.style.display = 'block';
});