import { BrowserWindow, ipcMain } from "electron";

ipcMain.handle("toggleWindow", () => {
  const mainWindow = BrowserWindow.getFocusedWindow();
  if (mainWindow?.isMaximized()) {
    mainWindow.restore();
  } else {
    mainWindow?.maximize();
  }
});