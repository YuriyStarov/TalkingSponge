const countCoins = document.getElementById('countCoins');
const countCrystal = document.getElementById('countCrystal');

const collectionBonuses = {

    coins: 20,
    crystal: 10,
    elixirWakefulness: 0,
    elixirJoy: 0,
    elixirSatiety: 0,
    burgers: 0,
    pizza: 0,
    potatoes: 0,
    apple: 0,
    cola: 0,
    coffee: 0,
    milk: 0,
    soup: 0,
    chocolate: 0,
    cakeChocolate: 0,
    cakeVanilla: 0,
    tickets: 5,

    pleasureLevels: [100, 100, 100, 100],

    countries: []

};

document.addEventListener('moneyUpdate', moneyUpdateEvent);

function moneyUpdateEvent(event) {
    Object.entries(event.detail).forEach(([key, value]) => {
        collectionBonuses[key] = value;
    })
    
    countCoins.textContent = collectionBonuses.coins;
    countCrystal.textContent = collectionBonuses.crystal;
}
countCoins.textContent = collectionBonuses.coins;
countCrystal.textContent = collectionBonuses.crystal;

export { collectionBonuses, countCoins, countCrystal, moneyUpdateEvent };