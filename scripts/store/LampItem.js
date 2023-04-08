import Item from "./Item.js";

export default class LampItem extends Item {
    constructor(id, name, basePrice, position, versions, eventListener) {
        super(id, name, basePrice, position, versions, eventListener);
        this.maskForSleep = document.getElementById('maskForSleep');
        this.initEventListener();
        this.toggleLight();
    }
    init = () => {
        this.initEventListener()
    }
    turnOfLight = () => {
        if (this.itemDiv.classList.contains('on')) {
            this.itemDiv.classList.remove('on');
            document.body.classList.remove('light-on');
        }
    }

    toggleLight = () => {
        // Вместо заднего фона  .jpg необходимо использовать SVG и добавить анимации для затемнения
        var lamp = document.querySelector('.lamp');
        if (this.itemDiv.classList.contains('on')) {
            this.itemDiv.classList.remove('on');
            this.maskForSleep.style.display = 'block';
            // document.body.classList.remove('light-on');
        } else {
            this.itemDiv.classList.add('on');
            this.maskForSleep.style.display = 'none';
            // document.body.classList.add('light-on');
        }
    }
    initEventListener() {
        this.itemDiv.classList.add(this.name)
        this.itemDiv.addEventListener('click', this.toggleLight)
    }
}