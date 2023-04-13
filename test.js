'use strict';
const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const jison = require('jison');
const { join } = require('path');

let winPlus;
const inputFile = join(__dirname, "./data.json");

let collection = null;
app.on('ready', () => {

    winPlus = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1000,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    try {
        const data = fs.readFileSync(inputFile, 'utf8');
        const parser = new jison.Parser();
        const parsedData = parser.parse(data);
        collection = parsedData;
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
    }
    // const readSevedData = new CustomEvent('readSevedData', {
    //     detail: {
    //         variable: myVariable
    //     }
    // });

    // window.dispatchEvent(readSevedData);

    winPlus.loadFile(join(__dirname, "./index.html"));

    winPlus.on("ready-to-show", () => {
        winPlus.show();
    })
});

let data = {
    coins: 20,
    crystal: 10,
    foods: [],
    tickets: 5,

    dirtBobs: 1,

    pleasureLevels: [100, 50, 100, 100],

    countries: []
    // Add any other fields you need
  };

  ipcMain.on('get-data', (event) => {
    event.returnValue = collection;
  });

  // Listen for the "before-quit" event
  app.on('before-quit', () => {
    // Set the timestamp field to the current date/time
    data.timestamp = Math.floor(Date.now() / 1000);
  
    // Convert the data variable to JSON format
    const jsonData = JSON.stringify(data);
  
    // Write the JSON data to disk
    fs.writeFile('data.json', jsonData, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Data saved successfully.');
    });
  });






//  RENDER PROCCES

let ipcRenderer;
let loadData
if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    // Running in the Electron desktop environment
    const { ipcRenderer } = require('electron');
    loadData = ipcRenderer.sendSync('get-data');
    // console.log(loadData);

} else {
    // Running in the web environment or a non-Electron desktop environment
    ipcRenderer = null;
}

const data = {

    coins: 20,
    crystal: 10,
    foods: [],
    tickets: 5,

    dirtBobs: 1,

    pleasureLevels: [100, 50, 50, 50],

    countries: []

};

let collectionBonuses;
console.log(loadData);
if (loadData) {
    collectionBonuses = loadData;
} else {
    collectionBonuses = data;
}

// Do something with the data
console.log(loadData);