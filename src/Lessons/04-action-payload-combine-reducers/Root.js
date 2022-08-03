import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from '../../Redux/04-action-payload-combine-reducers/store';

import BranchA from './BranchA'
import BranchB from './BranchB'
import BranchC from './BranchC'

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
          </div>
        </div>
      </Provider>
    )
  }
}
