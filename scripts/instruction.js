'use strict';


const closeButton = document.querySelector('#startAudioModule');
const instructionBlock = document.querySelector('#instruction');

let instructionsClosed = false;

closeButton.addEventListener('click', function() {
  instructionBlock.style.display = 'none';
  instructionsClosed = true;
});
