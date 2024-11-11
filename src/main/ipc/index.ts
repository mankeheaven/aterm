import { ipcMain } from 'electron'

export const handleIpc = () => {
  // IPC test
  ipcMain.on('ping', () => console.log('pong'))
}
