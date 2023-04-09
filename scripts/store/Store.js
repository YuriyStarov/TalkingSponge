export default class Store {
  constructor({ room, bonuses } = {}) {
    this.coins = bonuses.coins;
    this.crystal = bonuses.crystal;
    this.room = room;
  }

  open(room) {
    this.items = room.subElements;
    this.currentRoom = room;
    this.render();
  }

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

  render() {
    if (!this.currentRoom) {
      console.error("No room is associated with the store.");
      return;
    }

    this.currentRoom.items.forEach((item) => {
      const itemDiv = item.itemDiv;
      // console.log(item);
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
  }

  updateRender() {
    this.currentRoom.render()
  }

  close() {
    this.currentRoom.items.forEach(item => {
      const buyButtons = item.itemDiv.querySelectorAll("button");
      buyButtons.forEach((button) => button.remove());
    })
    // this.currentRoom.close();
    this.currentRoom = null;
  }
}
