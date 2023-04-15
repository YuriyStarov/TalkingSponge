/**
A class representing a room.
@class
@default
@exports Room
*/
export default class Room {
  /**
Create a room.
@constructor
@param {Object} options - The options object.
@param {string} options.id - The id of the room.
@param {Array} options.items - The items in the room.
@param {string} options.tagName - The tag name of the room element.
*/
  constructor({ id, items = [], tagName = '', roomTypeItems = [] } = {}) {
    this.subElements = null;
    this.id = id;
    this.name = `Room_${id}`;
    this.items = items;
    this.tagName = tagName;
    this.roomTypeItems = roomTypeItems;
    this.roomDiv = document.getElementById(this.tagName);
    this.addToRoom();
  }
  /**
  
  Render the room with its items.
  @function
  @param {HTMLElement[]}  
  @returns {HTMLElement} The room element with Items inside.
  @example
  // Combine an array of HTMLElements into a single parent div.
   *
 * // Result:
 * // One item/
 * //<div id="bedRoom" data-room="bedRoom" class="bedRoom">
 * // <div class="item bedRoom" data-element="slippers" id="slippers" style="position: absolute; left: 700px; top: 400px;">
 * //   <img src="img/bedRoom/slippers/slippers_1.png">
 * //  <div></div>
 * // </div>
 * //</div>
*/
  render() {
    this.items.forEach((item) => {
      item.itemDiv.remove()
      const itemDiv = item.render();
      this.roomDiv.appendChild(itemDiv);
    });
    this.getSubElements();
    return this.roomDiv;
  }
  /**
  
  Adds the room to the items.
  @function
  @param {Item} 
  * // iterates over an array of Item objects, adds each field to the Room, and assigns the corresponding values to it
  */
  addToRoom() {
    this.items.forEach(item => {
      item.room = this;
    })
  }

  /**
  
  Updates the room render.
  @function
  * // Runs the render method replaces all child elements that are in the {this.roomDiv} with the result of the {this,render()} function
  */

  updateRender() {
    this.roomDiv.replaceWith(this.render());
  }


  /**
  Gets the sub-elements of the room.
  @function
  */
  getSubElements() {
    const result = {};
    const elements = this.roomDiv.querySelectorAll("[data-element]");
    [...elements].map(element => {
      result[element.dataset.element] = element;
    });
    this.subElements = result;

  }

  /**
  Closes the room.
  @function
  @param {HTMLElement}
  * // Checks for the presence of individual properties and behavior for Item`s if they are present, 
  * // run the appropriate behavior 
  * // then clears the parent element from the children
  * @example 
  * // Individual properties and behavior
  * // if (item.eventListeners) {
  * //   item.turnOfLight()
  * //  }
  * @example
  * // Clears the parent element from the children
  * // if (item.itemDiv) {
  * //   this.roomDiv.innerHTML = '';
  * // }
  */

  close() {
    this.items.forEach((item) => {
      if (item.eventListeners) {
        item.turnOfLight()
      }
      if (item.itemDiv) {
        this.roomDiv.innerHTML = '';
      }
    });

  }
}
