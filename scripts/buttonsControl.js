import { collectionBonuses } from "./collectionAchievements.js";
import { kitchenStart } from "./kitchen.js";
import { toilet, foamCollection, exitFoam, moveWC } from "./bathroom.js";
import { snakeGameObj } from "../miniPlay/snake_mini_game/dist/index.js";
import { startCart, discardInCart } from "./shop.js";

const toPlayroom = document.getElementById('toPlayroom');
const toKitchen = document.getElementById('toKitchen');
const toBathroom = document.getElementById('toBathroom');
const toBedroom = document.getElementById('toBedroom');

const backToPlayroom = document.getElementById('backToPlayroom');
const toMiniGame = document.getElementById('toMiniGame');
const toBurgerGame = document.getElementById('krubsBurgerGame');
const snakeGame = document.getElementById('snakeGame');
const puzzlesGame = document.getElementById('puzzlesGame');
const mainGrand = document.getElementById('mainGrand');
const gameMenu = document.getElementById('gameMenu');
const iframeGame1 = document.getElementById('iframeGame1');
const iframeGame2 = document.getElementById('iframeGame2');
const game2 = document.getElementById('game2');
const startSnakeGame = document.getElementById('startSnakeGame');
const iframeGame3 = document.getElementById('iframeGame3');
const volume2 = document.getElementById('yawn_music');
const giftReaction = document.getElementById('giftReaction');
const pinataReaction = document.getElementById('pinataReaction');
const lineWithList = document.getElementById('lineWithList');
const canvasPinata = document.getElementById('canvas3');
const canvasGift = document.getElementById('canvas2');
const pageOfFortune = document.getElementById('pageOfFortune');
const backToPlay = document.getElementById('backToPlay');
const backToMiniGameMenu = document.querySelectorAll('.backToMiniGameMenu');
const toMarket = document.getElementById('toMarket');
const toTravelAndMarket = document.getElementById('toTravelAndMarket');
const marketBackToPlayroom = document.getElementById('marketBackToPlayroom');
const secondaryButton2 = document.getElementById('secondaryButton2');
const secondaryButton3 = document.getElementById('secondaryButton3');
const secondaryButton4 = document.getElementById('secondaryButton4');
const backToKitchen = document.getElementById('backToKitchen');
const secondaryButton1_2 = document.getElementById('secondaryButton1_2');
const backToKitchenNow = document.getElementById('backToKitchenNow');
const wardrobe = document.getElementById('wardrobe');
const airTravel = document.getElementById('airTravel');
const backToAllButtons = document.getElementById('backToAllButtons');
const backToTravelMenu = document.getElementById('backToTravelMenu');
const allCollectionButtonInTravel1 = document.getElementsByClassName('allCollectionButtonInTravel');
const kitchenRoom = document.querySelector('#kitchen');
const kitchenCanvas = kitchenRoom.querySelector('#c');
const foodStore = document.querySelector('#shop');
const interiorKitchen = document.querySelector('#interiorKitchen');
const washcloth = document.getElementById('washcloth');
const showerUp = document.getElementById('showerUp');
const showerDown = document.getElementById('showerDown');
const interior = document.getElementsByClassName('interior');
const textPosition = document.getElementsByClassName('textPosition');
const foodButton = document.getElementsByClassName('foodButton');
const maskForSleep = document.getElementById('maskForSleep');
const showerCanvas = document.getElementById('showerCanvas');
const toiletReaction = document.getElementById('toiletReaction');
const giveMeFoodMusic = document.getElementById ('giveMeFoodMusic');


import { bedRoom } from "./store/main.js";
import { kitchen } from "./store/main.js";

