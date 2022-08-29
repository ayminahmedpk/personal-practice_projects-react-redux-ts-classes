import React, { Component } from 'react'

import { Provider } from 'react-redux'
import store from '../../Redux/03-redux-devtools/store';

import BranchA from './BranchA'
import BranchB from './BranchB'

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='root'>
          <p className="root__name">Root</p>
          <div className="branches">
            <BranchA/>
            <BranchB/>
          </div>
        </div>
      </Provider>
    )
  }
}
