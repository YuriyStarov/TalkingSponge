
const countCoins = document.getElementById('countCoins');
const countCrystal = document.getElementById('countCrystal');

const collectionBonuses = {

    coins: 20,
    crystal: 10,
    foods: [],
    tickets: 5,

    dirtBobs: 1,

    pleasureLevels: [100, 50, 50, 50],

    countries: []

};

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