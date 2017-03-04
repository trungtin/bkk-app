import * as RxDB from 'rxdb'

import * as Schema from './schema'

RxDB.plugin(require('pouchdb-adapter-idb'))

const collections = Object.keys(Schema).map(k => Schema[k])

let dbPromise = null

const _create = async function () {
  logger.verbose('DatabaseService: creating database..')
  const db = await RxDB.create({
    name: 'Sophie',
    adapter: 'idb',
    password: 'DumbSh1tP433w0rd'
  })
  logger.info('DatabaseService: created database')

    // create collections
  logger.verbose('DatabaseService: creating collections...')
  await Promise.all(collections.map(colData => db.collection(colData)))
  logger.info('DatabaseService: created collections')

  global['db'] = db

  return db
}

export function get () {
  if (!dbPromise) { dbPromise = _create() }
  return dbPromise
}
