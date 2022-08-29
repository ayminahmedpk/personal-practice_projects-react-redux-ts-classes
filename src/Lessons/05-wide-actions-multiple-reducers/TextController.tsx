

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { reset } from '../../Redux/05-wide-actions-multiple-reducers/globalActionCreators'
import { StateType } from '../../Redux/05-wide-actions-multiple-reducers/store'
import { textChange } from '../../Redux/05-wide-actions-multiple-reducers/text/textActionCreators'

// import React, { Component } from 'react'
// import { Dispatch } from 'redux'

// import { connect } from 'react-redux'

// import { reset } from '../../Redux/05-wide-actions-multiple-reducers/globalActionCreators'
// import { increment, decrement } from '../../Redux/05-wide-actions-multiple-reducers/count/countActionCreators'
// import { AppActions } from '../../Redux/05-wide-actions-multiple-reducers/store'

type TextControllerProps = {
  text       : string;
  textChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
  reset      : () => void;
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
        <button onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = (state: StateType) => ({
  text: state.textReducer.text
})

const mapDispatchToProps = {
  textChange,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(TextController)