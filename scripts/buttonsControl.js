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
const volume2 = document.getElementById ('yawn_music');
const giftReaction = document.getElementById ('giftReaction');
const pinataReaction = document.getElementById ('pinataReaction');
const lineWithList = document.getElementById ('lineWithList');
const canvasPinata = document.getElementById ('canvas3');
const canvasGift = document.getElementById ('canvas2');
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

const rooms = {

playroomIn () {
    mainGrand.style.backgroundImage = 'url(../img/playroom.png)';
    canvasGift.display.style = 'block';
    canvasPinata.display.style = 'block';
    giftReaction.display.style = 'block';
    pinataReaction.display.style = 'block';
    toMiniGame.display.style = 'block';
    toMarket.display.style = 'block';
    lineWithList.display.style = 'block';
},

playroomOut () {
    canvasGift.display.style = 'none';
    canvasPinata.display.style = 'none';
    giftReaction.display.style = 'none';
    pinataReaction.display.style = 'none';
    toMiniGame.display.style = 'none';
    toMarket.display.style = 'none';
    lineWithList.display.style = 'none';
},

kitchenIn () {

},

kitchenOut () {

},

bathroomIn () {

},

bathroomOut () {

},

bedroomIn () {

},

bedroomOut () {
    
}

}; 

toMiniGame.addEventListener ('click', () => {
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    gameMenu.style.display = 'block';
});

giftReaction.addEventListener ('click', () => {
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
    volume2.volume = 1;
    gameMenu.style.display = 'none';
    mainGrand.style.display = 'block';
});

backToPlay.addEventListener ('click', () => {
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
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    toTravelAndMarket.style.display = 'none';
    airTravel.style.display = 'block';
});

backToTravelMenu.addEventListener ('click', () => {
    volume2.volume = 1;
    airTravel.style.display = 'none';
    mainGrand.style.display = 'block';    
});

/*toPlayroom.addEventListener ('click', () => {
    rooms.bathroomOut();
    rooms.bedroomOut();
    rooms.kitchenOut();
    rooms.playroomIn();
});

toKitchen.addEventListener ('click', () => {
    rooms.bathroomOut();
    rooms.bedroomOut();
    rooms.playroomOut();
    rooms.kitchenIn();
});

toBathroom.addEventListener ('click', () => {
    rooms.playroomOut();
    rooms.bedroomOut();
    rooms.kitchenOut();
    rooms.bathroomIn();
});

toBedroom.addEventListener ('click', () => {
    rooms.bathroomOut();
    rooms.playroomOut();
    rooms.kitchenOut();
    rooms.bedroomIn();
});*/