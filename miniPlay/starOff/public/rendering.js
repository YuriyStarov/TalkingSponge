const hearts = document.getElementById('life');
const counter = document.getElementById('countBurgers');
const bonus = document.getElementById('bonus');
const crystalBonus = document.getElementById('crystalBonus');
const gameEnd = [true];
let imageElements = [];
let collectionBurgers = [];
const playBob = [];
const playPatrick = [];
let bobPosition = [400];
let intervals = [];
let gameStatistic = [];
let allAudio = [];
let buttons = [];
const startGame = document.getElementById('startGame');
buttons.push(startGame);
const restartGame = document.getElementById('restartGame');
buttons.push(restartGame);
const backToMiniGameMenu = document.getElementById('backToMiniGameMenu');
buttons.push(backToMiniGameMenu);
setTimeout(() => { startGame.style.display = 'block'; backToMiniGameMenu.style.display = 'block';}, 2500);
const mainMusic = document.getElementById('funny_music');
const gameOver = document.getElementById('the_end');
const goodEat = document.getElementById('good_eat');
allAudio.push(goodEat);
const bedEat = document.getElementById('bed_eat');
allAudio.push(bedEat);
const newBun = document.getElementById('bun');
allAudio.push(newBun);
const minusLife = document.getElementById('life_minus');
allAudio.push(minusLife);
let canvasBurger = document.getElementById('canvasBurger');
let ctx = canvasBurger.getContext("2d");
let widthCtx = canvasBurger.width;
let heightCtx = canvasBurger.height;
function allRender() {
    if (gameEnd[0]) {
        ctx.clearRect(0, 0, widthCtx, heightCtx);
        playPatrick[0].draw();
        playBob[0].xNew(bobPosition[0]);
        playBob[0].draw();
        collectionBurgers.forEach((element) => {
            element.path();
            element.draw();
        });
        gameStatistic[0].eatAndDead();
        requestAnimationFrame(allRender);
    }
    else {
        ctx.clearRect(0, 0, widthCtx, heightCtx);
        mainMusic.pause();
        gameOver.play();
        hearts.textContent = 'GAME OVER!';
        const numBurger = Number(counter.textContent);
        const numBonus = Math.floor(numBurger / 5);
        bonus.textContent = '+ ' + String(numBonus);
        crystalBonus.style.display = 'block';
        buttons[1].style.display = 'block';
        buttons[2].style.display = 'block';
    }
    ;
}
;
buttons[0].addEventListener('click', () => {
    mainMusic.play();
    buttons[0].style.display = 'none';
    buttons[2].style.display = 'none';
    allRender();
});
buttons[1].addEventListener('click', () => {
    gameEnd[0] = true;
    collectionBurgers = [];
    crystalBonus.style.display = 'none';
    bonus.textContent = '';
    bobPosition[0] = 400;
    hearts.textContent = '❤❤❤';
    counter.textContent = '0';
    gameStatistic[0].countBurgers = 0;
    buttons[1].style.display = 'none';
    buttons[2].style.display = 'none';
    mainMusic.play();
    allRender();
});
export { ctx, collectionBurgers, playBob, bobPosition, playPatrick, hearts, counter, intervals, gameStatistic, gameEnd, allAudio, buttons, imageElements };
