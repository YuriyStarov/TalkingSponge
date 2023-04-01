import { collectionBonuses } from "./collectionAchievements.js";

const allCollectionButtonInTravel1 = document.getElementsByClassName ('allCollectionButtonInTravel');

allCollectionButtonInTravel1[0].textContent = `You have: ${collectionBonuses.tickets} 🎫`;

function buyOrFly () {

    let flyTicket;

    if (collectionBonuses.tickets === 0) {

        flyTicket = 'TO BUY';

    }
    else {
    
        flyTicket = 'TO FLY';
    
    };

    allCollectionButtonInTravel1[1].textContent = `${flyTicket} 🎫`;

};

buyOrFly();

let globeAudio = document.getElementById ('globe_music');

const counters = {
  countSprite: 0,
  countTime: 0
};

let canvas = document.getElementById("globeSpin");

let ctx = canvas.getContext("2d");
let widthCtx = canvas.width;
let heightCtx = canvas.height;

let globe = new Image(2410,247);
globe.src = "img/globe.png";
setTimeout (() => {
    ctx.drawImage(globe, 0, 0, 241, 247, 150, 100, 500, 500);
},2000);

function allGame (randomParameter) {
      if (counters.countTime < randomParameter) {
      ctx.clearRect(0, 0, widthCtx, heightCtx);
      draw();
      counters.countTime += 1;
      requestAnimationFrame(() => {allGame(randomParameter)});
    } else {
      counters.countTime = 0;
      globeAudio.pause();
    }
};

function draw () {
  ctx.drawImage(globe, counters.countSprite, 0, 241, 247, 150, 100, 500, 500),
  counters.countSprite += 241;
  if (counters.countSprite > 2300) {
      counters.countSprite = 0;
  };
};

allCollectionButtonInTravel1[1].addEventListener ('click', () => {
  const randomFortune = Math.floor(Math.random()*60 + 240);
  allGame(randomFortune);
  globeAudio.play();
});