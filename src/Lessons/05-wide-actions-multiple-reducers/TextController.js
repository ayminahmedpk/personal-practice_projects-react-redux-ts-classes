

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { reset } from '../../Redux/05-wide-actions-multiple-reducers/globalActionCreators'
import { textChange } from '../../Redux/04-action-payload-combine-reducers/text/textActionCreators'

export class TextController extends Component {
  render() {
    return (
      <div className='component'>
        <p className="component__name">TextController</p>
        <input
          type="text"
          value={this.props.text}
          onChange={this.props.textChange}
        />
        <button onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  text: state.textReducer.text
})

const mapDispatchToProps = {
  textChange,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(TextController)