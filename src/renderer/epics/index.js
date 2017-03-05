import { combineEpics } from 'redux-observable'
import * as indexingEpics from './indexing'

export default combineEpics(...Object.keys(indexingEpics).map(k => indexingEpics[k]))
