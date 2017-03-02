import React, { Component } from 'react'
import { Provider } from 'react-redux'

import RootRoute from './routes/root'

import createBrowserHistory from 'history/createBrowserHistory'
import { syncHistoryWithStore } from 'react-router-redux'

type RootProps = {
  store: Object
}

export default class Root extends Component {
  props: RootProps

  constructor (props) {
    super(props)
    this.history = syncHistoryWithStore(createBrowserHistory(), props.store)
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <RootRoute history={this.history} />
      </Provider>
    )
  }
}
