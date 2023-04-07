import Store from "./Store.js";
import Room from "./Room.js";
import Item from "./Item.js";
import LampItem from "./lampItem.js";
import { collectionBonuses } from "../collectionAchievements.js";
const toStore = document.getElementById('toStore');
const outStore = document.getElementById('outStore');
const goToBedRoom = document.getElementById('toBedroom');

const slipper = new Item(1, "slippers", 2, { x: 700, y: 400 }, [
    { name: "slippers_1", image: "img/bedRoom/slippers/slippers_1.png" },
    { name: "slippers_2", image: "img/bedRoom/slippers/slippers_2.png" },
    { name: "slippers_3", image: "img/bedRoom/slippers/slippers_3.png" },
]);
const lamp = new LampItem(2, "lamp", 2, { x: 80, y: 155 }, [
    { name: "lamp_1", image: "img/bedRoom/lamp/lamp_1.png" },
    { name: "lamp_2", image: "img/bedRoom/lamp/lamp_2.png" },
    { name: "lamp_3", image: "img/bedRoom/lamp/lamp_3.png" },
], true)
const rug = new Item(3, "rug", 2, { x: 90, y: 390 }, [
    { name: "rug_1", image: "img/bedRoom/rug/rug_1.png" },
    { name: "rug_2", image: "img/bedRoom/rug/rug_2.png" },
    { name: "rug_3", image: "img/bedRoom/rug/rug_3.png" },
]);
const blanket = new Item(4, "blanket", 2, { x: 210, y: 330 }, [
    { name: "blanket_1", image: "img/bedRoom/blanket/blanket_1.png" },
    { name: "blanket_2", image: "img/bedRoom/blanket/blanket_2.png" },
    { name: "blanket_3", image: "img/bedRoom/blanket/blanket_3.png" },
]);



const items = [slipper, lamp, rug, blanket]
export const bedRoom = new Room({
    id: 1,
    items: items,
    tagName: 'bedRoom'
});

const store = new Store(collectionBonuses);



toStore.addEventListener('click', (event) => {
    store.open(bedRoom);
});
outStore.addEventListener('click', (event) => {
    store.close();
});

// document.body.addEventListener('click', (event) => {
//   console.log(event.clientX);
//   console.log(event.clientY);
// })