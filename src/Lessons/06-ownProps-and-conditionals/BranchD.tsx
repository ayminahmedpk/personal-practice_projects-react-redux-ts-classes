import React, { Component } from 'react'

import FlexibleController from './FlexibleController'

type BranchDState = { role: 'controlCount' | 'controlText'; }

export default class BranchD extends Component<{}, BranchDState> {
  
  constructor(props: {}) {
    super(props)
    this.state = { role: "controlCount" }
  }

  flipRole = () => {
    if (this.state.role == 'controlCount') {
      this.setState({role: 'controlText'})
      return;
    }
    this.setState({role: 'controlCount'})
  }

  render() {
    return (
      <div className='branch'>
        <p className="branch__name">Branch D</p>
        <button onClick={this.flipRole}>Switch branch role</button>
        <FlexibleController role={this.state.role}/>
      </div>
    )
  }
}
