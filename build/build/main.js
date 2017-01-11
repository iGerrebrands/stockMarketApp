'use strict';

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

var path = require('path');
var url = require('url');

var win = void 0;

function createWindow() {
		win = new BrowserWindow({ width: 800, height: 500 });

		win.loadURL(url.format({
				pathname: path.join(__dirname, '../app/index.html'),
				protocol: 'file:',
				slashes: true
		}));

		//win.webContents.openDevTools();

		win.on('closed', function () {
				win = null;
		});
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
		if (process.platform !== 'darwin') {
				app.quit();
		}
});

app.on('activate', function () {
		if (win === null) {
				createWindow();
		}
});