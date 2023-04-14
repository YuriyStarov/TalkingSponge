'use strict';

import { collectionBonuses, countCoins, countCrystal } from "./collectionAchievements.js";


const wrapper = document.querySelector('#canvas-container');

wrapper.hoverCursor = 'pointer';


const canvas = new fabric.Canvas('s', { 
    width: 1000,
    height: 700,
    preserveObjectStacking: true,
});

let cartMoney = {
  totalCrystals: 0,
  totalCoins: 0,
};

let newFood = [];

const cartImage = new fabric.Image(document.getElementById('cart'), {
  left: 50,
  top: 380,
  selectable: false,
  hoverCursor: 'default',
  hasControls: false,
  hasBorders: false,
  lockMovementX: true,
  lockMovementY: true,
  lockRotation: true,
  lockScalingX: true,
  lockScalingY: true,
  opacity: 1,
  zIndex: 1,
});

const cartHeader = new fabric.Text('Cart: 0 coins, 0 crystals', {
  left: 50,
  top: 360,
  fontFamily: 'Helvetica',
  fontSize: 20,
  fill: '#333',
  selectable: false,
  hasControls: false,
  hasBorders: false,
});

export function startCart(){
  const objects = canvas.getObjects();

  objects.forEach(function(object) {
    if (object.left >= 22 && object.top >= 355 && object.left <= 220 && object.top <= 505) {
      canvas.remove(object);
    }
  });


  canvas.add(cartImage);  

  canvas.bringToFront(cartImage);
  
  canvas.add(cartHeader);


  cartMoney = {
    totalCrystals: 0,
    totalCoins: 0,
  };
  
  newFood=[];

  updateCartTotalPrice(cartMoney);
}

let ShopFoods = [
  {img: "./img/eat/apple.png", price: 2, valute: "crystals", top: 78, left: 320, energyType: "food", energy: 10, type: "sugar"}, 
  {img: "./img/eat/burger.png", price: 5, valute: "coins", top: 88, left: 450, energyType: "food", energy: 20, type: "hot"}, 
  {img: "./img/eat/cake_1.png", price: 4, valute: "crystals", top: 85, left: 600, energyType: "food", energy: 30, type: "sugar"}, 
  {img: "./img/eat/cake_2.png", price: 3, valute: "crystals", top: 205, left: 320, energyType: "food", energy: 30, type: "sugar"}, 
  {img: "./img/eat/choko.png", price: 0, valute: "coins", top: 205, left: 450, energyType: "food", energy: 10, type: "sugar"}, 
  {img: "./img/eat/coffee.png", price: 2, valute: "crystals", top: 208, left: 600, energyType: "food", energy: 10, type: "hot"}, 
  {img: "./img/eat/cola.png", price: 2, valute: "coins", top: 325, left: 320, energyType: "food", energy: 10, type: "sugar"}, 
  {img: "./img/eat/elixir_eat.png", price: 7, valute: "crystals", top: 330, left: 410, energyType: "food", energy: 100, type: "elixir"}, 
  {img: "./img/eat/elixir_energy.png", price: 7, valute: "crystals", top: 330, left: 520, energyType: "energy", energy: 100, type: "elixir"}, 
  {img: "./img/eat/elixir_funny.png", price: 7, valute: "crystals", top: 330, left: 620, energyType: "funny", energy: 100, type: "elixir"}, 
  {img: "./img/eat/milk.png", price: 0, valute: "coins", top: 445, left: 320, energyType: "food", energy: 20, type: "sugar"}, 
  {img: "./img/eat/pizza.png", price: 7, valute: "coins", top: 445, left: 410, energyType: "food", energy: 40, type: "hot"}, 
  {img: "./img/eat/potatoes.png", price: 5, valute: "coins", top: 448, left: 520, energyType: "food", energy: 30, type: "hot"}, 
  {img: "./img/eat/soup.png", price: 8, valute: "coins", top: 450, left: 620, energyType: "food", energy: 20, type: "hot"}
];

// Створення об'єкт кошика

