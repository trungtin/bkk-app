import { TYPES } from '../redux/actions'

export function addLibraryPath (action$, store) {
  return action$.ofType(TYPES.ADD_LIBRARY_PATH)
    .map(action => action.payload.path)
    .filter(p => !!p)
}
