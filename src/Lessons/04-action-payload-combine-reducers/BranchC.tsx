import React, { Component } from 'react'

import TextController from './TextController'

export default class BranchC extends Component {
  render() {
    return (
      <div className='branch'>
        <p className="branch__name">Branch C</p>
        <TextController/>
      </div>
    )
  }
}
