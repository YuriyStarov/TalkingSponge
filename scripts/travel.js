import { collectionBonuses } from "./collectionAchievements.js";

const airTravel = document.getElementById ('airTravel');
const buttonsCollectionInTravel = document.getElementById ('buttonsCollectionInTravel');
const allCollectionButtonInTravel1 = document.getElementsByClassName ('allCollectionButtonInTravel');
const nameAndFlagOfCountries = document.getElementById ('nameAndFlagOfCountries');
const greatPhotoAlbum = document.getElementById ('greatPhotoAlbum');
const bigPhotoInAlbum = document.getElementById ('bigPhotoInAlbum');
const backToGlobeSpin = document.getElementById ('backToGlobeSpin');
const countryNameAndIcon = nameAndFlagOfCountries.children;
const realAlbum = document.getElementById ('realAlbum');
const collectionsPhotos = realAlbum.children;

function CountryToPhotoAlbum (country,countryPositionX,countryPositionY,positionInAlbum) {

    this.country = country;
    this.countryPositionX = countryPositionX;
    this.countryPositionY = countryPositionY;
    this.pathPhoto = `./img/travel/${country}.jpg`;
    this.positionInAlbum = positionInAlbum;
    this.pathToFlag = `./img/travel/${country}_flag.png`;
    this.placeToAlbum = false;
};

if (!collectionBonuses.countries.length) {
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Morocco', '290px','210px',0));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Egypt', '330px','220px',1));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Turkey', '250px','180px',2));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Pakistan', '320px','220px',3));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('India', '260px','260px',4));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('China', '300px','200px',5));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Indonesia', '250px','380px',6));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Australia', '250px','480px',7));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Solomon_Islands', '300px','420px',8));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Fiji', '280px','460px',9));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Hawaii', '280px','250px',10));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('USA', '380px','150px',11));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Mexico', '380px','250px',12));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Cuba', '390px','240px',13));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Colombia', '320px','350px',14));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Bolivia', '250px','450px',15));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Brazil', '200px','400px',16));
  collectionBonuses.countries.push (new CountryToPhotoAlbum ('Senegal', '290px','290px',17));
};



function buyOrFly () {

    let flyTicket;

    if (collectionBonuses.tickets === 0) {

        flyTicket = 'TO BUY';

    }
    else {
    
        flyTicket = 'TO FLY';
    
    };
    allCollectionButtonInTravel1[0].textContent = `You have: ${collectionBonuses.tickets} 🎫`;
    allCollectionButtonInTravel1[1].textContent = `${flyTicket} 🎫`;

};

buyOrFly();

let globeAudio = document.getElementById ('globe_music');
let wowPhoto = document.getElementById ('wowPhoto');
let clickPhoto = document.getElementById ('clickPhoto');

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
      if (counters.countTime <= randomParameter) {
      ctx.clearRect(0, 0, widthCtx, heightCtx);
      draw();
      counters.countTime += 1;
      requestAnimationFrame(() => {allGame(randomParameter)});
    } else {
      counters.countTime = 0;
      globeAudio.pause();
      const newCountry = (randomParameter % 18);
      setTimeout (() => {
        counters.countSprite = 0;
        bigCountryPhoto (collectionBonuses.countries[newCountry]);
        ctx.drawImage(globe, 0, 0, 500, 500, 150, 100, 500, 500);
        nameAndFlagOfCountries.style.display = 'none';
      }, 5000);
      paintFlag (collectionBonuses.countries[newCountry]);
    }
};

function draw () {
  ctx.drawImage(globe, counters.countSprite, 0, 500, 500, 150, 100, 500, 500),
  counters.countSprite += 500;
  if (counters.countSprite > 8900) {
      counters.countSprite = 0;
  };
};

function bigCountryPhoto (path) {

  bigPhotoInAlbum.style.backgroundImage = `url(${path.pathPhoto})`;
  wowPhoto.play();
  setTimeout(() => {clickPhoto.play();},1200);
  freePlaceInAlbum();
  path.placeToAlbum = true;
  bigPhotoInAlbum.style.display = 'block';
  greatPhotoAlbum.style.display = 'block';
  setTimeout (() => {
    bigToLittlePhoto (1000,700,-50,0,150,path);
  }, 3000);

}

function bigToLittlePhoto (width,height,top,left,endPoint,object) {

  if (endPoint > 0) {
    bigPhotoInAlbum.style.width = `${width}px`;
    bigPhotoInAlbum.style.height = `${height}px`;
    bigPhotoInAlbum.style.top = `${top}px`;
    bigPhotoInAlbum.style.left = `${left}px`;

    const newWidth = width - 6;
    const newHeight = height -4;
    const newTop = top + 2;
    const newLeft = left + 2;
    const newEndPoint = endPoint - 1;

    requestAnimationFrame (() => {bigToLittlePhoto (newWidth,newHeight,newTop,newLeft,newEndPoint,object)});
  }
  else {
    bigPhotoInAlbum.style.display = 'none';
    collectionsPhotos[object.positionInAlbum].style.backgroundImage = `url(${collectionBonuses.countries[object.positionInAlbum].pathPhoto})`;
    bigPhotoInAlbum.style.width = `1000px`;
    bigPhotoInAlbum.style.height = `700px`;
    bigPhotoInAlbum.style.top = `0px`;
    bigPhotoInAlbum.style.left = `0px`;
  };

};

function paintFlag (object) {
    nameAndFlagOfCountries.style.top = object.countryPositionY;
    nameAndFlagOfCountries.style.left = object.countryPositionX;
    countryNameAndIcon[1].textContent = object.country;
    countryNameAndIcon[2].style.backgroundImage = `url(${object.pathToFlag})`
    nameAndFlagOfCountries.style.display = 'block';
};

function freePlaceInAlbum () {
  for (let i = 0; i < 18; i += 1) {
    if (collectionBonuses.countries[i].placeToAlbum) {
      collectionsPhotos[i].style.backgroundImage = `url(${collectionBonuses.countries[i].pathPhoto})`;
    };
  };
};

allCollectionButtonInTravel1[1].addEventListener ('click', () => {
  if (collectionBonuses.tickets > 0) {
  collectionBonuses.tickets -=1; 
  buttonsCollectionInTravel.style.display = 'none';
  setTimeout (() => {
    buttonsCollectionInTravel.style.display = 'block';
  },12000)
  buyOrFly();
  const randomFortune = Math.floor(Math.random()*90 + 270);
  allGame(randomFortune);
  globeAudio.play();}
  else {
    if (collectionBonuses.crystal > 1) {
      collectionBonuses.crystal -= 2;
      collectionBonuses.tickets += 1;
      buyOrFly();
    }
    else {
      const attention = document.createElement ('div');
      attention.classList.add ('notCrystals');
      attention.textContent = 'Not enough crystals to buy';
      airTravel.append(attention);
      setTimeout(()=>{attention.remove()},1500);
    };
  };
});

allCollectionButtonInTravel1[2].addEventListener ('click', () => {
  freePlaceInAlbum();
  greatPhotoAlbum.style.display = 'block';
});

backToGlobeSpin.addEventListener ('click', () => {
  greatPhotoAlbum.style.display = 'none';
});
