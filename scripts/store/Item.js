export default class Item {
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

  upgrade() {
    if (this.currentVersionIndex < this.versions.length - 1) {
      this.currentVersionIndex++;
      this.changeAppearance = true;
      this.basePrice *= 2;
    }
  }

  getCurrentVersion() {
    return this.versions[this.currentVersionIndex];
  }
  renderUpgrade() {
    this.itemDiv.firstChild.src = this.getCurrentVersion().image;
  }
  render() {
    if (!this.itemDiv) {
      return;
    }
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTempate();
    // const renderedItem = document.getElementById(this.name);
    // if (!this.itemDiv) {
    //   this.itemDiv = document.createElement("div");
    // }
    // if (renderedItem) {
    //   this.itemDiv.remove()
    //   this.itemDiv = renderedItem;
    //   this.itemDiv.innerHTML = '';
    // }
    // this.itemDiv.classList.add("item", this.room.tagName);
    // this.itemDiv.style.position = `absolute`;
    // this.itemDiv.style.left = `${this.position.x}px`;
    // this.itemDiv.style.top = `${this.position.y}px`;
    // this.itemDiv.setAttribute("id", this.name);
    // const itemImg = document.createElement("img");
    // itemImg.src = this.getCurrentVersion().image;
    // this.itemDiv.appendChild(itemImg);

    // const itemName = document.createElement("p");
    // itemName.textContent = this.getCurrentVersion().name;
    // this.itemDiv.appendChild(itemName);

    // const itemPrice = document.createElement("p");
    // itemPrice.textContent = `Price: ${this.basePrice}`;
    // this.itemDiv.appendChild(itemPrice);
    this.itemDiv = wrapper.firstElementChild;
    this.itemDiv.append(this.itemLampTogle);
    return wrapper.firstElementChild;
    return this.itemDiv;
  }

  getTempate() {
    return `
    <div class="item ${this.room.tagName}" data-element="${this.name}" id="${this.name}" style="position: absolute; left: ${this.position.x}px; top: ${this.position.y}px;">
      <img src="${this.getCurrentVersion().image}">
    </div>
    `;
  }

}