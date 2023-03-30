export const canvas = document.createElement('canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
ctx.globalCompositeOperation = "destination-over";
ctx.fillStyle = 'red';

canvas.width = 1300;
canvas.height = 650;
