//importar el objeto electro en la app pricipal
const electron = require('electron');
//2 variable la app, y el browserwindows
//(para manejar el explorador de chrome	para mostrar archivos y  cargar redes)
const { app, BrowserWindow } = electron;
//utilizar facilmente archivos, direcciones y redes
const path = require('path');
const url = require('url');
//variable global
let win;

function createWindow() {
    //ventana principal
    win = new BrowserWindow({ width: 1300, height: 800, icon: path.join(__dirname, 'img/logo.png') });

    //cargar archivo
    win.loadURL(url.format({
        //enviar propiedades
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
}

app.on('ready', createWindow);