import React, { Component } from 'react'

import { connect } from 'react-redux'

import { textChange } from '../../Redux/04-action-payload-combine-reducers/text/textActionCreators'
import { increment, decrement } from '../../Redux/02-dispatch-and-actions/count/countActionCreators'
import { reset } from '../../Redux/05-wide-actions-multiple-reducers/globalActionCreators'

export class FlexibleController extends Component {

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

const mapStateToProps = (state, ownProps) => {
  if (ownProps.role == 'controlText') {
    return { text: state.textReducer.text }
  }
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.role == 'controlText') {
    return {
      textChange : (event) => dispatch(textChange(event)),
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