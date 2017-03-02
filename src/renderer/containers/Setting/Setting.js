/* @flow */

import React from 'react'

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
            <span className='pt-icon pt-icon-people' />
            <input type='text' className='pt-input' style={{ paddingRight: '94px' }} disabled />
          </div>
          <button className='pt-button pt-intent-primary'>Choose</button>
        </div>
      </div>
    )
  }
}
