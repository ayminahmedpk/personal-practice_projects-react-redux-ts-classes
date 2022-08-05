import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from '../../Redux/09-async-fetch-thunk/store';

import BranchA from './BranchA'
import BranchB from './BranchB'
import BranchC from './BranchC'
import BranchD from './BranchD'
import BranchE from './BranchE'

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
            <BranchE/>
          </div>
        </div>
      </Provider>
    )
  }
}
