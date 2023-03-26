const hearts = <HTMLDivElement>document.getElementById ('life');
const counter = <HTMLDivElement>document.getElementById ('countBurgers');
const bonus = <HTMLDivElement>document.getElementById ('bonus');
const crystalBonus = <HTMLImageElement>document.getElementById ('crystalBonus');

const gameEnd: [boolean] = [true];
let imageElements: any = [];
let collectionBurgers:any = [];
const playBob:any = [];
const playPatrick: any = [];
let bobPosition: [number] = [400];
let intervals: any = [];
let gameStatistic: any = [];
let allAudio: any = [];
let buttons: any = [];

const startGame = document.getElementById ('startGame');
buttons.push(startGame);
setTimeout (() => {startGame!.style.display = 'block';}, 2500);
const restartGame = document.getElementById ('restartGame');
buttons.push(restartGame);

const mainMusic = <HTMLAudioElement>document.getElementById ('funny_music');
const gameOver = <HTMLAudioElement>document.getElementById ('the_end');

/*const audioPromise = new Promise ((resolve) => {
    document.addEventListener ('keydown', () => {resolve(true)});
});
audioPromise.then(() => {mainMusic.play();});*/

const goodEat = <HTMLAudioElement>document.getElementById ('good_eat');
allAudio.push (goodEat);
const bedEat = <HTMLAudioElement>document.getElementById ('bed_eat');
allAudio.push (bedEat);
const newBun = <HTMLAudioElement>document.getElementById ('bun');
allAudio.push (newBun);
const minusLife = <HTMLAudioElement>document.getElementById ('life_minus');
allAudio.push (minusLife);

let canvas = <HTMLCanvasElement>document.getElementById ('canvas');

let ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
let widthCtx: number = canvas.width;
let heightCtx: number = canvas.height;

function allRender () {
    if (gameEnd[0]) {
        ctx.clearRect(0, 0, widthCtx, heightCtx);
        playPatrick[0].draw();
        playBob[0].xNew(bobPosition[0]);
        playBob[0].draw();
        collectionBurgers.forEach((element: any) => {
            element.path();
            element.draw();
        });
        gameStatistic[0].eatAndDead();
        requestAnimationFrame (allRender)
    }
    else {
        ctx.clearRect(0, 0, widthCtx, heightCtx);
        mainMusic.pause();
        gameOver.play();
        hearts.textContent = 'GAME OVER!';
        const numBurger: number = Number (counter.textContent);
        const numBonus: number = Math.floor (numBurger/5);
        bonus.textContent = '+ ' + String (numBonus);
        crystalBonus.style.display = 'block';
        buttons[1].style.display = 'block';
    };
};

buttons[0].addEventListener ('click',() => {
    mainMusic.play();
    buttons[0].style.display = 'none';
    allRender();
    /*const startPromise0 = new Promise ((resolve) => {
        imageElements[0].addEventListener ('load', () => {resolve(imageElements[0])})
    });
    const startPromise1 = new Promise ((resolve) => {
        imageElements[1].addEventListener ('load', () => {resolve(imageElements[1])})
    });
    const startPromise2 = new Promise ((resolve) => {
        imageElements[2].addEventListener ('load', () => {resolve(imageElements[2])})
    });
    const startPromise3 = new Promise ((resolve) => {
        imageElements[3].addEventListener ('load', () => {resolve(imageElements[3])})
    });
    Promise.all ([startPromise0, startPromise1, startPromise2, startPromise3]).then(() => {console.log ('dddd'); allRender()});*/
    //startPromise.then(() => {allRender();});
    /*sponge.addEventListener(
    "load",
    ctx.drawImage(sponge, 0, 0, 360, 360, 0, 0, 600, 600),//4200, 0, 600, 600, 200, 0, 600, 600),
    false
  );*/
    //imageElements[3].addEventListener ('load', allRender)
})

buttons[1].addEventListener ('click',() => {
    gameEnd[0] = true;
    collectionBurgers = [];
    crystalBonus.style.display = 'none';
    bonus.textContent = '';
    bobPosition[0] = 400;
    hearts.textContent = '❤❤❤';
    counter.textContent = '0';
    gameStatistic[0].countBurgers = 0;
    buttons[1].style.display = 'none';
    mainMusic.play();
    allRender();
})

export { ctx, collectionBurgers, playBob, bobPosition, playPatrick, hearts, counter, intervals, gameStatistic, gameEnd, allAudio, buttons, imageElements };




