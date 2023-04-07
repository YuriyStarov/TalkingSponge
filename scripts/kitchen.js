'use srtict';

import { allGame, RenderObject } from "./rendering.js";

const wrapperKitchen = document.querySelector('#kitchen');

let eatHot = new Image(14000,600);
eatHot.src = "../img/eatHot.png";

let eatElixir = new Image(14000,600);
eatElixir.src = "../img/eatElixir.png";

let eatBurger = new Image(14000,600);
eatBurger.src = "../img/giveMeBurger.png";

let eatSugar = new Image(14000,600);
eatSugar.src = "../img/eatSugar.png";

let noEat = new Image(14000,600);
noEat.src = "../img/noEat.png";

const renderingEatHot = new RenderObject (eatHot, 8, 20, 700, 600, 200, 130, 500, 500);
const renderingEatElixir = new RenderObject (eatElixir, 8, 20, 700, 600, 200, 130, 500, 500);
const renderingEatSugar = new RenderObject (eatSugar, 8, 20, 700, 600, 200, 130, 500, 500);
const renderingEatBurger = new RenderObject (eatBurger, 8, 20, 700, 600, 200, 130, 500, 500);
const renderingNoEat = new RenderObject (noEat, 8, 20, 700, 600, 200, 130, 500, 500);


export function kitchenStart() {
let progress = document.querySelector('#progress');

wrapperKitchen.hoverCursor = 'pointer';

const canvas = new fabric.Canvas('c', { 
  width: 1000,
  height: 700,
  preserveObjectStacking: true,
  hoverCursor: 'pointer'
});

let foods = [{img: "./img/eat/apple.png", energy: 10, type: "sugar"}, {img:"./img/eat/burger.png", energy: 45, type: "hot"}, {img:"./img/eat/cake_1.png", energy: 20, type: "sugar"}, {img:"./img/eat/cake_2.png", energy: 20, type: "sugar"}, {img:"./img/eat/choko.png", energy: 15, type: "sugar"}, {img:"./img/eat/coffee.png", energy: 5, type: "hot"}, {img:"./img/eat/cola.png", energy: 15, type: "sugar"}, {img:"./img/eat/elixir_eat.png", energy: 50, type: "elixir"}, {img:"./img/eat/elixir_energy.png", energy: 50, type: "elixir"}, {img:"./img/eat/elixir_funny.png", energy: 50, type: "elixir"}, {img:"./img/eat/milk.png", energy: 10, type: "sugar"}, {img:"./img/eat/pizza.png", energy: 35, type: "hot"}, {img:"./img/eat/potatoes.png", energy: 25, type: "hot"}, {img:"./img/eat/soup.png", energy: 20, type: "hot"}];

let j = 400;
let g = 520;
let k = 550;
let q = 500;

// foods.map(food => addToCanvas(food))

let width = 70;
let height = 50;
let spacing = 75;

let hungryPoint = 0

let capacityEnergy = 0;
changeProggress();

setInterval (() => {
  if(wrapperKitchen.style.display === "block" && capacityEnergy < 60){
    hungryPoint += 1;
    if (hungryPoint === 10) {
      allGame(renderingEatBurger);
      hungryPoint = 0;
    }
  }
},1000);


setInterval(() => {
  if(capacityEnergy > 0){
    capacityEnergy -= 1;
    changeProggress();
  }
}, 5000);

// let tableImg  = document.createElement('img');
// tableImg.src = '/img/eat/table3.jpg';
// const table = new fabric.Image(tableImg, {
//     left: -26.4,
//     top: 453,
//     selectable: false,
//     hasControls: false,
//     hasBorders: false,
//     originX: 'left',
//     originY: 'top',
// });

// addBob();
  
// Foods
let addFoods = () => {
  let x = 460;
  let y = 430;
  for (let i = 0; i < 3; i++) {
    let food = foods[i];
    fabric.Image.fromURL(food.img, (img) => {
      img.left = x;
      img.top = y;
      img.selectable = true;
      img.hasControls = false;
      img.hasBorders = false;
      let foodLeft = img.left;
      let foodTop = img.top;
      img.on('mouseup', function() {
        // canvas.setActiveObject(img);
        if((img.left >= 270 && img.left <= 540 && img.top >= 105 && img.top <= 435 && capacityEnergy < 100 && capacityEnergy+food.energy <= 100 ) || food.type === "elixir"){
          console.log("I am eat this food")
          switch(food.type){
            case "hot":
              allGame(renderingEatHot)
            break;
            case "elixir":
              allGame(renderingEatElixir)
            break;
            case "sugar":
              allGame(renderingEatSugar)
            break;
          }
          capacityEnergy+food.energy > 100 ? capacityEnergy = 100 : capacityEnergy += food.energy;
          changeProggress();
          canvas.remove(img);
          foods.splice(i, 1);
          renderFoods();
        } else{
          console.log("I am not eat this food")
          allGame(renderingNoEat)
          img.animate('left', foodLeft, {
            duration: 500,
            onChange: canvas.renderAll.bind(canvas),
          });
          img.animate('top', foodTop, {
            duration: 500,
            onChange: canvas.renderAll.bind(canvas),
          });
        }
      });
      canvas.add(img);
      x += spacing;
    });
  }
}

addFoods();

// Arrows
let imgRightArrow  = document.createElement('img');
imgRightArrow.src = '/img/eat/arrRight.png';

const rightArrow = new fabric.Image(imgRightArrow, {
  left: j,
  top: g,
  width: 50,
  height: 60,
  selectable: false,
  hasControls: false,
  hasBorders: false,
});

let imgLeftArrow  = document.createElement('img');
imgLeftArrow.src = '/img/eat/arrLeft.png';

const leftArrow = new fabric.Image(imgLeftArrow, {
  left: j + 300,
  top: g,
  width: 50,
  height: 60,
  selectable: false,
  hasControls: false,
  hasBorders: false,
});

setTimeout(addArrow, 200);

// Functions add
// function addBob() {
//   // canvas.add(sprite1);
//   canvas.add(table);
// }

function addArrow (){
  canvas.add(rightArrow);
  canvas.add(leftArrow);
}

function changeProggress(){
  progress.innerHTML = capacityEnergy;
  document.documentElement.style.setProperty('--height', (capacityEnergy * 0.6) + 'px')
}

//Events
 rightArrow.on('mousedown', function() {
  foods.push(foods.shift());
  renderFoods();
  console.log(foods);
});
  
leftArrow.on('mousedown', function() {
  foods.unshift(foods.pop());
  renderFoods();
});

// Render
function renderFoods() {
  canvas.clear();
  addFoods();
  addArrow();
}

}







