import Store from "./Store.js";
import Room from "./Room.js";
import Item from "./Item.js";
import LampItem from "./lampItem.js";
import { collectionBonuses } from "../collectionAchievements.js";
import { coloringMainButton } from '../funcForProgress.js'
const toBedRoomStore = document.getElementById('secondaryButton1_4');
const tokitchenStore = document.getElementById('secondaryButton1_2');
const toplayroomStore = document.getElementById('secondaryButton1_1');
const tobathroomStore = document.getElementById('secondaryButton1_3');

/**
 * Itens for bedRoom 
 * variables are created for each room
 *  when created:
 * - the name 
 * ID
 * cost 
 * position
 * version
 * @constant {Item}
 * @param {number} id each item has its own unique ID
 * @param {string} name each item has its own unique Name
 * @param {number} cost for each item you can rent its initial cost
 * @param {object} position for each object it is possible to set coordinates on the screen
 * @param {Array} version each object contains an array of possible versions
 * @default
 */
const VERSION = '1.0.0';

/**
 * The name of the application.
 * @constant {string}
 * @default
 */
const APP_NAME = 'TalkingBob';

// Itens for bedRoom
const slipper = new Item(1, "slippers", 2, { x: 700, y: 400 }, [
    { name: "slippers_1", image: "img/bedRoom/slippers/slippers_1.png" },
    { name: "slippers_2", image: "img/bedRoom/slippers/slippers_2.png" },
    { name: "slippers_3", image: "img/bedRoom/slippers/slippers_3.png" },
]);
export const lamp = new LampItem(2, "lamp", 2, { x: 80, y: 155 }, [
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
const lamps = new Item(1, "lamps", 2, { x: 400, y: 25, }, [
    { name: "lamps_1", image: "img/eat/lamps_1.png" },
    { name: "lamps_2", image: "img/eat/lamps_2.png" },
    { name: "lamps_3", image: "img/eat/lamps_3.png" },
]);
const refrigerator = new Item(2, "refrigerator", 2, { x: -5, y: 190}, [
    { name: "refrigerator_1.png", image: "img/eat/refrigerator_1.png" },
    { name: "refrigerator_2", image: "img/eat/refrigerator_2.png" },
    { name: "refrigerator_3", image: "img/eat/refrigerator_3.png" },
])
const hood = new Item(3, "hood", 2, { x: 582, y: 145 }, [
    { name: "hood_1", image: "img/eat/hood_1.png" },
    { name: "hood_2", image: "img/eat/hood_2.png" },
    { name: "hood_3", image: "img/eat/hood_3.png" },
]);

// Items for playroom  NEED TO CHANGE ITEMS
const item4 = new Item(1, "item1", 2, { x: 500, y: 400 }, [
    { name: "item1_1", image: "img/bedRoom/slippers/slippers_1.png" },
    { name: "item1_2", image: "img/bedRoom/slippers/slippers_2.png" },
    { name: "item1_3", image: "img/bedRoom/slippers/slippers_3.png" },
]);
const item5 = new Item(2, "item2", 2, { x: 180, y: 155 }, [
    { name: "item2_1", image: "img/bedRoom/lamp/lamp_1.png" },
    { name: "item2_2", image: "img/bedRoom/lamp/lamp_2.png" },
    { name: "item2_3", image: "img/bedRoom/lamp/lamp_3.png" },
])
const item6 = new Item(3, "item3", 2, { x: 390, y: 390 }, [
    { name: "item3_1", image: "img/bedRoom/rug/rug_1.png" },
    { name: "item3_2", image: "img/bedRoom/rug/rug_2.png" },
    { name: "item3_3", image: "img/bedRoom/rug/rug_3.png" },
]);

// Items for bathroom  NEED TO CHANGE ITEMS
const item7 = new Item(1, "item1", 2, { x: 500, y: 400 }, [
    { name: "item1_1", image: "img/bedRoom/slippers/slippers_1.png" },
    { name: "item1_2", image: "img/bedRoom/slippers/slippers_2.png" },
    { name: "item1_3", image: "img/bedRoom/slippers/slippers_3.png" },
]);
const item8 = new Item(2, "item2", 2, { x: 180, y: 155 }, [
    { name: "item2_1", image: "img/bedRoom/lamp/lamp_1.png" },
    { name: "item2_2", image: "img/bedRoom/lamp/lamp_2.png" },
    { name: "item2_3", image: "img/bedRoom/lamp/lamp_3.png" },
])
const item9 = new Item(3, "item3", 2, { x: 390, y: 390 }, [
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

const itemsKitchen = [lamps, refrigerator, hood]
export const kitchen = new Room({
    id: 2,
    items: itemsKitchen,
    tagName: 'kitchenRoom'
});

const itemsPlayroom = [] // ADD ITEMS
export const playRoom = new Room({
    id: 3,
    items: itemsPlayroom,
    tagName: 'playroom'
});

const itemsBathroom = [] // ADD ITEMS
export const bathRoom = new Room({
    id: 4,
    items: itemsBathroom,
    tagName: 'bathroom'
});

export const bedRoomStore = new Store({
    room: itemsBedroom,
    bonuses: collectionBonuses
});

export const kitchenStore = new Store({
    room: itemsKitchen,
    bonuses: collectionBonuses
});

export const playRoomStore = new Store({
    room: itemsPlayroom,
    bonuses: collectionBonuses
});

export const bathRoomStore = new Store({
    room: itemsPlayroom,
    bonuses: collectionBonuses
});



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

// toplayroomStore.addEventListener('click', (event) => {
//     if (toBedRoomStore.classList.contains('open')) {
//         bedRoomStore.close();
//         toBedRoomStore.classList.remove("open");
//         return;
//     }
//     toBedRoomStore.classList.add("open");
//     bedRoomStore.open(bedRoom);
// });
// toBedRoomStore.addEventListener('click', (event) => {
//     if (toBedRoomStore.classList.contains('open')) {
//         bedRoomStore.close();
//         toBedRoomStore.classList.remove("open");
//         return;
//     }
//     toBedRoomStore.classList.add("open");
//     bedRoomStore.open(bedRoom);
// });
