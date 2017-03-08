/* @flow */

import { createActions } from 'redux-actions'

export const TYPES: {[string]: string} = new Proxy({}, {
  get: function (target, name) {
    const validValue = [
      'ADD_LIBRARY_PATH',
      'ADD_BOOK_PATH',
      'ADD_BOOK_PATH_FAILURE',
    ]
    if (~validValue.indexOf(name)) {
      return name
    }
    throw new Error('Getting non-existant value `' + name + '`')
  }
})

type ActionsType = {
  [string]: Function
}

export const {
  addLibraryPath,
  addBookPath
}: ActionsType = createActions({ // eslint-disable-line no-redeclare
  [TYPES.ADD_LIBRARY_PATH]: path => ({ path })
}, TYPES.ADD_BOOK_PATH)
