import Store from "./Store.js";
import Room from "./Room.js";
import Item from "./Item.js";
import LampItem from "./lampItem.js";

const toStore = document.getElementById('toStore');
const outStore = document.getElementById('outStore');
const goToBedRoom = document.getElementById('goToBedRoom');

const slipper = new Item(1, "slippers", 100, { x: 700, y: 400 }, [
    { name: "slippers_1", image: "img/bedRoom/slippers/slippers_1.png" },
    { name: "slippers_2", image: "img/bedRoom/slippers/slippers_2.png" },
    { name: "slippers_3", image: "img/bedRoom/slippers/slippers_3.png" },
]);
const lamp = new LampItem(2, "lamp", 100, { x: 80, y: 160 }, [
    { name: "lamp_1", image: "img/bedRoom/lamp/lamp_1.png" },
    { name: "lamp_2", image: "img/bedRoom/lamp/lamp_2.png" },
    { name: "lamp_3", image: "img/bedRoom/lamp/lamp_3.png" },
], true)
const rug = new Item(3, "rug", 100, { x: 90, y: 390 }, [
    { name: "rug_1", image: "img/bedRoom/rug/rug_1.png" },
    { name: "rug_2", image: "img/bedRoom/rug/rug_2.png" },
    { name: "rug_3", image: "img/bedRoom/rug/rug_3.png" },
]);
// const blanket = new Item(4, "blanket", 100, { x: 90, y: 350 }, [
//     { name: "blanket_1", image: "img/bedRoom/blanket/blanket_1.png" },
//     { name: "blanket_2", image: "img/bedRoom/blanket/blanket_2.png" },
//     { name: "blanket_3", image: "img/bedRoom/blanket/blanket_3.png" },
// ]);



const items = [slipper, lamp, rug]
const bedRoom = new Room({
    id: 1,
    items: items,
    tagName: 'bedRoom'
});

// Create the store and open it for the room
const store = new Store();

goToBedRoom.addEventListener('click', (event) => {
    bedRoom.render();
});

toStore.addEventListener('click', (event) => {
    store.open(bedRoom);
});
outStore.addEventListener('click', (event) => {
    store.close();
});
// Close the store
// store.close();

// document.body.addEventListener('click', (event) => {
//   console.log(event.clientX);
//   console.log(event.clientY);
// })