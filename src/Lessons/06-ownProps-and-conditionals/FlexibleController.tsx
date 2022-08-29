import React, { Component } from 'react'

import { connect } from 'react-redux'

import { textChange } from '../../Redux/06-ownProps-and-conditionals/text/textActionCreators'
import { increment, decrement } from '../../Redux/06-ownProps-and-conditionals/count/countActionCreators'
import { reset } from '../../Redux/06-ownProps-and-conditionals/globalActionCreators'
import { AppActions, StateType } from '../../Redux/06-ownProps-and-conditionals/store'
import { Dispatch } from 'redux'

type FlexibleControllerProps = {
  role   : 'controlText' | 'controlCount';

  text?  : string;
  textChange? : (event: React.ChangeEvent<HTMLInputElement>) => void;

  count? : number;
  increment?: () => void;
  decrement?: () => void;

  reset?: () => void;
}

export class FlexibleController extends Component<FlexibleControllerProps> {

  render() {
    return (
      <div className='component'>
        <p className="component__name">FlexibleController</p>
        {this.props.role == 'controlText'? (
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

const mapStateToProps = (state: StateType, ownProps:FlexibleControllerProps) => {
  if (ownProps.role == 'controlText') {
    return { text: state.textReducer.text }
  }
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch<AppActions>, ownProps:FlexibleControllerProps) => {
  if (ownProps.role == 'controlText') {
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