const rooms = {

    playroomIn() {
        mainGrand.style.backgroundImage = 'url(./img/playroom.png)';
        canvasGift.style.display = 'block';
        canvasPinata.style.display = 'block';
        giftReaction.style.display = 'block';
        pinataReaction.style.display = 'block';
        toMiniGame.style.display = 'block';
        lineWithList.style.display = 'block';
        interior[0].style.display = 'block';
        textPosition[0].style.display = 'block';
    },

    playroomOut() {
        canvasGift.style.display = 'none';
        canvasPinata.style.display = 'none';
        giftReaction.style.display = 'none';
        pinataReaction.style.display = 'none';
        toMiniGame.style.display = 'none';
        lineWithList.style.display = 'none';
        interior[0].style.display = 'none';
        textPosition[0].style.display = 'none';
    },

    kitchenIn() {
        mainGrand.style.backgroundImage = 'url(./img/eat/greatKitchen.jpg)';
        kitchenRoom.style.display = 'block';
        kitchenCanvas.style.display = 'block';
        interior[1].style.display = 'block';
        interiorKitchen.style.display = 'block';
        textPosition[1].style.display = 'block';
        foodButton[0].style.display = 'block';
        foodButton[1].style.display = 'block';
        foodButton[2].style.display = 'block';
        kitchenStart();
        kitchen.render();
    },

    kitchenOut() {
        kitchenRoom.style.display = 'none';
        kitchenCanvas.style.display = 'none'; 
        interior[1].style.display = 'none';
        interiorKitchen.style.display = 'none';
        textPosition[1].style.display = 'none';
        foodButton[0].style.display = 'none';
        foodButton[1].style.display = 'none';
        foodButton[2].style.display = 'none';
        kitchen.close();
    },

    bathroomIn() {
        mainGrand.style.backgroundImage = 'url(./img/bathroom/bathroomBack.jpg)';
        washcloth.style.display = 'block';
        showerUp.style.display = 'block';
        showerDown.style.display = 'block';
        interior[2].style.display = 'block';
        textPosition[2].style.display = 'block';
        showerCanvas.style.display = 'block';
        toiletReaction.style.display = 'block';
        toilet();
    },

    bathroomOut() {
        washcloth.style.display = 'none';
        showerUp.style.display = 'none';
        showerDown.style.display = 'none';
        interior[2].style.display = 'none';
        textPosition[2].style.display = 'none';
        showerCanvas.style.display = 'none';
        toiletReaction.style.display = 'none';
        exitFoam();
    },

    bedroomIn() {

        mainGrand.style.backgroundImage = 'url(./img/bedRoom/background.png)';
        // canvasGift.style.display = 'block';
        // canvasPinata.style.display = 'block';
        // giftReaction.style.display = 'block';
        // pinataReaction.style.display = 'block';
        // toMiniGame.style.display = 'block';
        // lineWithList.style.display = 'block';
        interior[3].style.display = 'block';
        textPosition[3].style.display = 'block';
        bedRoom.render();

    },

    bedroomOut() {
        canvasGift.style.display = 'none';
        canvasPinata.style.display = 'none';
        giftReaction.style.display = 'none';
        pinataReaction.style.display = 'none';
        toMiniGame.style.display = 'none';
        lineWithList.style.display = 'none';
        interior[3].style.display = 'none';
        textPosition[3].style.display = 'none';
        maskForSleep.style.display = 'none';
        bedRoom.close()
    }

};

toMiniGame.addEventListener('click', () => {
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    gameMenu.style.display = 'block';
    interiorKitchen.style.display = 'none';
});

giftReaction.addEventListener('click', () => {
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    pageOfFortune.style.display = 'block';
});

toBurgerGame.addEventListener('click', () => {
    gameMenu.style.display = 'none';
    iframeGame1.style.display = 'block';
});
startSnakeGame.addEventListener('click', () => {

    if (snakeGameObj.isPaused && !snakeGameObj.gameOver) {
        snakeGameObj.pause();
    } else if (snakeGameObj.isPaused) {
        snakeGameObj.clearGameState();
        snakeGameObj.food.update();
        snakeGameObj.score = 0;
        snakeGameObj.gameOver = snakeGameObj.snake.collidesWithSelf = false;
        snakeGameObj.render();
        snakeGameObj.pause();
    }

    startSnakeGame.style.display = 'none';
    game2.style.position = 'absolute';
    game2.style.top = '310px';
})
snakeGame.addEventListener('click', () => {
    startSnakeGame.style.display = 'block';

    if (!snakeGameObj.isPaused) {
        snakeGameObj.pause();
    }
    gameMenu.style.display = 'none';
    iframeGame2.style.display = 'block';
    game2.style.position = 'static';
});
game2.addEventListener('click', () => {
    if (snakeGameObj.gameOver) {
        console.log(snakeGameObj.snake.bonus );
        const moneyUpdateEvent = new CustomEvent('moneyUpdate', { detail: { action:"plus", coins: snakeGameObj.snake.bonus } });
        document.dispatchEvent(moneyUpdateEvent);
    }
})
puzzlesGame.addEventListener('click', () => {
    gameMenu.style.display = 'none';
    iframeGame3.style.display = 'block';
});

