import { is } from '@electron-toolkit/utils'
import { BrowserWindow, Menu, shell } from 'electron'
import { join } from 'path'
import manageStore from '../store/manage-store'

function createWindow() {
  const mainWindow = new BrowserWindow({
    title:"aterm",
    width: 1000,
    height: 700,
    minWidth: 800,
    minHeight: 500,
    backgroundColor: "#1e1e1e",

    frame: false,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#3c3c3c",
      symbolColor: "#bcbcbc",
      height: 32,
    },
    
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      enableBlinkFeatures: "Serial",
      spellcheck: false,
      webSecurity: false,
      webviewTag: true,
      sandbox: false,
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  const menu = Menu.buildFromTemplate([])
  Menu.setApplicationMenu(menu)
  mainWindow.setMenu(menu)

  manageStore.setMainWindow(mainWindow)
}

export default createWindow
