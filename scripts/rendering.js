import { queue, queueObject } from "./queueObject.js";

const wrapperKitchen = document.querySelector('#kitchen');

export let canvasMain = document.getElementById("canvas");

export let ctxMain = canvasMain.getContext("2d");
export let widthCtxMain = canvasMain.width;
export let heightCtxMain = canvasMain.height;

export let blinking = new Image(14000,600);
blinking.src = "./img/blink.png";

setTimeout (() => {ctxMain.drawImage(blinking, 0, 0, 700, 600, 200, 130, 500, 500);},1000);

let yawning = new Image(14000,600);
yawning.src = "./img/yawn.png";

let leftLeg = new Image(14000,600);
leftLeg.src = "./img/left_leg_reaction.png";

let rightLeg = new Image(14000,600);
rightLeg.src = "./img/right_leg_reaction.png";

let leftEyes = new Image(14000,600);
leftEyes.src = "./img/left_eye_ooops.png";

let rightEyes = new Image(14000,600);
rightEyes.src = "./img/right_eye_ooops.png";

let leftHand = new Image(14000,600);
leftHand.src = "./img/left_hand_reaction.png";

let rightHand = new Image(14000,600);
rightHand.src = "./img/right_hand_reaction.png";

let bellyImage = new Image(14000,600);
bellyImage.src = "./img/belly.png";

let jawImage = new Image(14000,600);
jawImage.src = "./img/teeth.png";

let fallImage = new Image(14000,600);
fallImage.src = "./img/new_fall.png";

let ticklingImage = new Image(14000,600);
ticklingImage.src = "./img/tickling.png";

let bobAudio0 = document.getElementById ('yawn_music');
let bobAudio1 = document.getElementById ('main_music');
let bobAudio2 = document.getElementById ('eyes_music');
let bobAudio3 = document.getElementById ('hand_music');
let bobAudio4 = document.getElementById ('belly_music');
let bobAudio5 = document.getElementById ('jaw_music');
let bobAudio6 = document.getElementById ('fall_music');
let bobAudio7 = document.getElementById ('tickling_music');

let reactionLegLeft = document.getElementById ('left_leg');
let reactionLegRight = document.getElementById ('right_leg');
let reactionHandLeft = document.getElementById ('left_hand');
let reactionHandRight = document.getElementById ('right_hand');
let reactionEyesLeft = document.getElementById ('left_eyes');
let reactionEyesRight = document.getElementById ('right_eyes');
let reactionBelly = document.getElementById ('belly');
let reactionJaw = document.getElementById ('jaw');

export const countersIntervals = {

  countYawn: 0,
  countFall: 0,
  countBlink: 0

};

export function RenderObject (image, frequencyFrame,numFrame,frameWidth,frameHeight,objectPositionX,objectPositionY,objectWidth,objectHeight) {

  this.image = image;
  this.frameWidth = frameWidth;
  this.frameHeight = frameHeight;
  this.numFrame = numFrame;
  this.objectPositionX = objectPositionX;
  this.objectPositionY = objectPositionY;
  this.objectWidth = objectWidth;
  this.objectHeight = objectHeight;
  this.countFrame = 0;
  this.countEnd = 1;
  this.frequencyFrame = frequencyFrame;
  this.lastFrame = this.numFrame*this.frameWidth;
  this.repeatSprite = frequencyFrame*this.numFrame + 1;
  
};

const blinkingRenderObject = new RenderObject (blinking, 1, 20, 700, 600, 200, 130, 500, 500);
const yawningRenderObject = new RenderObject (yawning, 4, 20, 700, 600, 200, 130, 500, 500);
const leftLegRenderObject = new RenderObject (leftLeg, 3, 20, 700, 600, 200, 130, 500, 500);
const rightLegRenderObject = new RenderObject (rightLeg, 3, 20, 700, 600, 200, 130, 500, 500);
const leftEyeRenderObject = new RenderObject (leftEyes, 2, 20, 700, 600, 200, 130, 500, 500);
const rightEyeRenderObject = new RenderObject (rightEyes, 2, 20, 700, 600, 200, 130, 500, 500);
const leftHandRenderObject = new RenderObject (leftHand, 3, 20, 700, 600, 200, 130, 500, 500);
const rightHandRenderObject = new RenderObject (rightHand, 3, 20, 700, 600, 200, 130, 500, 500);
const bellyRenderObject = new RenderObject (bellyImage, 2, 20, 700, 600, 200, 130, 500, 500);
const jawRenderObject = new RenderObject (jawImage, 2, 20, 700, 600, 200, 130, 500, 500);
const fallRenderObject = new RenderObject (fallImage, 5, 20, 700, 600, 200, 130, 500, 500);
const ticklingRenderObject = new RenderObject (ticklingImage, 2, 20, 700, 600, 200, 130, 500, 500);

