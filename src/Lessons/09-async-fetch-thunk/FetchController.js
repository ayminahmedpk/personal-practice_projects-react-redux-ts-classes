import React, { Component } from 'react'

import { connect } from 'react-redux'

import { makeRequest } from '../../Redux/09-async-fetch-thunk/users/usersActionCreators'

export class FetchController extends Component {
  render() {
    return (
      <>
        <div>FetchController</div>
        <button onClick={this.props.makeRequest}>Make Request</button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  makeRequest: () => dispatch(makeRequest())
})

export default connect(null, mapDispatchToProps)(FetchController)