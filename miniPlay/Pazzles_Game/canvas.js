export const canvasPuzzles = document.createElement('canvas');
export const ctx = canvasPuzzles.getContext('2d');
ctx.globalCompositeOperation = "destination-over";
ctx.fillStyle = 'red';
canvasPuzzles.width = 1000;
canvasPuzzles.height = 650;
