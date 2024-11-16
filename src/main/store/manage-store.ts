import { BrowserWindow } from "electron"

class ManageStore {
  mainWindow?: BrowserWindow

  setMainWindow(mainWindow: BrowserWindow){
   this.mainWindow = mainWindow 
  }

}

const manageStore = new ManageStore()
export default manageStore