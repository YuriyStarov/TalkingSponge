'use strict';

const { app, BrowserWindow } = require ('electron');
const { join } = require ('path');

let winPlus;

app.on ('ready', () => {

        winPlus = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1000,
        height: 700,
        webPreferences: { nodeIntegration: true, 
            contextIsolation: false        } 
    });

winPlus.loadFile (join(__dirname, "./index.html"));

winPlus.on("ready-to-show",() => {
    winPlus.show();
    })
});



