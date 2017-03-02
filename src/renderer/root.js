import React, { Component } from 'react'
import { Provider } from 'react-redux'

import RootRoute from './routes/root'

type RootProps = {
  store: Object
}

export default class Root extends Component {
  props: RootProps

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <RootRoute />
      </Provider>
    )
  }
}
