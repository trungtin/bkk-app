import { combineEpics } from 'redux-observable'
import * as indexingEpics from './indexing'

export default combineEpics(...Object.values(indexingEpics))
