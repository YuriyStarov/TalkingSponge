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
        if (this.itemLampTogle.classList.contains('on')) {
            this.itemLampTogle.classList.remove('on');
            this.maskForSleep.style.display = 'block';
            this.state = 0;
            goToSleep()
        } else {
            this.itemLampTogle.classList.add('on');
            this.maskForSleep.style.display = 'none';
            if (!this.state) {
                wakeUp();
            }
        }
    }
    initEventListener() {
        this.itemLampTogle.classList.add(this.name)
        this.itemLampTogle.addEventListener('click', this.toggleLight)
    }
}