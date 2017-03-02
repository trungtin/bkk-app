/* @flow */

import React from 'react'
import {
  Router,
  Route
} from 'react-router'

import Main from '../containers/main'

type RootRouteProps = {
  history: Object
}

export default class RootRoute extends React.Component {
  props: RootRouteProps

  state: {

  }

  render () {
    const { history } = this.props
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
        <Route path='/' component={Main} />
      </Router>
    )
  }
}
