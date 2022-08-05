

import React, { Component } from 'react'

import { connect } from 'react-redux'

import { textChange } from '../../Redux/04-action-payload-combine-reducers/text/textActionCreators'
import { increment, decrement } from '../../Redux/02-dispatch-and-actions/count/countActionCreators'
import { reset } from '../../Redux/05-wide-actions-multiple-reducers/globalActionCreators'

import {Dispatch} from 'redux';
import { TextActions } from '../../Redux/09-async-fetch-thunk/text/textActions'
import { CountActions } from '../../Redux/09-async-fetch-thunk/count/countActions'
import {StateType} from '../../Redux/09-async-fetch-thunk/store';


// type FlexibleControllerOwnProps = {
//   role: string;
//   text: string;
// }

// type FlexibleControllerReduxProps = {
//   decrement: () => void;
//   increment: () => void;
//   reset    : () => void;
// }

// type FlexibleControllerProps = FlexibleControllerOwnProps & FlexibleControllerReduxProps;

type FlexibleControllerProps = {
  role        : string;
  text?       : string;
  decrement?  : () => void;
  increment?  : () => void;
  reset       : () => void;
  textChange? : (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class FlexibleController extends Component<FlexibleControllerProps> {

  render() {
    return (
      <div className='component'>
        <p className="component__name">FlexibleController</p>
        {this.props.role === 'controlText'? (
          <>
            <p>Controlling text</p>
            <input type="text" value={this.props.text} onChange={this.props.textChange} />
          </>
        ) : (
          <>
            <p>Controlling Count</p>
            <button onClick={this.props.decrement}>{'<'}</button>
            <button onClick={this.props.increment}>{'>'}</button>
          </>
        )}
        <button onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = (state: StateType, ownProps: {role: string;}) => {
  if (ownProps.role === 'controlText') {
    return { text: state.textReducer.text }
  }
  return {}
}

const mapDispatchToProps = (
  dispatch: Dispatch<TextActions | CountActions>,
  ownProps: {role: string;}
) => {
  if (ownProps.role === 'controlText') {
    return {
      textChange : (event: React.ChangeEvent<HTMLInputElement>) => dispatch(textChange(event)),
      reset      : () => dispatch(reset()),
    }
  }
  return {
        increment : () => dispatch(increment()),
        decrement : () => dispatch(decrement()),
        reset     : () => dispatch(reset()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlexibleController)