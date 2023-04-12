// Import the necessary modules and classes
const { Game } = require('./Game.js');
const { Snake } = require('./Snake.js');
const { Food } = require('./Food.js');

describe('Game', () => {
  describe('initEventListeners()', () => {
    let canvas, game;

    beforeEach(() => {
      // Create a new canvas element and append it to the DOM
      canvas = document.createElement('canvas');
      document.body.appendChild(canvas);

      // Create a new Game object
      game = new Game(canvas);
    });

    afterEach(() => {
      // Remove the canvas element from the DOM
      document.body.removeChild(canvas);
    });

    it('should set up keydown event listener', () => {
      const spy = jest.spyOn(game.snake, 'update');

      // Trigger the Space keydown event
      const spaceEvent = new KeyboardEvent('keydown', { code: 'Space' });
      canvas.dispatchEvent(spaceEvent);
      expect(game.isPaused).toBe(true);

      // Trigger the Escape keydown event
      const escapeEvent = new KeyboardEvent('keydown', { code: 'Escape' });
      canvas.dispatchEvent(escapeEvent);
      expect(game.isPaused).toBe(true);

      // Trigger the ArrowLeft keydown event
      const leftEvent = new KeyboardEvent('keydown', { code: 'ArrowLeft' });
      canvas.dispatchEvent(leftEvent);
      expect(spy).toHaveBeenCalledWith('left');

      // Trigger the ArrowRight keydown event
      const rightEvent = new KeyboardEvent('keydown', { code: 'ArrowRight' });
      canvas.dispatchEvent(rightEvent);
      expect(spy).toHaveBeenCalledWith('right');

      // Trigger the ArrowUp keydown event
      const upEvent = new KeyboardEvent('keydown', { code: 'ArrowUp' });
      canvas.dispatchEvent(upEvent);
      expect(spy).toHaveBeenCalledWith('up');

      // Trigger the ArrowDown keydown event
      const downEvent = new KeyboardEvent('keydown', { code: 'ArrowDown' });
      canvas.dispatchEvent(downEvent);
      expect(spy).toHaveBeenCalledWith('down');

      // Trigger the N keydown event when the game is over
      game.gameOver = true;
      const newGameEvent = new KeyboardEvent('keydown', { key: 'n' });
      canvas.dispatchEvent(newGameEvent);
      expect(game.gameOver).toBe(false);
      expect(game.score).toBe(0);
      expect(game.snake.collidesWithSelf).toBe(false);
    });
  });
});
