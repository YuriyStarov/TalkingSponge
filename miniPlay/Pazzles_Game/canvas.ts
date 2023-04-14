export const canvasPuzzles = document.createElement('canvas') as HTMLCanvasElement;
export const ctx = canvasPuzzles.getContext('2d') as CanvasRenderingContext2D;
ctx.globalCompositeOperation = "destination-over";
ctx.fillStyle = 'red';

canvasPuzzles.width = 1000;
canvasPuzzles.height = 650;
canvasPuzzles.style.background = 'cornflowerblue';
