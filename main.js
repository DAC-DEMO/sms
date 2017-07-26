const { app, BrowserWindow } = require('electron');

var path = require('path');
var url = require('url');

var init = require("./src/backend/config/init");

var win;

// Method to crenaet window :: more changes ::more changes
// thanks to github
function createWindow() {
    
    console.log(init);
    
    init.init();

    // Create the browser window.
    win = new BrowserWindow({ width: 1000, height: 1000 })

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // OPEN DEV TOOLS
    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', function() {
        win = null
    })
}
app.on('ready', createWindow)