import React from 'react'
import Nav from './Nav/Nav'

type MainProp = {
  children: Object
}

export default class Main extends React.Component {
  props: MainProp

  constructor () {
    super()
  }

  render () {
    return <div>
      <Nav />
      {this.props.children}
    </div>
  }
}
