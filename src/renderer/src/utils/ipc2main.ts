export const ipc2main = async (channel: string, ...args: any[]) => {
  return await window.electron.ipcRenderer.invoke(channel, ...args)
}