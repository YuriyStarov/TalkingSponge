import { collectionBonuses, countCoins, countCrystal } from "./collectionAchievements.js";
import { ShopFoods } from "./shop.js";

let audioSpin = document.getElementById ('spin_music');
let spinWheel = document.getElementById ('spinWheel');
let backToPlay = document.getElementById ('backToPlay');
let textWithBonus = document.getElementById ('textWithBonus');
let imageBonus = document.getElementById ('imageBonus');
let bow = document.getElementById ('bow');

const counters = {
    countSprite: 0,
    countTime: 0
  };

  let canvasFortune = document.getElementById("fortuneForBob");

  let ctx = canvasFortune.getContext("2d");
  let widthCtx = canvasFortune.width;
  let heightCtx = canvasFortune.height;
  
  let fortune = new Image(10800,600);
  fortune.src = "./img/fortune.png";

  setTimeout (() => {
    ctx.drawImage(fortune, 0, 0, 600, 600, 100, 50, 600, 600)
  }, 1000 );
   
  function allGame (randomParameter) {
    if (counters.countTime < randomParameter) {
    ctx.clearRect(0, 0, widthCtx, heightCtx);
    draw();
    counters.countTime += 1;
    requestAnimationFrame(() => {allGame(randomParameter)});
  } else {
    counters.countTime = 0;
    counters.countSprite = 0;
    audioSpin.pause();
    bonusAccount(randomParameter);
  }
};

function draw () {
ctx.drawImage(fortune, counters.countSprite, 0, 600, 600, 100, 50, 600, 600),
counters.countSprite += 600;
if (counters.countSprite > 10500) {
    counters.countSprite = 0;
};
};

function bonusAccount (bonusPosition) {

    let imagePath;
    let indexFoodArray;

    const remainder = bonusPosition % 18;

    switch (remainder) {
        
        case 0: {
            imagePath = "url(./img/eat/cake_1.png)";
            indexFoodArray = 2;
            break
        };
        case 1: {
            imagePath = "url(./img/eat/cake_2.png)";
            indexFoodArray = 3;
            break
        };
        case 2: {
            imagePath = "url(./img/eat/cola.png)";
            indexFoodArray = 6;
            break
        };
        case 3: {
            imagePath = "url(./img/eat/milk.png)";
            indexFoodArray = 10;
            break
        };
        case 4: {
            imagePath = "url(./img/eat/pizza.png)";
            indexFoodArray = 11;            break
        };
        case 5: {
            imagePath = "url(./img/eat/soup.png)";
            indexFoodArray = 13;
            break
        };
        case 6: {
            imagePath = "url(./img/eat/coins.png)";
            collectionBonuses.coins += 3;
            countCoins.textContent = collectionBonuses.coins;
            break
        };
        case 7: {
            imagePath = "url(./img/eat/elixir_energy.png)";
            indexFoodArray = 8;
            break
        };
        case 8: {
            imagePath = "url(./img/eat/choko.png)";
            indexFoodArray = 4;
            break
        };
        case 9: {
            imagePath = "url(./img/eat/crystal.png)";
            collectionBonuses.crystal += 1;
            countCrystal.textContent = collectionBonuses.crystal;
            break
        };
        case 10: {
            imagePath = "url(./img/eat/potatoes.png)";
            indexFoodArray = 12;
            break
        };
        case 11: {
            imagePath = "url(./img/eat/elixir_funny.png)";
            indexFoodArray = 9;
            break
        };
        case 12: {
            imagePath = "url(./img/eat/apple.png)";
            indexFoodArray = 0;
            break
        };
        case 13: {
            imagePath = "url(./img/eat/coins_many.png)";
            collectionBonuses.coins += 10;
            countCoins.textContent = collectionBonuses.coins;
            break
        };
        case 14: {
            imagePath = "url(./img/eat/coffee.png)";
            indexFoodArray = 5;
            break
        };
        case 15: {
            imagePath = "url(./img/eat/crystal.png)";
            collectionBonuses.crystal += 2;
            countCrystal.textContent = collectionBonuses.crystal;
            break
        };
        case 16: {
            imagePath = "url(./img/eat/burger.png)";
            indexFoodArray = 1;
            break
        };
        case 17: {
            imagePath = "url(./img/eat/elixir_eat.png)";
            indexFoodArray = 7;
        };
    };

    if (indexFoodArray + 1) {
        collectionBonuses.foods.push({img: ShopFoods[indexFoodArray].img, energyType: ShopFoods[indexFoodArray].energyType, energy: ShopFoods[indexFoodArray].energy, type: ShopFoods[indexFoodArray].type});
    };
    imageBonus.style.backgroundImage = imagePath;
    textWithBonus.style.display = 'block';
    imageBonus.style.display = 'block';

};

spinWheel.addEventListener ('click', () => {
const randomFortune = Math.floor(Math.random()*36 + 180);
spinWheel.style.display = 'none';
allGame(randomFortune);
audioSpin.play();
});

backToPlay.addEventListener ('click', () => {
    textWithBonus.style.display = 'none';
    imageBonus.style.display = 'none';
    spinWheel.style.display = 'block';
    ctx.drawImage(fortune, counters.countSprite, 0, 600, 600, 100, 50, 600, 600);
})