import React, { Component } from 'react'

import CountController from './CountController'

export default class BranchB extends Component {
  render() {
    return (
      <div className='branch'>
        <p className="branch__name">Branch B</p>
        <CountController/>
      </div>
    )
  }
}
