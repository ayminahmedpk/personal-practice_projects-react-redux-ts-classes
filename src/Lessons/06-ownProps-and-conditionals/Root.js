import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from '../../Redux/06-ownProps-and-conditionals/store';

import BranchA from './BranchA'
import BranchB from './BranchB'
import BranchC from './BranchC'
import BranchD from './BranchD'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='root'>
          <p className="root__name">Root</p>
          <div className="branches">
            <BranchA/>
            <BranchB/>
            <BranchC/>
            <BranchD/>
          </div>
        </div>
      </Provider>
    )
  }
}
