import { collectionBonuses } from "./collectionAchievements.js";

const allCollectionButtonInTravel1 = document.getElementsByClassName ('allCollectionButtonInTravel');

function CountryToPhotoAlbum (country,countryPositionX,countryPositionY,positionInAlbum) {

    this.country = country;
    this.countryPositionX = countryPositionX;
    this.countryPositionY = countryPositionY;
    this.pathPhoto = `../img/travel/${country}.jpg`;
    this.positionInAlbum = positionInAlbum;
    this.pathToFlag = `../img/travel/${country}_flag.png`;
    this.placeToAlbum = false;
};

collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Morocco', '290px','210px',0));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Egypt', '330px','220px',1));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Turkey', '250px','180px',2));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Pakistan', '320px','220px',3));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('India', '260px','260px',4));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('China', '300px','200px',5));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Indonesia', '250px','380px',6));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Australia', '250px','480px',7));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Solomon_Islands', '300px','420px',8));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Fiji', '280px','460px',9));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Hawaii', '280px','250px',10));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('USA', '380px','150px',11));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Mexico', '380px','250px',12));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Cuba', '390px','240px',13));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Colombia', '320px','350px',14));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Bolivia', '250px','450px',15));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Brazil', '200px','400px',16));
collectionBonuses.photoAlbum.push (new CountryToPhotoAlbum ('Senegal', '290px','290px',17));

console.log (collectionBonuses.photoAlbum);

allCollectionButtonInTravel1[0].textContent = `You have: ${collectionBonuses.tickets} 🎫`;

function buyOrFly () {

    let flyTicket;

    if (collectionBonuses.tickets === 0) {

        flyTicket = 'TO BUY';

    }
    else {
    
        flyTicket = 'TO FLY';
    
    };

    allCollectionButtonInTravel1[1].textContent = `${flyTicket} 🎫`;

};

buyOrFly();

let globeAudio = document.getElementById ('globe_music');

const counters = {
  countSprite: 0,
  countTime: 0
};

let canvas = document.getElementById("globeSpin");

let ctx = canvas.getContext("2d");
let widthCtx = canvas.width;
let heightCtx = canvas.height;

let globe = new Image(9000,500);
globe.src = "img/globe.png";
setTimeout (() => {
    ctx.drawImage(globe, 0, 0, 500, 500, 150, 100, 500, 500);
},2000);

function allGame (randomParameter) {
      if (counters.countTime < randomParameter) {
      ctx.clearRect(0, 0, widthCtx, heightCtx);
      draw();
      counters.countTime += 1;
      requestAnimationFrame(() => {allGame(randomParameter)});
    } else {
      counters.countTime = 0;
      globeAudio.pause();
    }
};

function draw () {
  ctx.drawImage(globe, counters.countSprite, 0, 500, 500, 150, 100, 500, 500),
  counters.countSprite += 500;
  if (counters.countSprite > 8900) {
      counters.countSprite = 0;
  };
};

function photoInAlbum (framePosition) {

    let imagePath;
    const remainder = framePosition % 18;

    switch (remainder) {
        
        case 0: {
            imagePath = "url(../img/eat/cake_1.png)";
            collectionBonuses.cakeChocolate += 1;
            break
        };
        case 1: {
            imagePath = "url(../img/eat/cake_2.png)";
            collectionBonuses.cakeVanilla += 1;
            break
        };
        case 2: {
            imagePath = "url(../img/eat/cola.png)";
            collectionBonuses.cola += 1;
            break
        };
        case 3: {
            imagePath = "url(../img/eat/milk.png)";
            collectionBonuses.milk += 1;
            break
        };
        case 4: {
            imagePath = "url(../img/eat/pizza.png)";
            collectionBonuses.pizza += 1;
            break
        };
        case 5: {
            imagePath = "url(../img/eat/soup.png)";
            collectionBonuses.soup += 1;
            break
        };
        case 6: {
            imagePath = "url(../img/eat/coins.png)";
            collectionBonuses.coins += 3;
            countCoins.textContent = collectionBonuses.coins;
            break
        };
        case 7: {
            imagePath = "url(../img/eat/elixir_energy.png)";
            collectionBonuses.elixirWakefulness += 1;
            break
        };
        case 8: {
            imagePath = "url(../img/eat/choko.png)";
            collectionBonuses.chocolate += 1;
            break
        };
        case 9: {
            imagePath = "url(../img/eat/crystal.png)";
            collectionBonuses.crystal += 1;
            countCrystal.textContent = collectionBonuses.crystal;
            break
        };
        case 10: {
            imagePath = "url(../img/eat/potatoes.png)";
            collectionBonuses.potatoes += 1;
            break
        };
        case 11: {
            imagePath = "url(../img/eat/elixir_funny.png)";
            collectionBonuses.elixirJoy += 1;
            break
        };
        case 12: {
            imagePath = "url(../img/eat/apple.png)";
            collectionBonuses.apple += 1;
            break
        };
        case 13: {
            imagePath = "url(../img/eat/coins_many.png)";
            collectionBonuses.coins += 10;
            countCoins.textContent = collectionBonuses.coins;
            break
        };
        case 14: {
            imagePath = "url(../img/eat/coffee.png)";
            collectionBonuses.coffee += 1;
            break
        };
        case 15: {
            imagePath = "url(../img/eat/crystal.png)";
            collectionBonuses.crystal += 2;
            countCrystal.textContent = collectionBonuses.crystal;
            break
        };
        case 16: {
            imagePath = "url(../img/eat/burger.png)";
            collectionBonuses.burgers += 1;
            break
        };
        case 17: {
            imagePath = "url(../img/eat/elixir_eat.png)";
            collectionBonuses.elixirSatiety += 1;
        };
    };

};

allCollectionButtonInTravel1[1].addEventListener ('click', () => {
  const randomFortune = Math.floor(Math.random()*90 + 270);
  allGame(randomFortune);
  globeAudio.play();
});

