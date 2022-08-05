import React, { Component } from 'react'

import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppActions, StateType } from '../../Redux/09-async-fetch-thunk/store'
import { userActions } from '../../Redux/09-async-fetch-thunk/users/userActions'

import { makeRequest } from '../../Redux/09-async-fetch-thunk/users/usersActionCreators'

type FetchControllerProps = {
  makeRequest: () => void;
}

export class FetchController extends Component<FetchControllerProps> {
  render() {
    return (
      <>
        <div>FetchController</div>
        <button onClick={this.props.makeRequest}>Make Request</button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, {}, AppActions>) => ({
  makeRequest: () => dispatch(makeRequest())
})

export default connect(null, mapDispatchToProps)(FetchController)