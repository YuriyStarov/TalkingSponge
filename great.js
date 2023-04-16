const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const { join } = require('path');

let winPlus;

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

    winPlus.setAlwaysOnTop(false);
    winPlus.webContents.openDevTools();

    winPlus.loadFile(join(__dirname, "./index.html"));

    winPlus.on("ready-to-show", () => {
        winPlus.show();
    });
});

