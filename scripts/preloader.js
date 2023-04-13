'use strict';

window.addEventListener("load", function () {
    setTimeout(function () {
        let preloader = document.getElementById('preloader');
            preloader.classList.add('done');
            preloader.style.display = 'none';
    }, 3000); 
  });
  