setInterval (() => {
  countersIntervals.countBlink += 1;
    if (countersIntervals.countBlink === 6) {
      allGame(blinkingRenderObject);
      countersIntervals.countBlink = 0;
    }
},1000);

setInterval (() => {
  if(wrapperKitchen.style.display !== "block"){
    countersIntervals.countYawn += 1;
    if (countersIntervals.countYawn === 21) {
      allGame(yawningRenderObject);
      bobAudio0.play();
      countersIntervals.countYawn = 0;
    }
  }
},1000);

export function allGame (renderObject) {
  if (renderObject.countEnd < renderObject.repeatSprite) {
  ctxMain.clearRect(0, 0, widthCtxMain, heightCtxMain);
  draw(renderObject);
  renderObject.countEnd += 1;
  requestAnimationFrame(() => {allGame(renderObject)});
} else {
  ctxMain.clearRect(0, 0, widthCtxMain, heightCtxMain);
  ctxMain.drawImage(blinking, 0, 0, 700, 600, 200, 130, 500, 500);
  renderObject.countEnd = 1;
  queueObject.listenerBlock();
}
};

export function draw (renderObject) {
ctxMain.drawImage(renderObject.image, renderObject.countFrame, 0, renderObject.frameWidth, renderObject.frameHeight, renderObject.objectPositionX, renderObject.objectPositionY, renderObject.objectWidth, renderObject.objectHeight);
if (!(renderObject.countEnd % renderObject.frequencyFrame)) {
  renderObject.countFrame += renderObject.frameWidth;
};
if (renderObject.countFrame >= renderObject.lastFrame) {
  renderObject.countFrame = 0;
};
};

function fallCounter () {
  countersIntervals.countFall += 1;
  if (countersIntervals.countFall === 5) {
    setTimeout (() => {
      queueObject.listenerNone();
      allGame(fallRenderObject);
    }, 800);
    countersIntervals.countFall = 0;
    bobAudio6.play();
  };
  if (countersIntervals.countFall === 1) {
    setTimeout (() => {countersIntervals.countFall = 0;}, 3000);
  };
};

reactionLegLeft.addEventListener ('click', () => {
  allGame(leftLegRenderObject);
  fallCounter();
  bobAudio1.play();
  countersIntervals.countYawn = 0;
  countersIntervals.countBlink = 3;
});

reactionLegRight.addEventListener ('click', () => {
  allGame(rightLegRenderObject);
  fallCounter();
  bobAudio1.play();
  countersIntervals.countYawn = 0;
  countersIntervals.countBlink = 3;
});

reactionEyesLeft.addEventListener ('click', () => {
  allGame(leftEyeRenderObject);
  fallCounter();
  bobAudio2.play();
  countersIntervals.countYawn = 0;
  countersIntervals.countBlink = 3;
});

reactionEyesRight.addEventListener ('click', () => {
  allGame(rightEyeRenderObject);
  fallCounter();
  bobAudio2.play();
  countersIntervals.countYawn = 0;
  countersIntervals.countBlink = 3;
});

reactionHandLeft.addEventListener ('click', () => {
  allGame(leftHandRenderObject);
  fallCounter();
  bobAudio3.play();
  countersIntervals.countYawn = 0;
  countersIntervals.countBlink = 3;
});

reactionHandRight.addEventListener ('click', () => {
  allGame(rightHandRenderObject);
  fallCounter();
  bobAudio3.play();
  countersIntervals.countYawn = 0;
  countersIntervals.countBlink = 3;
});

reactionBelly.addEventListener ('mousedown', () => {
  allGame(bellyRenderObject);
  fallCounter();
  bobAudio4.play();
  countersIntervals.countYawn = 0;
  countersIntervals.countBlink = 3;
});

reactionJaw.addEventListener ('mousedown', () => {
  allGame(jawRenderObject);
  fallCounter(); 
  bobAudio5.play();
  countersIntervals.countYawn = 0;
  countersIntervals.countBlink = 3;
});


reactionBelly.addEventListener ('mousemove',(event) => {
    if (event.buttons === 1) {
    allGame(ticklingRenderObject);
    bobAudio7.play();
    countersIntervals.countYawn = 0;
    countersIntervals.countBlink = 0;
  };
});

reactionJaw.addEventListener ('mousemove',(event) => {
  if (event.buttons === 1) {
  allGame(ticklingRenderObject);
  bobAudio7.play();
  countersIntervals.countYawn = 0;
  countersIntervals.countBlink = 0;
};
});




