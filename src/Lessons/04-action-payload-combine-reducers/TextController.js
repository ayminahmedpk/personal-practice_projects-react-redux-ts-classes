

import React, { Component } from 'react'
import { connect } from 'react-redux'

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
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  text: state.textReducer.text
})

const mapDispatchToProps = {
  textChange
}

export default connect(mapStateToProps, mapDispatchToProps)(TextController)