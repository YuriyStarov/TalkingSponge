let collectionBonuses = {
    localStorage: true,
    coins: 20,
    crystal: 10,
    foods: [],
    tickets: 5,
    dirtBobs: 1,
    pleasureLevels: [100, 100, 100, 100],
    countries: []
};
let ipcRenderer;
let remote;

const setLocalStorage = (collection) => {
    localStorage.setItem('collectionBonuses', JSON.stringify(collection));
}

window.addEventListener('beforeunload', function (e) {
    collectionBonuses.savetoLS = true;
    e.preventDefault();
    setLocalStorage(collectionBonuses);
  });

    const firstStart = localStorage.getItem('collectionBonuses');
    if (!firstStart) {
        setLocalStorage(collectionBonuses);
    }
    collectionBonuses = JSON.parse(localStorage.getItem('collectionBonuses'));
    ipcRenderer = null;
    remote = null;
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