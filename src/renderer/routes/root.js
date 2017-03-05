/* @flow */

import React from 'react'
import {
  Router,
  Route,
  Switch
} from 'react-router-dom'

import Main from '../containers/main'
import Setting from '../containers/Setting/Setting'
import Home from '../containers/Home/Home'

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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/setting' component={Setting} />
          </Switch>
        </div>
      </Router>
    )
  }
}
