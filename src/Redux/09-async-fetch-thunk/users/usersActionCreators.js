

import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "./usersActionTypes";


export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST
});

export const fetchUsersSuccess = (usersList) => ({
  type    : FETCH_USERS_SUCCESS ,
  payload : usersList           ,
})

export const fetchUsersFailure = (errorMessage) => ({
  type    : FETCH_USERS_FAILURE ,
  payload : errorMessage        ,
});


export const makeRequest = () => (
  (dispatch)  => {
    dispatch(fetchUsersRequest());
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => dispatch(fetchUsersSuccess(users)))
      .catch(error => dispatch(fetchUsersFailure(error.message)));
  }
)