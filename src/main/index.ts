import { app, BrowserWindow } from 'electron'
import { optimizer } from '@electron-toolkit/utils'
import createWindow from './window'
import { handleIpc } from './ipc'
import manageStore from './store/manage-store'
import { isDev } from './utils/env'

app.commandLine.appendSwitch('ignore-certificate-errors')
app.commandLine.appendSwitch('disable-site-isolation-trials')

const getTheLock = app.requestSingleInstanceLock()

if (!getTheLock) {
  app.quit()
} else {
  app.on('second-instance', (event) => {
    event.preventDefault()
    if (!!manageStore?.mainWindow) {
      const mainWindow = manageStore.mainWindow
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })

  app.whenReady().then(() => {

    app.on('browser-window-created', (_, window) => {
      optimizer.watchWindowShortcuts(window)
    })

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })

    handleIpc()

    createWindow()

    isDev() && manageStore?.mainWindow?.webContents.openDevTools();
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
}
