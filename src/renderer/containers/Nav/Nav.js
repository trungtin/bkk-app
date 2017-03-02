import React from 'react'

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
        <button className='pt-button pt-minimal pt-icon-home'>Home</button>
        <button className='pt-button pt-minimal pt-icon-document'>Files</button>
        <span className='pt-navbar-divider' />
        <button className='pt-button pt-minimal pt-icon-user' />
        <button className='pt-button pt-minimal pt-icon-notifications' />
        <button className='pt-button pt-minimal pt-icon-cog' />
      </div>
    </nav>)
  }
}

Nav.propTypes = {
}
