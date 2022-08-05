
import { Reducer } from "redux";
import { userActions, usersListType } from "./userActions"


import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from "./usersActionTypes"

export type usersState = {
  loading: boolean,
  users: usersListType,
  error: string;
}

const initialState: usersState = {
  loading : false ,
  users   : []    ,
  error   : ''    ,
}


// Note - we don't use the imported Reducer type due to type guarding
// complications. Let TS infer the type.
const usersReducer: Reducer<usersState, userActions> = (
  state = initialState,
  action: userActions,
) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state       ,
        loading : true ,
    }

    case FETCH_USERS_SUCCESS :
      if("payload" in action) {
        return {
          ...state                 ,
          loading : false          ,
          users   : action.payload as usersListType,
        }
      }
    break;

      case FETCH_USERS_FAILURE :
        if("payload" in action) {
          return {
            ...state                 ,
            loading : false          ,
            error   : action.payload as string,
          }
        }
      break;

    default:
      return state;
  }

  // To reassure TS know that we'll never return undefined
  return state;
}

export default usersReducer;