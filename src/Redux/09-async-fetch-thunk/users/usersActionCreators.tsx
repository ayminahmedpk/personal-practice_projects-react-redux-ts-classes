

import { Dispatch } from "redux";


import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "./usersActionTypes";

import {
  usersListType,
  fetchUsersRequestAction,
  fetchUsersSuccessAction,
  fetchUsersFailureAction,
  userActions,
} from "./userActions";

export type fetchUsersRequestType = () => fetchUsersRequestAction;
export const fetchUsersRequest: fetchUsersRequestType = () => ({
  type: FETCH_USERS_REQUEST
});

export type fetchUsersSuccessType = (usersList: usersListType) => fetchUsersSuccessAction;
export const fetchUsersSuccess: fetchUsersSuccessType = (usersList) => ({
  type    : FETCH_USERS_SUCCESS ,
  payload : usersList           ,
})


export type fetchUsersFailureType = (error: string) => fetchUsersFailureAction;
export const fetchUsersFailure: fetchUsersFailureType  = (errorMessage) => ({
  type    : FETCH_USERS_FAILURE ,
  payload : errorMessage        ,
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