backToPlayroom.addEventListener('click', () => {
    volume2.volume = 1;
    gameMenu.style.display = 'none';
    mainGrand.style.display = 'block';
    setTimeout (() => {bigToLittlePrize(170,100,300,115,35,1,30)},500);
});

backToPlay.addEventListener('click', () => {
    volume2.volume = 1;
    pageOfFortune.style.display = 'none';
    mainGrand.style.display = 'block';
});

backToMiniGameMenu.forEach(btn => btn.addEventListener('click', () => {
    iframeGame1.style.display = 'none';
    iframeGame2.style.display = 'none';
    iframeGame3.style.display = 'none';
    gameMenu.style.display = 'block';
}));

toMarket.addEventListener('click', () => {
    toTravelAndMarket.style.display = 'block';
});

marketBackToPlayroom.addEventListener('click', () => {
    toTravelAndMarket.style.display = 'none';
});

secondaryButton2.addEventListener('click', () => {
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    toTravelAndMarket.style.display = 'none';
    wardrobe.style.display = 'block';
    interiorKitchen.style.display = 'none';
});


secondaryButton3.addEventListener('click', () => {
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    toTravelAndMarket.style.display = 'none';
    airTravel.style.display = 'block';
    interiorKitchen.style.display = 'none';
    giveMeFoodMusic.pause();
});

secondaryButton4.addEventListener('click', () => {
    rooms.kitchenOut();
    startCart();
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    toTravelAndMarket.style.display = 'none';
    foodStore.style.display = 'block';
    backToKitchen.style.display = 'block';
    giveMeFoodMusic.pause();
});

secondaryButton1_2.addEventListener('click', () => {
    // rooms.kitchenOut();
    volume2.volume = 1;
    mainGrand.style.display = 'none';
    toTravelAndMarket.style.display = 'none';
    interiorKitchen.style.display = 'block';
    backToKitchenNow.style.display = 'block';
    giveMeFoodMusic.pause();
});

backToKitchen.addEventListener('click', () => {
    volume2.volume = 1;
    foodStore.style.display = 'none';
    mainGrand.style.display = 'block';
    backToKitchen.style.display = 'none'
    // toTravelAndMarket.style.display = 'block';
    rooms.bathroomOut();
    rooms.bedroomOut();
    rooms.playroomOut();
    rooms.kitchenIn();
    discardInCart();
});

backToKitchenNow.addEventListener('click', () => {
    backToKitchen.style.display = 'none'
    volume2.volume = 1;
    interiorKitchen.style.display = 'none';
    gameMenu.style.display = 'none';
    mainGrand.style.display = 'block';  
    // gameMenu.style.display = 'block';
    // toTravelAndMarket.style.display = 'none';
    rooms.bathroomOut();
    rooms.bedroomOut();
    rooms.playroomOut();
    rooms.kitchenIn();
});


backToAllButtons.addEventListener('click', () => {
    volume2.volume = 1;
    wardrobe.style.display = 'none';
    mainGrand.style.display = 'block';
});

backToTravelMenu.addEventListener('click', () => {
    volume2.volume = 1;
    airTravel.style.display = 'none';
    mainGrand.style.display = 'block';
});

toPlayroom.addEventListener('click', () => {
    rooms.bathroomOut();
    rooms.bedroomOut();
    rooms.kitchenOut();
    rooms.playroomIn();
});

toKitchen.addEventListener('click', () => {
    rooms.bathroomOut();
    rooms.bedroomOut();
    rooms.playroomOut();
    rooms.kitchenIn();
});



toBathroom.addEventListener('click', () => {
    rooms.playroomOut();
    rooms.bedroomOut();
    rooms.kitchenOut();
    rooms.bathroomIn();
});

toBedroom.addEventListener('click', () => {
    rooms.bathroomOut();
    rooms.playroomOut();
    rooms.kitchenOut();
    rooms.bedroomIn();
});