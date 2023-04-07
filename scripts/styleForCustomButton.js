'use strict';

/*market-button button img {
            position: absolute;
            width: 60px;
            height: 40px;
            left: 400px;
            top: 10px;
        }
}*/

export default class List extends HTMLElement {

    constructor () {

        super ();

        this.button = this.htmlButton();
        this.img = this.htmlImg();
        this.path = "../img/marketIcon.png";

    }

    connectedCallback () {
        this.append (this.button);
        this.img.setAttribute ('src',this.path);
        this.button.append (this.img);
    }

    htmlImg () {

        const img = document.createElement ('img');
        return img

    }

    htmlButton () {

        const button = document.createElement ('button');
        return button

    }

    static initStyles () {
        const style = document.createElement ('style');
        style.textContent = `
        market-button button {
            width: 60px;
            height: 60px;
            color: beige;
            background-color: #6495ed99;
            border: beige solid 2px;
            border-radius: 50%;
        }
        
        `;
        document.head.append(style);        
    }

}

List.initStyles();