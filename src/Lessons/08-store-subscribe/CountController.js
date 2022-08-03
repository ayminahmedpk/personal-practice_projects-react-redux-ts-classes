import React, { Component } from 'react'

import { connect } from 'react-redux'

import { reset } from '../../Redux/05-wide-actions-multiple-reducers/globalActionCreators'
import { increment, decrement } from '../../Redux/02-dispatch-and-actions/count/countActionCreators'

class CountController extends Component {
  render() {
    return (
      <div className='component'>
        <p className="component__name">CountController</p>
        <button onClick={this.props.decrement}>{'<'}</button>
        <button onClick={this.props.increment}>{'>'}</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}

// 1. Expects connect to call this with the dispatch, and uses that to return
//    handlers in the form of props that will trigger a dispatch of those action
//    creators.
const mapDispatchToProps = (dispatch) => {
  return {
    increment : () => dispatch(increment()),
    decrement : () => dispatch(decrement()),
    reset     : () => dispatch(reset()),
  }
}



// Gets the right dispatch and sends it to the second argument, which here is
// mapDispatchToProps. Notice, since it is the second argument, we must let
// JS know this by passing null as the first argument (since we don't need to
// see state values in this component, so we don't need mapStateToProps here).

// Returns an HOC in the form of a function containing additional props, which
// adds them to CountController when run with it as an argument.
export default connect(null, mapDispatchToProps)(CountController);