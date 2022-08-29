import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment, decrement} from '../../Redux/04-action-payload-combine-reducers/count/countActionCreators';
import {Dispatch} from 'redux';
import {CountActions} from '../../Redux/04-action-payload-combine-reducers/count/countActions';


type CountControllerProps = {
  decrement: () => void;
  increment: () => void;
}

class CountController extends Component<CountControllerProps> {
  render() {
    return (
      <div className='component'>
        <p className="component__name">CountController</p>
        <button onClick={this.props.decrement}>{'<'}</button>
        <button onClick={this.props.increment}>{'>'}</button>
      </div>
    )
  }
}

// 1. Expects connect to call this with the dispatch, and uses that to return
//    handlers in the form of props that will trigger a dispatch of those action
//    creators.
const mapDispatchToProps = (dispatch: Dispatch<CountActions>) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
}



// Gets the right dispatch and sends it to the second argument, which here is
// mapDispatchToProps. Notice, since it is the second argument, we must let
// JS know this by passing null as the first argument (since we don't need to
// see state values in this component, so we don't need mapStateToProps here).

// Returns an HOC in the form of a function containing additional props, which
// adds them to CountController when run with it as an argument.
export default connect(null, mapDispatchToProps)(CountController);