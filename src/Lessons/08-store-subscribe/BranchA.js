import React, { Component } from 'react'

import DisplayComponent from './DisplayComponent'

export default class BranchA extends Component {
  render() {
    return (
      <div className='branch'>
        <p className="branch__name">Branch A</p>
        <DisplayComponent/>
      </div>
    )
  }
}
