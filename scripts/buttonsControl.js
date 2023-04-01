import { collectionBonuses } from "./collectionAchievements.js";

const toPlayroom = document.getElementById ('toPlayroom');
const toKitchen = document.getElementById ('toKitchen');
const toBathroom = document.getElementById ('toBathroom');
const toBedroom = document.getElementById ('toBedroom');

const backToPlayroom = document.getElementById ('backToPlayroom');
const toMiniGame = document.getElementById ('toMiniGame');
const toBurgerGame = document.getElementById ('krubsBurgerGame');
const snakeGame = document.getElementById ('snakeGame');
const puzzlesGame = document.getElementById ('puzzlesGame');
const mainGrand = document.getElementById ('mainGrand');
const gameMenu = document.getElementById ('gameMenu');
const iframeGame1 = document.getElementById ('iframeGame1');
const iframeGame2 = document.getElementById ('iframeGame2');
const iframeGame3 = document.getElementById ('iframeGame3');
const volume1 = document.getElementById ('gift_music');
const volume2 = document.getElementById ('yawn_music');
const giftReaction = document.getElementById ('giftReaction');
const pageOfFortune = document.getElementById ('pageOfFortune');
const backToPlay = document.getElementById ('backToPlay');
const backToMiniGameMenu = document.querySelectorAll('.backToMiniGameMenu');
const toMarket = document.getElementById('toMarket'); 
const toTravelAndMarket = document.getElementById ('toTravelAndMarket');
const marketBackToPlayroom = document.getElementById ('marketBackToPlayroom');
const secondaryButton3 = document.getElementById ('secondaryButton3');
const airTravel = document.getElementById ('airTravel');
const backToTravelMenu = document.getElementById ('backToTravelMenu');
const allCollectionButtonInTravel1 = document.getElementsByClassName ('allCollectionButtonInTravel');

toMiniGame.addEventListener ('click', () => {
    volume1.volume = 0;
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    gameMenu.style.display = 'block';
});

giftReaction.addEventListener ('click', () => {
    volume1.volume = 0;
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    pageOfFortune.style.display = 'block';
});

toBurgerGame.addEventListener ('click', () => {
    gameMenu.style.display = 'none';
    iframeGame1.style.display = 'block';
});

snakeGame.addEventListener ('click', () => {
    gameMenu.style.display = 'none';
    iframeGame2.style.display = 'block';
});

puzzlesGame.addEventListener ('click', () => {
    gameMenu.style.display = 'none';
    iframeGame3.style.display = 'block';
});

backToPlayroom.addEventListener ('click', () => {
    volume1.volume = 1;
    volume2.volume = 1;
    gameMenu.style.display = 'none';
    mainGrand.style.display = 'block';
});

backToPlay.addEventListener ('click', () => {
    volume1.volume = 1;
    volume2.volume = 1;
    pageOfFortune.style.display = 'none';
    mainGrand.style.display = 'block';
});

backToMiniGameMenu.forEach(btn=>btn.addEventListener ('click', () => {
    iframeGame1.style.display = 'none';
    iframeGame2.style.display = 'none';
    iframeGame3.style.display = 'none';
    gameMenu.style.display = 'block';
}));

toMarket.addEventListener ('click', () => {
    toTravelAndMarket.style.display = 'block';
});

marketBackToPlayroom.addEventListener ('click', () => {
    toTravelAndMarket.style.display = 'none';
});

secondaryButton3.addEventListener ('click', () => {
    volume1.volume = 0;
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    toTravelAndMarket.style.display = 'none';
    airTravel.style.display = 'block';
});

backToTravelMenu.addEventListener ('click', () => {
    volume1.volume = 1;
    volume2.volume = 1;
    airTravel.style.display = 'none';
    mainGrand.style.display = 'block';    
});