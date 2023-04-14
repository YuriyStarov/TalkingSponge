const setLocalStorage = () => {
    const collectionBonuses = {
        parsed: false,
        coins: 20,
        crystal: 10,
        foods: [],
        tickets: 5,
        dirtBobs: 1,
        pleasureLevels: [100, 100, 100, 100],
        countries: []
    };
    localStorage.setItem('collectionBonuses', JSON.stringify(collectionBonuses));
}
let ipcRenderer;
let remote;
let collectionBonuses
if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    const { ipcRenderer } = require('electron');
    collectionBonuses = ipcRenderer.sendSync('get-data');
    console.log(collectionBonuses);

} else {
    setLocalStorage();
    collectionBonuses = JSON.parse(localStorage.getItem('collectionBonuses'));
    console.log(collectionBonuses);
    ipcRenderer = null;
    remote = null;
}
const countCoins = document.getElementById('countCoins');
const countCrystal = document.getElementById('countCrystal');


document.addEventListener('moneyUpdate', moneyUpdateEvent);

function moneyUpdateEvent(event) {

    const updateCollection = () => {
        Object.entries(event.detail).forEach(([key, value]) => {
            collectionBonuses[key] = value;
        })

        countCoins.textContent = collectionBonuses.coins;
        countCrystal.textContent = collectionBonuses.crystal;
    }

    if ("action" in event.detail) {
        switch (event.detail.action) {
            case 'plus':
                delete event.detail.action
                Object.entries(event.detail).forEach(([key, value]) => {
                    collectionBonuses[key] += value;
                })
                countCoins.textContent = collectionBonuses.coins;
                countCrystal.textContent = collectionBonuses.crystal;
                break;

            default:
                break;
        }
        return;
    }


    updateCollection();
}
countCoins.textContent = collectionBonuses.coins;
countCrystal.textContent = collectionBonuses.crystal;

export { collectionBonuses, countCoins, countCrystal, moneyUpdateEvent };