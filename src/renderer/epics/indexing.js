import { remote } from 'electron'

import { TYPES, addBookPath } from '../redux/actions'
import fs from 'fs'
import path from 'path'
import Rx from 'rxjs'

import { get } from '../storage/db'

import epubMetadataParser from 'epub-metadata-parser'

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
            filePath,
            fileExt
          })
        }
        return Rx.Observable.empty()
      }
    })
    .filter(p => typeof p === 'object')
    .map(p => addBookPath(p))
    .catch(e => console.error(e))
}

const parseAsObservable = Rx.Observable.bindCallback(epubMetadataParser.parse)

export function watchAddBookPath (action$, store) {
  let db = void 0
  let payload = void 0
  return Rx.Observable.combineLatest(
    Rx.Observable.fromPromise(get()),
    action$.ofType(TYPES.ADD_BOOK_PATH)
  )
  .mergeMap(([_db, { payload: _payload }]) => {
    db = _db
    payload = _payload
    const obs = parseAsObservable(payload.filePath, remote.getGlobal('paths').books)
    return obs
  })
  .mergeMap(meta => {
    // const book = await db.collections.book.find({ title: '' })
    // db.collections.file.insert(payload)
    console.log(meta)
    console.log(remote.getGlobal('paths'))
    return ({ type: 'DONE' })
  })
  .catch(err => {
    console.error(err)
    return ({ type: TYPES.ADD_BOOK_PATH_FAILURE, payload: err })
  })
}
