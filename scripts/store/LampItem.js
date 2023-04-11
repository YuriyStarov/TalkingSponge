import Item from "./Item.js";
import { sleepTimer, goToSleep, wakeUp } from "../bobSleep.js";

export default class LampItem extends Item {
    constructor(id, name, basePrice, position, versions, eventListener) {
        super(id, name, basePrice, position, versions, eventListener);
        this.state = 1;
        this.maskForSleep = document.getElementById('maskForSleep');
        this.initEventListener();
        this.toggleLight();
    }
    init = () => {
        this.initEventListener()
    }
    turnOfLight = () => {
        if (this.itemLampTogle.classList.contains('on')) {
            this.itemLampTogle.classList.remove('on');
            document.body.classList.remove('light-on');
            this.state = 0;
        }
    }

    toggleLight = () => {
        // Вместо заднего фона  .jpg необходимо использовать SVG и добавить анимации для затемнения
        if (this.itemLampTogle.classList.contains('on')) {
            this.itemLampTogle.classList.remove('on');
            this.maskForSleep.style.display = 'block';
            this.state = 0;
            goToSleep()
            // document.body.classList.remove('light-on');
        } else {
            this.itemLampTogle.classList.add('on');
            this.maskForSleep.style.display = 'none';
            // this.state = 1;
            if (!this.state) {
                wakeUp();
            }
            // document.body.classList.add('light-on');
        }
    }
    initEventListener() {
        this.itemLampTogle.classList.add(this.name)
        this.itemLampTogle.addEventListener('click', this.toggleLight)
    }
}