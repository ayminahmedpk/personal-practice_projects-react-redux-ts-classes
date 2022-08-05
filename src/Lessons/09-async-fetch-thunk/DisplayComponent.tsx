import React, { Component } from 'react'

import { connect } from 'react-redux';
import { StateType } from '../../Redux/09-async-fetch-thunk/store';
import { usersListType } from '../../Redux/09-async-fetch-thunk/users/userActions';

type DisplayComponentProps = {
  count: number;
  text: string;
  loading: boolean;
  users: usersListType;
  error: string;
  
}

class DisplayComponent extends Component<DisplayComponentProps> {

  render() {
    return (
      <div className='component'>
        <p className="component__name">DisplayComponent</p>
        <p>this.props.count = {this.props.count}</p>
        <p>this.props.text = {this.props.text}</p>
        <br />
        
        <p>User list:</p>
        
        {this.props.loading ? <p>Fetching users...</p> : ''}
        
        {
          this.props.users.length === 0 ?
          '<empty>' :
          this.props.users.map(user => <p key={user.id}>{user.name}</p>)
        }
        
        {this.props.error? `Error: ${this.props.error}:` : ''}
      </div>
    )
  }
}



// 1. Basically, 'connect' will run this function and pass it the store
// 2. This function will return an object of new props to add to this component,
//    after linking those props to the state it received.
// Essentially, it does the job of 'useSelector', so to speak.
const mapStateToProps = (state: StateType) => {
  const count = state.countReducer.count;
  const text = state.textReducer.text;
  const loading = state.usersReducer.loading;
  const users = state.usersReducer.users;
  const error = state.usersReducer.error;
  return {count, text, loading, users, error};
}

// 1. Connect ran mapStateToProps with the store, and got additional props that
//    are linked to the store
// 2. The props received are in the form of an HOC. Running it and passing the
//    actual component with the argument, will enhance the component with the
//    additional props that are derived from the redux store.
export default connect(mapStateToProps)(DisplayComponent);