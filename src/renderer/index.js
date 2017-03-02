import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { FocusStyleManager } from '@blueprintjs/core'

FocusStyleManager.onlyShowFocusOnTabs()

const store = require('./utils/storeFactory').default({})

const render = () => {
  // NB: We have to re-require MyApp every time or else this won't work
  // We also need to wrap our app in the AppContainer class
  const Root = require('./root').default
  ReactDOM.render(<AppContainer>
    <Root
      store={store}
    />
  </AppContainer>, document.getElementById('app'))
}

render()

if (module.hot) { module.hot.accept(render) }
