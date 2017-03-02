import React from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (<nav className='pt-navbar .modifier'>
      <div className='pt-navbar-group pt-align-left'>
        <div className='pt-navbar-heading'>BKK</div>
        <input className='pt-input' placeholder='Search...' type='text' />
      </div>
      <div className='pt-navbar-group pt-align-right'>
        <Link replace to='/'>
          <button className='pt-button pt-minimal pt-icon-home'>Home</button>
        </Link>
        <button className='pt-button pt-minimal pt-icon-document'>Files</button>
        <span className='pt-navbar-divider' />
        <button className='pt-button pt-minimal pt-icon-user' />
        <button className='pt-button pt-minimal pt-icon-notifications' />
        <Link replace to='/setting'>
          <button className='pt-button pt-minimal pt-icon-cog' />
        </Link>
      </div>
    </nav>)
  }
}

Nav.propTypes = {
}
