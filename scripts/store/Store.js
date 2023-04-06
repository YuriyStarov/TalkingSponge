export default class Store {
  constructor() {
    this.currentRoom = null;
  }

  open(room) {
    this.currentRoom = room;
    this.render();
  }

  buyItem(item) {
    if (item.currentVersionIndex < item.versions.length - 1) {
      item.upgrade();
      this.updateRender();
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
        buyButton.textContent = "Buy";
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
