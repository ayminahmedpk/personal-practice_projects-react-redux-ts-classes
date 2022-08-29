

import { Dispatch } from "redux";


import {
  usersListType,
  fetchUsersRequestAction,
  fetchUsersSuccessAction,
  fetchUsersFailureAction,
  userActions,
} from "./userActions";

export const fetchUsersRequest: () => fetchUsersRequestAction = () => ({
  type: "FETCH_USERS_REQUEST"
});

export const fetchUsersSuccess: (usersList: usersListType) => fetchUsersSuccessAction = (usersList) => ({
  type    : 'FETCH_USERS_SUCCESS' ,
  payload : usersList             ,
})


export const fetchUsersFailure: (errorMessage: string) => fetchUsersFailureAction  = (errorMessage) => ({
  type    : 'FETCH_USERS_FAILURE' ,
  payload : errorMessage          ,
});


export const makeRequest = () => (
  (dispatch: Dispatch<userActions>)  => {
    dispatch(fetchUsersRequest());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => dispatch(fetchUsersSuccess(users)))
      .catch(error => dispatch(fetchUsersFailure(error.message)));
  }
)