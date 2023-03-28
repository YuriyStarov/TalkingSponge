import { ctx , playPatrick, imageElements } from "./rendering.js";

let patrickImage: HTMLImageElement = new Image(250 , 272);
patrickImage.src = "../miniPlay/starOff/img/star.png";
imageElements.push(patrickImage);

class Patrick {
    xDisposition: number;
    yDisposition: number;
    xSize: number;
    ySize: number;

    constructor () {
        this.xDisposition = 140;
        this.yDisposition = 220;
        this.xSize = 250;
        this.ySize = 272;
    }

    draw () {
        ctx.drawImage(patrickImage, this.xDisposition, this.yDisposition, this.xSize, this.ySize);
    }

    xToLeft () {
        if (this.xDisposition > 170) {
        this.xDisposition -= 110;
        };
    }

    xToRight () {
        if (this.xDisposition < 650) {
        this.xDisposition += 110;
        };
    }

};

function createNewPatrick () {
    const newPatrick = new Patrick();
    playPatrick.push (newPatrick);
};


const goPatrick = setTimeout (createNewPatrick, 1000);