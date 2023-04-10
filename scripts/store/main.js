import Store from "./Store.js";
import Room from "./Room.js";
import Item from "./Item.js";
import LampItem from "./lampItem.js";
import { collectionBonuses } from "../collectionAchievements.js";
const toBedRoomStore = document.getElementById('secondaryButton1_4');
const tokitchenStore = document.getElementById('secondaryButton1_2');

// Itens for bedRoom
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

// Items for kitchen
const item1 = new Item(1, "item1", 2, { x: 0, y: 0 }, [
    { name: "item1_1", image: "img/bedRoom/slippers/slippers_1.png" },
    { name: "item1_2", image: "img/bedRoom/slippers/slippers_2.png" },
    { name: "item1_3", image: "img/bedRoom/slippers/slippers_3.png" },
]);
const item2 = new Item(2, "item2", 2, { x: 0, y: 5 }, [
    { name: "item2_1", image: "img/bedRoom/lamp/lamp_1.png" },
    { name: "item2_2", image: "img/bedRoom/lamp/lamp_2.png" },
    { name: "item2_3", image: "img/bedRoom/lamp/lamp_3.png" },
])
const item3 = new Item(3, "item3", 2, { x: 0, y: 0 }, [
    { name: "item3_1", image: "img/bedRoom/rug/rug_1.png" },
    { name: "item3_2", image: "img/bedRoom/rug/rug_2.png" },
    { name: "item3_3", image: "img/bedRoom/rug/rug_3.png" },
]);


const itemsBedroom = [slipper, lamp, rug, blanket]
export const bedRoom = new Room({
    id: 1,
    items: itemsBedroom,
    tagName: 'bedRoom'
});

const itemsKitchen = [item1, item2, item3]
export const kitchen = new Room({
    id: 2,
    items: itemsKitchen,
    tagName: 'kitchenRoom'
});

export const bedRoomStore = new Store({
    room: itemsBedroom,
    bonuses: collectionBonuses
});
export const kitchenStore = new Store({
    room: itemsKitchen,
    bonuses: collectionBonuses
});


// remove insidee class Store
toBedRoomStore.addEventListener('click', (event) => {
    if (toBedRoomStore.classList.contains('open')) {
        bedRoomStore.close();
        toBedRoomStore.classList.remove("open");
        return;
    }
    toBedRoomStore.classList.add("open");
    bedRoomStore.open(bedRoom);
});

tokitchenStore.addEventListener('click', (event) => {
    if (tokitchenStore.classList.contains('open')) {
        kitchenStore.close();
        tokitchenStore.classList.remove("open");
        return;
    }
    tokitchenStore.classList.add("open");
    kitchenStore.open(kitchen);
});
// outStore.addEventListener('click', (event) => {
//     store.close();
// });

// document.body.addEventListener('click', (event) => {
//   console.log(event.clientX);
//   console.log(event.clientY);
// })