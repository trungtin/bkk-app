import { TYPES, addBookPath } from '../redux/actions'
import fs from 'fs'
import path from 'path'
import Rx from 'rxjs'

import { get } from '../storage/db'

const ALLOWED_EXTENSIONS = ['.epub']

function resolve (dir) {
  return function (file) {
    return path.resolve(dir, file)
  }
}

const readdirFullPath = function (dir, cb) {
  fs.readdir(dir, function (err, files) {
    cb(err, files && files.map(resolve(dir)))
  })
}

const readDirAsObservable = Rx.Observable.bindNodeCallback(readdirFullPath)

export function watchAddLibraryPath (action$, store) {
  return action$.ofType(TYPES.ADD_LIBRARY_PATH)
    // pluck the path (array of path actually) and filter empty one
    .map(action => action.payload.path.filter(p => p.length))
    // Now filter the empty array
    .filter(pathArray => {
      return Array.isArray(pathArray) && !!pathArray.length
    })
    // And readdir as an observable, then merge into the same stream
    .mergeMap(pathArray => {
      return Rx.Observable.merge(...pathArray.map(p => readDirAsObservable(p)))
    })
    // Then flatten the array
    .mergeMap(x => x)
    // Recusively travel the path
    .expand(filePath => {
      // Break point when catch the allowed file
      if (typeof filePath !== 'string') {
        return Rx.Observable.empty()
      }
      const stat = fs.statSync(filePath)
      if (stat.isDirectory()) {
        return readDirAsObservable(filePath).mergeMap(x => x)
      } else {
        const fileExt = path.extname(filePath)
        if (~ALLOWED_EXTENSIONS.indexOf(fileExt.toLowerCase())) {
          return Rx.Observable.of({
            path: filePath,
            ext: fileExt
          })
        }
        return Rx.Observable.empty()
      }
    })
    .filter(p => typeof p === 'object')
    .map(p => addBookPath(p))
}

export function watchAddBookPath (action$, store) {
  return Rx.Observable.combineLatest(
    Rx.Observable.fromPromise(get()),
    action$.ofType(TYPES.ADD_BOOK_PATH)
  )
    .map((db, payload) => {
      return Rx.Observable.of(db, payload)
    })
}
