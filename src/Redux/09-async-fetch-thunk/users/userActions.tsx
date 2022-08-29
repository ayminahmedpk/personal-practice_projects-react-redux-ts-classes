

export type usersType = {name: string, id: number}
export type usersListType = usersType[];

export type fetchUsersRequestAction = {type: 'FETCH_USERS_REQUEST';};
export type fetchUsersSuccessAction = {
  type    : 'FETCH_USERS_SUCCESS',
  payload : usersListType
};
export type fetchUsersFailureAction = {
  type    : 'FETCH_USERS_FAILURE',
  payload : string
}

export type userActions = fetchUsersRequestAction | fetchUsersSuccessAction | fetchUsersFailureAction;