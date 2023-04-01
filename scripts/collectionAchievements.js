const countCoins = document.getElementById ('countCoins');
const countCrystal = document.getElementById ('countCrystal');

const collectionBonuses = {

    coins: 0,
    crystal: 0,
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

    pleasureLevels: [100, 100, 100, 100]

};

countCoins.textContent = collectionBonuses.coins;
countCrystal.textContent = collectionBonuses.crystal;

export {collectionBonuses, countCoins, countCrystal };