export default class Room {
  constructor({id, items = [], tagName = '', roomTypeItems = []} = {}) {
    this.id = id;
    this.name = `Room_${id}`;
    this.items = items;
    this.tagName = tagName;
    this.roomTypeItems = roomTypeItems;
    this.roomDiv = document.getElementById(this.tagName);
    this.addToRoom();
  }

  render() {
    this.items.forEach((item) => {
      const itemDiv = item.render();
      this.roomDiv.appendChild(itemDiv);
    });

    return this.roomDiv;
  }

  addToRoom() {
    this.items.forEach(item => {
      item.room = this;
    })
  }

  updateRender() {
    this.roomDiv.replaceWith(this.render());
  }

  close() {
    this.items.forEach((item) => {
      if (item.eventListeners) {
        item.turnOfLight()
      }
      if (item.itemDiv) {
        item.itemDiv.innerHTML = '';
      }
    });
  }
}
