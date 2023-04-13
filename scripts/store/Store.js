/**
A class representing a store of Item`s in a Room.
  @class
  @default
  @exports Store
*/
export default class Store {
  /**
  Create a store.
  @constructor
  @param {Object} options - The options object.
  @param {Room} options.room - The associated room.
  @param {Object} options.bonuses - The bonuses object.
  @param {number} options.bonuses.coins - The number of coins.
  @param {number} options.bonuses.crystal - The number of crystals.
*/
  constructor({ room, bonuses } = {}) {
    this.coins = bonuses.coins;
    this.crystal = bonuses.crystal;
    this.room = room;
  }

/**
  Opens the store.
  @function
  @param {Room} room - The associated room.
*/

  open(room) {
    this.items = room.subElements;
    this.currentRoom = room;
    this.render();
  }

/**
  Buys an item from the store.  
  @function
  @param {Item} item - The item to buy.
*/

  buyItem(item) {
    const itemPrice = item.basePrice;
    if (item.currentVersionIndex < item.versions.length - 1 && this.coins >= itemPrice) {
      item.upgrade();
      this.coins -= itemPrice;
      this.updateRender(item);
      this.render();

      const moneyUpdateEvent = new CustomEvent('moneyUpdate', { detail: { coins: this.coins, crystal: this.crystal } });
      document.dispatchEvent(moneyUpdateEvent);
    }
  }
/**
  Renders the store.
  @function
*/
  render() {
    if (!this.currentRoom) {
      console.error("No room is associated with the store.");
      return;
    }

    this.currentRoom.items.forEach((item) => {
      const itemDiv = item.itemDiv;
      if (item.currentVersionIndex < item.versions.length) {
        const buyButton = document.createElement("button");
        buyButton.style.backgroundColor = 'transparent';
        buyButton.style.color = 'grey';
        buyButton.style.border = 'solid white 1px';
        buyButton.textContent = `${item.basePrice} 🪙`;
        buyButton.addEventListener("click", () => {
          this.buyItem(item);
        });
        itemDiv.appendChild(buyButton);
      }
    });
  }

/**
  Updates the store render.
  @function
*/

  updateRender() {
    this.currentRoom.render()
  }

/**
  Closes the store.
  @function
*/

  close() {
    this.currentRoom.items.forEach(item => {
      const buyButtons = item.itemDiv.querySelectorAll("button");
      buyButtons.forEach((button) => button.remove());
    })
    this.currentRoom = null;
  }
}
