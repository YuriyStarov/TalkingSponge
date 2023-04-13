'use strict';

// import Store from "./Store.js";
// import Room from "./Room.js";
// import Item from "./Item.js";

import { collectionBonuses } from "./collectionAchievements.js";


const wrapper = document.querySelector('#canvas-containerInterior');

wrapper.hoverCursor = 'pointer';

// Створюємо канвас для магазину
const canvas = new fabric.Canvas('i', { 
    width: 1000,
    height: 700,
    preserveObjectStacking: true,
});

const tableImage = new fabric.Image(document.getElementById('table'), {
    left: 153,
    top: 433,
    selectable: false,
    hoverCursor: 'default',
    hasControls: false,
    hasBorders: false,
    // lockMovementX: true,
    // lockMovementY: true,
    // lockRotation: true,
    // lockScalingX: true,
    // lockScalingY: true,
    opacity: 1,
    zIndex: 99,
  });
  
  canvas.add(tableImage);  