

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StateType } from '../../Redux/04-action-payload-combine-reducers/store'
import { textChange } from '../../Redux/04-action-payload-combine-reducers/text/textActionCreators'
import { textChangeType } from '../../Redux/04-action-payload-combine-reducers/text/textActionCreators'
import {Dispatch} from 'redux';
import { textActions } from '../../Redux/04-action-payload-combine-reducers/text/textActions'

type TextControllerProps = {
  text: string;
  textChange: textChangeType;
}

export class TextController extends Component<TextControllerProps> {
  render() {
    return (
      <div className='component'>
        <p className="component__name">TextController</p>
        <input
          type="text"
          value={this.props.text}
          onChange={this.props.textChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: StateType) => ({
  text: state.textReducer.text
})

// const mapDispatchToProps = { textChange }
const mapDispatchToProps = (dispatch: Dispatch<textActions>) => ({
  textChange: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(textChange(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(TextController)