import { Game } from "./Game.js";

// Get the canvas element from the DOM
const canvas = document.getElementById("canvas") as HTMLCanvasElement;

// Create a new instance of the Game class and start the game loop
export const snakeGameObj = new Game(canvas);
// game.loop();
