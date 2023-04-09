export default class Room {
  subElements;
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
      item.itemDiv.remove()
      const itemDiv = item.render();
      this.roomDiv.appendChild(itemDiv);
    });
    this.getSubElements();
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
    getSubElements() {
      const result = {};
    const elements = this.roomDiv.querySelectorAll("[data-element]");
    [...elements].map(element => {
      result[element.dataset.element] = element;
    });
    this.subElements = result;

  }

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
