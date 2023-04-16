import Store from "./Store.js";
import Room from "./Room.js";
import Item from "./Item.js";
import LampItem from "./lampItem.js";
import { collectionBonuses } from "../collectionAchievements.js";
import { coloringMainButton } from '../funcForProgress.js'
const toBedRoomStore = document.getElementById('secondaryButton1_4');
const tokitchenStore = document.getElementById('secondaryButton1_2');
const toPlayroomStore = document.getElementById('secondaryButton1');
const toBathroomStore = document.getElementById('secondaryButton1_3');

const toTravelAndMarket = document.getElementById('toTravelAndMarket');
const buttonBackInToPlayroom1 = document.getElementById('buttonBackInToPlayroom1');
const buttonBackInToBathroom1 = document.getElementById('buttonBackInToBathroom1');
const buttonBackInToBedroom1 = document.getElementById('buttonBackInToBedroom1');
const maskForSleep = document.getElementById('maskForSleep');
const invisible = document.getElementsByClassName ('invisible');
const invisiblePlay = document.getElementsByClassName ('invisiblePlay');
const invisibleBath = document.getElementsByClassName ('invisibleBath');

function invisibleInterior (status, collection, collectionPersonal) {

    for (let i = 0; i < collection.length; i += 1) {

        collection[i].style.display = status;

    };

    if (collectionPersonal) {

        for (let i = 0; i < collectionPersonal.length; i += 1) {

            collectionPersonal[i].style.display = status;
    
        };

    };

};

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
const refrigerator = new Item(2, "refrigerator", 2, { x: 0, y: 190}, [
    { name: "refrigerator_1.png", image: "img/eat/refrigerator_1.png" },
    { name: "refrigerator_2", image: "img/eat/refrigerator_2.png" },
    { name: "refrigerator_3", image: "img/eat/refrigerator_3.png" },
])
const hood = new Item(3, "hood", 2, { x: 576, y: 145 }, [
    { name: "hood_1", image: "img/eat/hood_1.png" },
    { name: "hood_2", image: "img/eat/hood_2.png" },
    { name: "hood_3", image: "img/eat/hood_3.png" },
]);

// Items for playroom  NEED TO CHANGE ITEMS
const clockWall = new Item(1, "clockWall", 2, { x: 680, y: 45 }, [
    { name: "clockWall_1", image: "img/playroomItem/clockWall_1.png" },
    { name: "clockWall_2", image: "img/playroomItem/clockWall_2.png" },
    { name: "clockWall_3", image: "img/playroomItem/clockWall_3.png" },
]);
const pictureWall = new Item(2, "pictureWall", 2, { x: 50, y: 30 }, [
    { name: "pictureWall_1", image: "img/playroomItem/pictureWall_1.png" },
    { name: "pictureWall_2", image: "img/playroomItem/pictureWall_2.png" },
    { name: "pictureWall_3", image: "img/playroomItem/pictureWall_3.png" },
])
const softToy = new Item(3, "softToy", 2, { x: 600, y: 180 }, [
    { name: "softToy_1", image: "img/playroomItem/softToy_1.png" },
    { name: "softToy_2", image: "img/playroomItem/softToy_2.png" },
    { name: "softToy_3", image: "img/playroomItem/softToy_3.png" },
]);

// Items for bathroom  NEED TO CHANGE ITEMS
const flower = new Item(1, "flower", 2, { x: 610, y: 102 }, [
    { name: "flower_1", image: "img/playroomItem/flower_1.png" },
    { name: "flower_2", image: "img/playroomItem/flower_2.png" },
    { name: "flower_3", image: "img/playroomItem/flower_3.png" },
]);
const pictureFriend = new Item(2, "pictureFriend", 2, { x: 710, y: 20 }, [
    { name: "pictureFriend_1", image: "img/playroomItem/pictureFriend_1.png" },
    { name: "pictureFriend_2", image: "img/playroomItem/pictureFriend_2.png" },
    { name: "pictureFriend_3", image: "img/playroomItem/pictureFriend_3.png" },
])
const hook = new Item(3, "hook", 2, { x: 60, y: 200 }, [
    { name: "hook_1", image: "img/playroomItem/hook_1.png" },
    { name: "hook_2", image: "img/playroomItem/hook_2.png" },
    { name: "hook_3", image: "img/playroomItem/hook_3.png" },
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

const itemsPlayroom = [clockWall, pictureWall, softToy]
export const playRoom = new Room({
    id: 3,
    items: itemsPlayroom,
    tagName: 'playRoom'
});

const itemsBathroom = [flower, pictureFriend, hook] // ADD ITEMS
export const bathRoom = new Room({
    id: 4,
    items: itemsBathroom,
    tagName: 'bathRoom'
});

export const bedRoomStore = new Store({
    room: bedRoom,
    bonuses: collectionBonuses
});

export const kitchenStore = new Store({
    room: kitchen,
    bonuses: collectionBonuses
});

export const playRoomStore = new Store({
    room: playRoom,
    bonuses: collectionBonuses
});

export const bathRoomStore = new Store({
    room: bathRoom,
    bonuses: collectionBonuses
});


toBedRoomStore.addEventListener('click', (event) => {
     toTravelAndMarket.style.display = 'none';
     buttonBackInToBedroom1.style.display = 'block';
     maskForSleep.style.opacity = 0;
     invisibleInterior ('none',invisible);
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

 toPlayroomStore.addEventListener('click', (event) => {
     toTravelAndMarket.style.display = 'none';
     buttonBackInToPlayroom1.style.display = 'block';
     invisibleInterior ('none',invisible,invisiblePlay);
     if (toPlayroomStore.classList.contains('open')) {
         playRoomStore.close();
         toPlayroomStore.classList.remove("open");
         return;
     }
     toPlayroomStore.classList.add("open");
     playRoomStore.open(playRoom);
 });

 toBathroomStore.addEventListener('click', (event) => {
     toTravelAndMarket.style.display = 'none';
     buttonBackInToBathroom1.style.display = 'block';
     invisibleInterior ('none',invisible,invisibleBath);
     if (toBathroomStore.classList.contains('open')) {
         bathRoomStore.close();
         toBathroomStore.classList.remove("open");
         return;
     }
     toBathroomStore.classList.add("open");
     bathRoomStore.open(bathRoom);
 });

 buttonBackInToPlayroom1.addEventListener('click', (event) => {
    buttonBackInToPlayroom1.style.display = 'none';
    invisibleInterior ('block',invisible,invisiblePlay);
    if (toPlayroomStore.classList.contains('open')) {
        playRoomStore.close();
        toPlayroomStore.classList.remove("open");
        return;
    }
    toPlayroomStore.classList.add("open");
    playRoomStore.open(playRoom);
});

buttonBackInToBathroom1.addEventListener('click', (event) => {
    buttonBackInToBathroom1.style.display = 'none';
    invisibleInterior ('block',invisible,invisibleBath);
    if (toBathroomStore.classList.contains('open')) {
        bathRoomStore.close();
        toBathroomStore.classList.remove("open");
        return;
    }
    toBathroomStore.classList.add("open");
    bathRoomStore.open(bathRoom);
});

buttonBackInToBedroom1.addEventListener('click', (event) => {
    buttonBackInToBedroom1.style.display = 'none';
    maskForSleep.style.opacity = 1;
    invisibleInterior ('block',invisible);
    if (toBedRoomStore.classList.contains('open')) {
        bedRoomStore.close();
        toBedRoomStore.classList.remove("open");
        return;
    }
    toBedRoomStore.classList.add("open");
    bedRoomStore.open(bedRoom);
});