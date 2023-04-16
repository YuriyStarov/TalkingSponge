/**
  A class representing an item.
  @class
  @default
  @exports Item
*/
export default class Item {
  /**
Create an item.
  @constructor
  @param {number} id - The item ID.
  @param {string} name - The item name.
  @param {number} basePrice - The item base price.
  @param {Object} [position={ x: 0, y: 0 }] - The item position.
  @param {Array[]} [versions=[]] - The item versions.
  @param {boolean} [eventListeners=false] - Whether the item has event listeners.
*/
  constructor(id, name, basePrice, position, versions, eventListeners = false) {
    this.id = id;
    this.name = name;
    this.basePrice = basePrice;
    this.position = position || { x: 0, y: 0 };
    this.versions = versions || [];
    this.currentVersionIndex = 0;
    this.changeAppearance = false;
    this.itemDiv = document.createElement("div");
    this.itemLampTogle = document.createElement("div");
    this.eventListeners = eventListeners;
  }

/**
  Upgrades the item.
  @function
  * // after acquiring an enhancement, 
  * // updates the version and cost information
*/

  upgrade() {
    if (this.currentVersionIndex < this.versions.length - 1) {
      this.currentVersionIndex++;
      this.changeAppearance = true;
      this.basePrice *= 2;
    }
  }

/**
  Gets the current item version.
  @function
  @returns {Object} returns an object with a description 
  * // of all properties of version.
*/

  getCurrentVersion() {
    return this.versions[this.currentVersionIndex];
  }

/**
  Renders the item upgrade.
  @function 
  * // updates the appearance to the current version
*/

  renderUpgrade() {
    this.itemDiv.firstChild.src = this.getCurrentVersion().image;
  }

  /**
  Renders the item HTMLElement.
  @function
  @returns {HTMLElement} The rendered item.
*/

  render() {
    if (!this.itemDiv) {
      return;
    }
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTempate();
    this.itemDiv = wrapper.firstElementChild;
    this.itemDiv.append(this.itemLampTogle);
    return wrapper.firstElementChild;
  }

/**
  Gets the template for the item.
  @function
  @returns {string} The item template.
*/

  getTempate() {
    return `
    <div class="item ${this.room.tagName}" data-element="${this.name}" id="${this.name}" style="position: absolute; left: ${this.position.x}px; top: ${this.position.y}px;">
      <img src="${this.getCurrentVersion().image}">
    </div>
    `;
  }

}