ShopFoods.forEach(elem => {
  fabric.Image.fromURL(elem.img, (img) => {
    img.top = elem.top;
    img.left = elem.left;
    img.selectable = true;
    img.hasControls = false;
    img.hasBorders = false;
    let foodLeft = img.left;
    let foodTop = img.top;
    img.on('mouseup', function(){
      if(img.left >= 22 && img.left <= 220 && img.top >= 355 && img.top <= 505){
        
        switch (elem.valute) {
          case 'coins':
            if(collectionBonuses.coins - elem.price >=0){
              collectionBonuses.coins -= elem.price;
              cartMoney.totalCoins += elem.price;
              countCoins.textContent = collectionBonuses.coins;
              collectionBonuses.foods.push({img: elem.img, energyType: elem.energyType, energy: elem.energy, type: elem.type});
              newFood.push({img: elem.img});
            }
            break;
          case 'crystals':
            if(collectionBonuses.crystal - elem.price >=0){
              collectionBonuses.crystal -= elem.price;
              cartMoney.totalCrystals += elem.price;
              countCrystal.textContent = collectionBonuses.crystal;
              collectionBonuses.foods.push({img: elem.img, energyType: elem.energyType, energy: elem.energy, type: elem.type});
              newFood.push({img: elem.img});
            }
            break;
        }
        updateCartTotalPrice(cartMoney);
        renderInCart();
      }
      img.animate('left', foodLeft, {
        duration: 500,
        onChange: canvas.renderAll.bind(canvas),
      });
      img.animate('top', foodTop, {
        duration: 500,
        onChange: canvas.renderAll.bind(canvas),
      });
    })
    canvas.add(img);
  });

});



function renderInCart(){
  let newFoodLeft = 0;
  let newFoodCheker = 0;
  newFood.forEach(elem => {
    newFoodCheker++;
    if (newFoodCheker % 6 === 0) {
      newFoodLeft = 0;
    }else {
      newFoodLeft += 20;
    }
    fabric.Image.fromURL(elem.img, (img) => {
      img.top = 450;
      img.left = 60 + newFoodLeft;
      img.selectable = false;
      img.hasControls = false;
      img.hasBorders = false;
      canvas.add(img);
  
    });
  
  });
  setTimeout (() => {
    canvas.bringToFront(cartImage);
  }, 100); 
}

export function discardInCart(){
  newFood.forEach(elem => {
    fabric.Image.fromURL(elem.img, (img) => {
      canvas.remove(img);
    });
  
  });
}

  const applePriceText = new fabric.Text('2 crystals', {
    left: 320,
    top: 150,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(applePriceText);

  const burgerPriceText = new fabric.Text('5 coins', {
    left: 460,
    top: 150,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(burgerPriceText);

  const cake1PriceText = new fabric.Text('4 crystals', {
    left: 600,
    top: 150,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(cake1PriceText);

  const cake2PriceText = new fabric.Text('3 crystals', {
    left: 320,
    top: 270,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(cake2PriceText);


  const chokoPriceText = new fabric.Text('free', {
    left: 470,
    top: 270,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(chokoPriceText);

  const coffePriceText = new fabric.Text('2 crystals', {
    left: 600,
    top: 270,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(coffePriceText);

  const colaPriceText = new fabric.Text('2 coins', {
    left: 320,
    top: 395,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(colaPriceText);

  const elixirEatPriceText = new fabric.Text('7 crystals', {
    left: 410,
    top: 395,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(elixirEatPriceText);

  const elixirEnergyPriceText = new fabric.Text('7 crystals', {
    left: 520,
    top: 395,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(elixirEnergyPriceText);
  

  const elixirFunnyPriceText = new fabric.Text('7 crystals', {
    left: 620,
    top: 395,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(elixirFunnyPriceText);

  const milkPriceText = new fabric.Text('free', {
    left: 335,
    top: 515,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(milkPriceText);

  const pizzaPriceText = new fabric.Text('7 coins', {
    left: 410,
    top: 515,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(pizzaPriceText);

  const potatoesPriceText = new fabric.Text('5 coins', {
    left: 520,
    top: 515,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(potatoesPriceText);

  const soupPriceText = new fabric.Text('8 coins', {
    left: 625,
    top: 515,
    fontSize: 16,
    fill: 'white',
    selectable: false,
    hasControls: false,
    hasBorders: false,
  });
  canvas.add(soupPriceText);


function updateCartTotalPrice(cartMoney) {
  cartHeader.set({
    text: `Cart: ${cartMoney.totalCoins} coins, ${cartMoney.totalCrystals} crystals`
  });
  canvas.renderAll();
}





