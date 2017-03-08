/* @flow */

import React from 'react'
import { connect } from 'react-redux'

import { addLibraryPath } from '../../redux/actions'
import { remote } from 'electron'

const { dialog } = remote

const mapActionsToProps = {
  addLibraryPath
}

type SettingProps = {
  addLibraryPath: Function
}

class Setting extends React.Component {
  props: SettingProps

  state: {

  }

  render () {
    return (
      <div className='container-fluid'>
        <div className='pt-control-group'>
          <div className='pt-input-group'>
            <span className='pt-icon pt-icon-folder-open' />
            <input type='text' className='pt-input' style={{ paddingRight: '94px' }} disabled />
          </div>
          <button className='pt-button pt-intent-primary' onClick={() => dialog.showOpenDialog({
            properties: ['openDirectory', 'createDirectory', 'promptToCreate'],
            title: 'Select storage folder'
          }, f => {
            this.props.addLibraryPath(f)
          })} >Choose</button>
        </div>
      </div>
    )
  }
}

export default connect(undefined, mapActionsToProps)(Setting)
