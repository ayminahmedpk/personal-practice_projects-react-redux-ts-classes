

import React, { Component } from 'react'

import FlexibleController from './FlexibleController'

type FlexibleControllerState = {
  role: string;
};

export default class BranchD extends Component<{}, FlexibleControllerState> {
  
  constructor(props: {}) {
    super(props)
    this.state = { role: "controlCount" }
  }

  flipRole = () => {
    if (this.state.role === 'controlCount') {
      this.setState({role: 'controlText'})
      return;
    }
    this.setState({role: 'controlCount'})
  }

  render() {
    return (
      <div className='branch'>
        <p className="branch__name">
          Branch D <button onClick={this.flipRole}>Flip role</button>
        </p>
        <FlexibleController role={this.state.role}/>
      </div>
    )
  }
}
