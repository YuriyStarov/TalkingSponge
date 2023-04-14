import { collectionBonuses, countCoins, countCrystal } from "./collectionAchievements.js";

let audioCrash = document.getElementById ('crash_music');
let audioBoom = document.getElementById ('boom_music');
let reaction = document.getElementById ('pinataReaction');
let pinataPrize = document.getElementById ('pinataPrize');
let prizeAudio = document.getElementById ('prize_music');

const counters = {
  countSprite: 0,
  countTime: 0,
  countKick: 0
};

let canvas = document.getElementById("canvas3");

let ctx = canvas.getContext("2d");
let widthCtx = canvas.width;
let heightCtx = canvas.height;

let pinata1 = new Image(3000,300);
pinata1.src = "./img/crubs_pinata_1_sprite.png";

setTimeout (() => {ctx.drawImage(pinata1, 0, 0, 200, 300, 0, 0, 200, 300);}, 1000);

let pinata2 = new Image(3000,300);
pinata2.src = "./img/crubs_pinata_2_sprite.png";

let pinata3 = new Image(3000,300);
pinata3.src = "./img/crubs_pinata_3_sprite.png";

let pinata4 = new Image(3000,300);
pinata4.src = "./img/crubs_pinata_4_sprite.png";

let pinata5 = new Image(200,300);
pinata5.src = "./img/crubs_pinata_5.png";

function beforeAllGame () {
  counters.countKick += 1;
  if (counters.countKick <= 20) {
    audioBoom.play();
  };
  if ((counters.countKick >= 0) && (counters.countKick < 5)) {
    allGame(pinata1);
  };
  if ((counters.countKick === 5) || (counters.countKick === 10) || (counters.countKick === 15)) {
    audioCrash.play();
  };
  if ((counters.countKick >= 5) && (counters.countKick < 10)) {
    allGame(pinata2);
  };
  if ((counters.countKick >= 10) && (counters.countKick < 15)) {
    allGame(pinata3);
  }; 
  if ((counters.countKick >= 15) && (counters.countKick < 20)) {
    allGame(pinata4);
  }; 
  if (counters.countKick === 20) {
    audioCrash.play();
    paintPrize();
    setTimeout (() => {bigToLittlePrize(170,100,300,115,35,1,30)},2000);
    ctx.clearRect(0, 0, widthCtx, heightCtx);
    ctx.drawImage(pinata5, 0, 0, 200, 300, 0, 0, 200, 300);
    setTimeout (() => {
      ctx.clearRect(0, 0, widthCtx, heightCtx);
      ctx.drawImage(pinata1, 0, 0, 200, 300, 0, 0, 200, 300);
      counters.countKick = 0;
    },5000);
  };
};

export function paintPrize () {

  const arrayPrize = ['🟡','🔶'];
  const numPrize = Math.floor ( Math.random()*10 + 1 );
  const typePrize = Math.floor ( Math.random() + 0.5 );
  prizeAudio.play();
  pinataPrize.textContent = `Your prize\n${numPrize} ${arrayPrize[typePrize]}`;
  pinataPrize.style.display = 'block';
  if (typePrize) {
    collectionBonuses.crystal += numPrize;
    countCrystal.textContent = collectionBonuses.crystal;
  }
  else {
    collectionBonuses.coins += numPrize;
    countCoins.textContent = collectionBonuses.coins;
  }
};

export function bigToLittlePrize (width,height,top,left,fontSize,opacity,endPoint) {

  if (endPoint > 0) {
    pinataPrize.style.width = `${width}px`;
    pinataPrize.style.height = `${height}px`;
    pinataPrize.style.top = `${top}px`;
    pinataPrize.style.left = `${left}px`;
    pinataPrize.style.fontSize = `${fontSize}px`;
    pinataPrize.style.opacity = `${opacity}`;
    pinataPrize.style.zIndex = `1000`;

    const newWidth = width - 3;
    const newHeight = height -3;
    const newTop = top - 2;
    const newLeft = left + 1;
    const newFontSize = fontSize - 1;
    const newOpacity = opacity - 0.025;
    const newEndPoint = endPoint - 1;

    setTimeout(() => {
      requestAnimationFrame (() => {bigToLittlePrize (newWidth,newHeight,newTop,newLeft,newFontSize,newOpacity,newEndPoint)});
    }, 100);
  }
  else {
    pinataPrize.style.display = 'none';
    pinataPrize.style.width = `170px`;
    pinataPrize.style.height = `100px`;
    pinataPrize.style.top = `300px`;
    pinataPrize.style.left = `115px`;
    pinataPrize.style.fontSize = `35px`;
    pinataPrize.style.opacity = `1`;
  };
};

function allGame (sprite) {
      if ((counters.countTime === 0) || (counters.countSprite !== 0)) {
      ctx.clearRect(0, 0, widthCtx, heightCtx);
      draw(sprite);
      counters.countTime += 1;
      requestAnimationFrame(() => {allGame(sprite)});
    } else {
      ctx.clearRect(0, 0, widthCtx, heightCtx);
      ctx.drawImage(sprite, 0, 0, 200, 300, 0, 0, 200, 300);
      counters.countTime = 0;
    }
};

function draw (newSprite) {
  ctx.drawImage(newSprite, counters.countSprite, 0, 200, 300, 0, 0, 200, 300),
  counters.countSprite += 200;
  if (counters.countSprite > 2900) {
      counters.countSprite = 0;
  };
};

reaction.addEventListener ('click', beforeAllGame);

window.paintPrize = paintPrize;
window.bigToLittlePrize = bigToLittlePrize;