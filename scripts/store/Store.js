export default class Store {
  constructor({ coins = 0, crystal = 0 } = {}) {
    this.coins = coins;
    this.crystal = crystal;
    this.currentRoom = null;
  }

  open(room) {
    this.currentRoom = room;
    this.render();
  }

  buyItem(item) {
    const itemPrice = item.basePrice;
    if (item.currentVersionIndex < item.versions.length - 1 && this.coins >= itemPrice) {
      item.upgrade();
      this.coins -= itemPrice;
      this.updateRender();

      const moneyUpdateEvent = new CustomEvent('moneyUpdate', { detail: { coins: this.coins, crystal: this.crystal } });
      document.dispatchEvent(moneyUpdateEvent);
    }
  }

  render() {
    if (!this.currentRoom) {
      console.error("No room is associated with the store.");
      return;
    }

    // const storeDiv = document.createElement("div");
    // storeDiv.classList.add("store");

    this.currentRoom.items.forEach((item) => {
      const itemDiv = item.itemDiv;
      // storeDiv.appendChild(itemDiv);

      if (item.currentVersionIndex < item.versions.length - 1) {
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

    // document.body.appendChild(storeDiv);
  }

  updateRender() {
    this.currentRoom.render()
    // const storeDiv = document.querySelector(".store");
    // if (storeDiv) {
    //   storeDiv.remove();
    //   this.render();
    // }
  }

  close() {
    // const storeDiv = document.querySelector(".store");
    this.currentRoom.items.forEach(item => {
      const buyButtons = item.itemDiv.querySelectorAll("button");
      buyButtons.forEach((button) => button.remove());
    })
    this.currentRoom = null;

    // const buyButtons = this.currentRoom.items.querySelectorAll("button");
    // buyButtons.forEach((button) => button.remove());
  }
}
