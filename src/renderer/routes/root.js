/* @flow */

import React from 'react'
import {
  Router,
  Route
} from 'react-router'

import Main from '../containers/main'
import Setting from '../containers/Setting/Setting'

import createHashHistory from 'history/createHashHistory'

const history = createHashHistory()

type RootRouteProps = {
}

export default class RootRoute extends React.Component {
  props: RootRouteProps

  state: {

  }

  render () {
    return (
      <Router
        history={history}
        // onUpdate={logPageView}
        // render={applyRouterMiddleware(useScroll(() => {
        //   if (domain === 'www') {

        //     return [0, 0]
        //   }
        //   return true
        // }))}
      >
        <div>
          <Route component={Main} />
          <Route path='/setting' component={Setting} />
        </div>
      </Router>
    )
  }
}
