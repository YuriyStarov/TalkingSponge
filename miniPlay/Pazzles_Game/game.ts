import { canvasPuzzles, ctx } from "./canvas.js";

import { moveImg } from "./dragImg.js";

import { pieces,  draw } from "./pices.js";

const desc = document.querySelector('.discription') as HTMLDivElement | null;
const btn = document.querySelector('.btn') as HTMLButtonElement | null;
const bg = document.querySelector('.bgImg') as HTMLImageElement | null;
const wrapper = document.querySelector('.game') as HTMLDivElement;

moveImg();

function start(): void {
    desc?.remove();
    btn?.remove();
    bg?.remove();
    function resize() {
      canvasPuzzles.width = window.innerWidth;
      canvasPuzzles.height = window.innerHeight;
        loop();
    }
    window.onresize = resize;
    wrapper.appendChild(canvas);
}

function loop(): void{
  let sum: number = 0;
  for (const piece of pieces) {
    if(piece.flag){
      sum+=1;
      console.log(sum)
    }
  }
  if(sum !== pieces.length){
    draw();
    window.requestAnimationFrame(loop);
  }
  else{
    ctx.clearRect(0, 0, 0, 0);
    const next = document.querySelector('.img_origin') as HTMLDivElement | null;
    next?.remove();
    wrapper.innerHTML = '';
    let lastBlock = document.createElement('div');
          lastBlock.classList.add('last_block');
          let p = document.createElement('p');
          p.textContent = "YOU WON";
          lastBlock.appendChild(p);
          let span = document.createElement('span');
          span.textContent = 'GAME OVER';
          lastBlock.appendChild(span);
          wrapper.appendChild(lastBlock);
          let btnRestart = document.createElement('button');
          btnRestart.addEventListener('click', () => location.reload());
          wrapper.appendChild(btnRestart);
          btnRestart.textContent = 'Restart';
          btnRestart.setAttribute('class', 'btn_restart');
  }
}

  (window as any).loop = loop;
  (window as any).start = start;
