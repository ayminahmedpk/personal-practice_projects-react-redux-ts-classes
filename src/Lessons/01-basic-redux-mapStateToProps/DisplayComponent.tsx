import React, { Component } from 'react'

import { connect } from 'react-redux';
import { CountStateType } from '../../Redux/01-basic-redux-mapStateToProps/count/countReducer';

type DisplayComponentProps = {
  count: number;
}

class DisplayComponent extends Component<DisplayComponentProps> {
  render() {
    return (
      <div className='component'>
        <p className="component__name">DisplayComponent</p>
        <p>this.props.count = {this.props.count}</p>
      </div>
    )
  }
}



// 1. Basically, 'connect' will run this function and pass it the store
// 2. This function will return an object of new props to add to this component,
//    after linking those props to the state it received.
// Essentially, it does the job of 'useSelector', so to speak.
const mapStateToProps = (state: CountStateType) => {
  const count = state.count;
  return {count};
}

// 1. Connect ran mapStateToProps with the store, and got additional props that
//    are linked to the store
// 2. The props received are in the form of an HOC. Running it and passing the
//    actual component with the argument, will enhance the component with the
//    additional props that are derived from the redux store.
export default connect(mapStateToProps)(DisplayComponent);