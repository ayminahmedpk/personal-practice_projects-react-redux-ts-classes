

export type usersType = {name: string, id: number}
export type usersListType = usersType[];

export type fetchUsersRequestAction = {type: 'FETCH_USERS_REQUEST';};
export type fetchUsersSuccessAction = {
  type: 'FETCH_USERS_SUCCESS',
  payload:usersListType
};
export type fetchUsersFailureAction = {
  type: 'FETCH_USERS_FAILURE',
  payload: string
}

export type userActions = fetchUsersRequestAction | fetchUsersSuccessAction | fetchUsersFailureAction;











// import { Action } from "redux";
// import {ActionWithPayload} from '../text/textActions'

// export type usersType = {name: string, id: number}
// export type usersListType = usersType[];

// export type fetchUsersRequestAction = Action<string>;
// export type fetchUsersSuccessAction = ActionWithPayload<string, usersListType>
// export type fetchUsersFailureAction = ActionWithPayload<string, string>;

// export type userActions = fetchUsersRequestAction | fetchUsersSuccessAction | fetchUsersFailureAction;