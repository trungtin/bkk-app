/* @flow */
import { handleActions } from 'redux-actions'

import { TYPES } from './actions'

const DEFAULT_STATE = {}

export default handleActions({
  [TYPES.ADD_LIBRARY_PATH]: state => state
}, DEFAULT_STATE)
