/* @flow */

import { createActions } from 'redux-actions'

export const TYPES = new Proxy({}, {
  get: function (target, name) {
    const validValue = [
      'ADD_LIBRARY_PATH'
    ]
    if (~validValue.indexOf(name)) {
      throw new Error('Getting non-existant value `' + name + '`')
    }
    return name
  }
})

type ActionsType = {
  openLibraryPath: Function
}

export const { openLibraryPath }: ActionsType = createActions({ // eslint-disable-line no-redeclare
}, TYPES.ADD_LIBRARY_PATH)
