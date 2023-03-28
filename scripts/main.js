
let canvas = document.getElementById("canvas");

let ctx = canvas.getContext("2d");
let widthCtx = canvas.width;
let heightCtx = canvas.height;

let blinking = new Image(14000,600);
blinking.src = "../img/blink.png";

setTimeout (() => {ctx.drawImage(blinking, 0, 0, 700, 600, 200, 130, 500, 500);},500);

let yawning = new Image(14000,600);
yawning.src = "../img/yawn.png";

let leftLeg = new Image(14000,600);
leftLeg.src = "../img/left_leg_reaction.png";

let rightLeg = new Image(14000,600);
rightLeg.src = "../img/right_leg_reaction.png";

let leftEyes = new Image(14000,600);
leftEyes.src = "../img/left_eye_ooops.png";

let rightEyes = new Image(14000,600);
rightEyes.src = "../img/right_eye_ooops.png";

let leftHand = new Image(14000,600);
leftHand.src = "../img/left_hand_reaction.png";

let rightHand = new Image(14000,600);
rightHand.src = "../img/right_hand_reaction.png";

let bellyImage = new Image(14000,600);
bellyImage.src = "../img/belly.png";

let jawImage = new Image(14000,600);
jawImage.src = "../img/teeth.png";

let fallImage = new Image(14000,600);
fallImage.src = "../img/new_fall.png";

let ticklingImage = new Image(14000,600);
ticklingImage.src = "../img/tickling.png";

let bobAudio0 = document.getElementById ('yawn_music');
let bobAudio1 = document.getElementById ('main_music');
let bobAudio2 = document.getElementById ('eyes_music');
let bobAudio3 = document.getElementById ('hand_music');
let bobAudio4 = document.getElementById ('belly_music');
let bobAudio5 = document.getElementById ('jaw_music');
let bobAudio6 = document.getElementById ('fall_music');
let bobAudio7 = document.getElementById ('tickling_music');

const audioArray = [];

audioArray.push (bobAudio0);

let reactionLegLeft = document.getElementById ('left_leg');
let reactionLegRight = document.getElementById ('right_leg');
let reactionHandLeft = document.getElementById ('left_hand');
let reactionHandRight = document.getElementById ('right_hand');
let reactionEyesLeft = document.getElementById ('left_eyes');
let reactionEyesRight = document.getElementById ('right_eyes');
let reactionBelly = document.getElementById ('belly');
let reactionJaw = document.getElementById ('jaw');

const counters = {

  countYawn: 0,
  countFall: 0

};

function RenderObject (image, frequencyFrame) {

  this.image = image;
  this.countFrame = 0;
  this.countEnd = 1;
  this.frequencyFrame = frequencyFrame;
  this.lastFrame = 13500;
  this.repeatSprite = frequencyFrame*20 +1;
  this.frameWidth = 700;
  
};

const blinkingRenderObject = new RenderObject (blinking, 1);
const yawningRenderObject = new RenderObject (yawning, 4);
const leftLegRenderObject = new RenderObject (leftLeg, 3);
const rightLegRenderObject = new RenderObject (rightLeg, 3);
const leftEyeRenderObject = new RenderObject (leftEyes, 2);
const rightEyeRenderObject = new RenderObject (rightEyes, 2);
const leftHandRenderObject = new RenderObject (leftHand, 3);
const rightHandRenderObject = new RenderObject (rightHand, 3);
const bellyRenderObject = new RenderObject (bellyImage, 2);
const jawRenderObject = new RenderObject (jawImage, 2);
const fallRenderObject = new RenderObject (fallImage, 5);
const ticklingRenderObject = new RenderObject (ticklingImage, 3);

setInterval (() => {
  allGame(blinkingRenderObject);
},5000);

setInterval (() => {
  counters.countYawn += 1;
  if (counters.countYawn === 21) {
    allGame(yawningRenderObject);
    bobAudio0.play();
    counters.countYawn = 0;
  }
},1000);

function allGame (renderObject) {
  if (renderObject.countEnd < renderObject.repeatSprite) {
  ctx.clearRect(0, 0, widthCtx, heightCtx);
  draw(renderObject);
  renderObject.countEnd += 1;
  requestAnimationFrame(() => {allGame(renderObject)});
} else {
  ctx.clearRect(0, 0, widthCtx, heightCtx);
  ctx.drawImage(blinking, 0, 0, 700, 600, 200, 130, 500, 500);
  renderObject.countEnd = 1;
}
};

function draw (renderObject) {
ctx.drawImage(renderObject.image, renderObject.countFrame, 0, 700, 600, 200, 130, 500, 500);
if (!(renderObject.countEnd % renderObject.frequencyFrame)) {
  renderObject.countFrame += renderObject.frameWidth;
};
if (renderObject.countFrame > renderObject.lastFrame) {
  renderObject.countFrame = 0;
};
};

function fallCounter () {
  counters.countFall += 1;
  if (counters.countFall === 5) {
    setTimeout (() => {allGame(fallRenderObject);}, 500);
    counters.countFall = 0;
    bobAudio6.play();
  };
  if (counters.countFall === 1) {
    setTimeout (() => {counters.countFall = 0;}, 3000);
  };
};

reactionLegLeft.addEventListener ('click', () => {
  allGame(leftLegRenderObject);
  fallCounter();
  bobAudio1.play();
  counters.countYawn = 0;
});

reactionLegRight.addEventListener ('click', () => {
  allGame(rightLegRenderObject);
  fallCounter();
  bobAudio1.play();
  counters.countYawn = 0;
});

reactionEyesLeft.addEventListener ('click', () => {
  allGame(leftEyeRenderObject);
  fallCounter();
  bobAudio2.play();
  counters.countYawn = 0;
});

reactionEyesRight.addEventListener ('click', () => {
  allGame(rightEyeRenderObject);
  fallCounter();
  bobAudio2.play();
  counters.countYawn = 0;
});

reactionHandLeft.addEventListener ('click', () => {
  allGame(leftHandRenderObject);
  fallCounter();
  bobAudio3.play();
  counters.countYawn = 0;
});

reactionHandRight.addEventListener ('click', () => {
  allGame(rightHandRenderObject);
  fallCounter();
  bobAudio3.play();
  counters.countYawn = 0;
});

reactionBelly.addEventListener ('click', () => {
  allGame(bellyRenderObject);
  fallCounter();
  bobAudio4.play();
  counters.countYawn = 0;
});

reactionJaw.addEventListener ('click', () => {
  allGame(jawRenderObject);
  fallCounter(); 
  bobAudio5.play();
  counters.countYawn = 0;
});

export {audioArray};