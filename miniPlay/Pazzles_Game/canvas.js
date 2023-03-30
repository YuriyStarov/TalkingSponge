export const canvas = document.createElement('canvas');
export const ctx = canvas.getContext('2d');
ctx.globalCompositeOperation = "destination-over";
ctx.fillStyle = 'red';
canvas.width = 1300;
canvas.height = 650;
