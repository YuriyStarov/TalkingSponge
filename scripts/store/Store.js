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
  saveState() {
    const currentState = this.currentRoom.items.map(item => {
      return {
        id: item.id,
        currentVersionIndex: item.currentVersionIndex
      };
    });
    localStorage.setItem(this.room.tagName, JSON.stringify(currentState));
  }

  loadState() {
    const savedState = JSON.parse(localStorage.getItem(this.room.tagName));
    if (savedState) {
      this.currentRoom.items.forEach(item => {
        // console.log(item);
        const savedItem = savedState.find(state => state.id === item.id);
        if (savedItem) {
          item.currentVersionIndex = savedItem.currentVersionIndex;
        }
        // item.render();
      });
    }
  }

  /**
    Opens the store.
    @function
    @param {Room} room - The associated room.
  */

  open(room) {
    this.items = room.subElements;
    this.currentRoom = room;
    this.loadState();
    this.render();
  }

  /**
    Buys an item from the store.  
    @function
    @param {Item} item - The item to buy.
  */

  buyItem(item) {
    const itemPrice = item.basePrice;
    if (item.currentVersionIndex === 2) {
      item.currentVersionIndex = -1;
    }
    if (item.currentVersionIndex < item.versions.length - 1 && this.coins >= itemPrice) {
      item.upgrade();
      this.coins -= itemPrice;
      this.updateRender(item);
      this.render();

      const moneyUpdateEvent = new CustomEvent('moneyUpdate', { detail: { coins: this.coins, crystal: this.crystal } });
      document.dispatchEvent(moneyUpdateEvent);

      this.saveState();
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
        buyButton.style.position = 'absolute';
        buyButton.style.left = '70%';
        buyButton.style.top = '85%';
        buyButton.style.transform = 'translate(-80%, -50%)';
        buyButton.style.backgroundColor = 'transparent';
        buyButton.style.width = '85px';
        buyButton.style.color = 'white';
        buyButton.style.fontSize = '15px';
        buyButton.style.fontWeight = '900';
        buyButton.style.border = 'solid white 5px';
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
