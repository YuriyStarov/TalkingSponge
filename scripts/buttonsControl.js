
const backToPlayroom = document.getElementById ('backToPlayroom');
const toMiniGame = document.getElementById ('toMiniGame');
const toBurgerGame = document.getElementById ('krubsBurgerGame');
const snakeGame = document.getElementById ('snakeGame')
const mainGrand = document.getElementById ('mainGrand');
const gameMenu = document.getElementById ('gameMenu');
const iframeGame1 = document.getElementById ('iframeGame1');
const iframeGame2 = document.getElementById ('iframeGame2');
const volume1 = document.getElementById ('gift_music');
const volume2 = document.getElementById ('yawn_music');
const giftReaction = document.getElementById ('giftReaction');
const pageOfFortune = document.getElementById ('pageOfFortune');
const backToPlay = document.getElementById ('backToPlay');
const backToMiniGameMenu = document.getElementById('backToMiniGameMenu');

toMiniGame.addEventListener ('click', () => {
    volume1.volume = 0;
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    gameMenu.style.display = 'block';
});

giftReaction.addEventListener ('click', () => {
    volume1.volume = 0;
    volume2.volume = 0;
    mainGrand.style.display = 'none';
    pageOfFortune.style.display = 'block';
});

toBurgerGame.addEventListener ('click', () => {
    gameMenu.style.display = 'none';
    iframeGame1.style.display = 'block';
});

snakeGame.addEventListener ('click', () => {
    gameMenu.style.display = 'none';
    iframeGame2.style.display = 'block';
});

backToPlayroom.addEventListener ('click', () => {
    volume1.volume = 1;
    volume2.volume = 1;
    gameMenu.style.display = 'none';
    mainGrand.style.display = 'block';
});

backToPlay.addEventListener ('click', () => {
    volume1.volume = 1;
    volume2.volume = 1;
    pageOfFortune.style.display = 'none';
    mainGrand.style.display = 'block';
});

backToMiniGameMenu.addEventListener ('click', () => {
    iframeGame1.style.display = 'none';
    gameMenu.style.display = 'block';
});


