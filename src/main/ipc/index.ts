import { ipcMain } from 'electron'

export const handleIpc = () => {
  ipcMain.handle('ping', () => {
    console.log('pong')
    return "pong"
  })
}
