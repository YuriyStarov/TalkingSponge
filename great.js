const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const { join } = require('path');

const inputFile = join(__dirname, "./data.json");
let parsedCollectionBonuses;
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

let winPlus;

app.on('ready', () => {
    try {
        const data = fs.readFileSync(inputFile, 'utf8');
        const parsedData = JSON.parse(data);
        parsedCollectionBonuses = parsedData;
    } catch (err) {
        console.error(`Error reading file: ${err.message}`);
    }
    winPlus = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1000,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    winPlus.setAlwaysOnTop(false);
    winPlus.webContents.openDevTools();

    ipcMain.on('get-data', (event) => {
        if (parsedCollectionBonuses.timestamp) {
            event.returnValue = parsedCollectionBonuses;
            return;
        }
        event.returnValue = collectionBonuses;
    });

    ipcMain.handle('sendVariableToMainProcess', (event, arg) => {
        save(arg); 
    });

    winPlus.loadFile(join(__dirname, "./index.html"));

    winPlus.on("ready-to-show", () => {
        winPlus.show();
    });
});

