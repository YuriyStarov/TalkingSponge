'use strict';

import { playPatrick } from "./rendering.js";

function playListener (event: any) {
    if (event.code === 'ArrowLeft') {
        playPatrick[0].xToLeft();
    };
    if (event.code === 'ArrowRight') {
        playPatrick[0].xToRight();
    };
};

document.addEventListener ("keydown", playListener);