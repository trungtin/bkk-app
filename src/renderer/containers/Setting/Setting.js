/* @flow */

import React from 'react'
import { remote } from 'electron'

const { dialog } = remote

type SettingProps = {

}

export default class Setting extends React.Component {
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
          }, function (f) {
            console.log(f)
          })} >Choose</button>
        </div>
      </div>
    )
  }
}
