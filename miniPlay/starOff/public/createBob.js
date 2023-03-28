import { ctx, playBob, imageElements } from "./rendering.js";
let bobImage = new Image(300, 315);
bobImage.src = "../miniPlay/starOff/img/spongeBurger.png";
imageElements.push(bobImage);
class Bob {
    xDisposition;
    yDisposition;
    xSize;
    ySize;
    constructor() {
        this.xDisposition = 200;
        this.yDisposition = 550;
        this.xSize = 300;
        this.ySize = 315;
    }
    draw() {
        ctx.drawImage(bobImage, this.xDisposition, this.yDisposition, this.xSize, this.ySize);
    }
    xNew(xChange) {
        this.xDisposition = xChange;
    }
}
;
function createNewBob() {
    const newBob = new Bob();
    playBob.push(newBob);
}
;
const goBob = setTimeout(createNewBob, 2000);
