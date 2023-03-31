import { canvasPuzzles, ctx } from "./canvas.js";
import { moveImg } from "./dragImg.js";
import { pieces, draw } from "./pices.js";
const desc = document.querySelector('.discription');
const btn = document.querySelector('.btn');
const bg = document.querySelector('.bgImg');
const wrapper = document.querySelector('.game');
moveImg();
function start() {
    desc === null || desc === void 0 ? void 0 : desc.remove();
    btn === null || btn === void 0 ? void 0 : btn.remove();
    bg === null || bg === void 0 ? void 0 : bg.remove();
    function resize() {
        canvasPuzzles.width = window.innerWidth;
        canvasPuzzles.height = window.innerHeight;
        loop();
    }
    window.onresize = resize;
    wrapper.appendChild(canvasPuzzles);
}
function loop() {
    let sum = 0;
    for (const piece of pieces) {
        if (piece.flag) {
            sum += 1;
            console.log(sum);
        }
    }
    if (sum !== pieces.length) {
        draw();
        window.requestAnimationFrame(loop);
    }
    else {
        ctx.clearRect(0, 0, 0, 0);
        const next = document.querySelector('.img_origin');
        next === null || next === void 0 ? void 0 : next.remove();
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
window.loop = loop;
window.start = start;
