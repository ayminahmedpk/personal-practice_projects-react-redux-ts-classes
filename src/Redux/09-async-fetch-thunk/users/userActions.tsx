

export type usersType = {name: string, id: number}
export type usersListType = usersType[];

export type fetchUsersRequestAction = {type: string;}
export type fetchUsersSuccessAction = {type:string; payload:usersListType}
export type fetchUsersFailureAction = {type: string, payload: string}

export type userActions = fetchUsersRequestAction | fetchUsersSuccessAction | fetchUsersFailureAction;











// import { Action } from "redux";
// import {ActionWithPayload} from '../text/textActions'

// export type usersType = {name: string, id: number}
// export type usersListType = usersType[];

// export type fetchUsersRequestAction = Action<string>;
// export type fetchUsersSuccessAction = ActionWithPayload<string, usersListType>
// export type fetchUsersFailureAction = ActionWithPayload<string, string>;

// export type userActions = fetchUsersRequestAction | fetchUsersSuccessAction | fetchUsersFailureAction;