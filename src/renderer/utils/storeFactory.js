import { createStore, applyMiddleware, compose } from 'redux'
// import thunk from 'redux-thunk'
// import createSagaMiddleware, { END } from 'redux-saga'
import { createEpicMiddleware } from 'redux-observable'
import reducer from '../redux'
import epics from '../epics'

const epicMiddleware = createEpicMiddleware(epics)

const __DEV__ = process.env.NODE_ENV === 'development'

export default function (initialState) {
  let enhancedCreateStore
  // const sagaMiddleware = createSagaMiddleware()
  if (__DEV__/* && __CLIENT__ && __DEVTOOLS__ */) {
    // const { persistState } = require('redux-devtools')
    // const DevTools = require('./components/libs/DevTools')
    enhancedCreateStore = compose(
      applyMiddleware(
        // thunk,
        // sagaMiddleware
        epicMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : undefined/* DevTools.instrument() */,
      // persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore)
  } else {
    enhancedCreateStore = compose(
        applyMiddleware(
          // thunk,
          // sagaMiddleware
          epicMiddleware
        )
    )(createStore)
  }
  const store = enhancedCreateStore(
    reducer,
    initialState
  )

  if (__DEV__ && module.hot) {
    module.hot.accept(() => {
      const newReducer = require('../redux').default
      const newEpics = require('../epics').default
      store.replaceReducer(newReducer)
      epicMiddleware.replaceEpic(newEpics)
    })
  }

  // store.runSaga = sagaMiddleware.run
  // store.close = () => store.dispatch(END)
  return store
}
