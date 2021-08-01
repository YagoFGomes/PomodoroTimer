const { app, BrowserWindow } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      resizable: false,
      webPreferences: {
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
        contextIsolation: false
      }
    })
    
  
    win.loadFile('./www/pages/index.html')
}

app.whenReady().then(() => {
  createWindow()
})