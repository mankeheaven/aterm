export const env = {
  isDev: window.electron.process.env.NODE_ENV === "development",
  isProd: window.electron.process.env.NODE_ENV === "production",
  isWindows: window.electron.process.platform === "win32",
  isMac: window.electron.process.platform === "darwin",
  isLinux: window.electron.process.platform === "linux"
};