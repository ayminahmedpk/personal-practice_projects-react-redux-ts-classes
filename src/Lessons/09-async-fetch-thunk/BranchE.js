import React, { Component } from 'react'

import FetchController from './FetchController'

export default class BranchE extends Component {
  render() {
    return (
      <div className='branch'>
        <p className="branch__name">Branch E</p>
        <FetchController/>
      </div>
    )
  }
}
