import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

const render = () => {
  // NB: We have to re-require MyApp every time or else this won't work
  // We also need to wrap our app in the AppContainer class
  const Main = require('./components/main').default
  ReactDOM.render(<AppContainer><Main /></AppContainer>, document.getElementById('app'))
}

render()

if (module.hot) { module.hot.accept(render) }
