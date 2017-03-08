import {app, BrowserWindow} from 'electron'
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer'
import mkdirp from 'mkdirp'
import path from 'path'
import {enableLiveReload} from 'electron-compile'

global.paths = {
  books: path.resolve(app.getPath('userData'), 'data/books')
}

Object.keys(global.paths).map(p => mkdirp.sync(global.paths[p]))

let mainWindow = null

app.on('window-all-closed', () => {
  app.quit()
})

app.on('ready', () => {
  Promise.all([
    installExtension(REACT_DEVELOPER_TOOLS),
    installExtension(REDUX_DEVTOOLS)
  ])
    .then((name) => console.log(`Added Extension:  ${name.join(', ')}`))
    .catch((err) => console.log('An error occurred: ', err))
  enableLiveReload({strategy: 'react-hmr'})
  mainWindow = new BrowserWindow({
    width: 700,
    height: 760,
    titleBarStyle: 'hidden-inset'
  })

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`)
})
