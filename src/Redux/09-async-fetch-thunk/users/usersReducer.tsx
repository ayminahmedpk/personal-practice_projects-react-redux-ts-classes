
import { Reducer } from "redux";
import { userActions, usersListType } from "./userActions"
import { GlobalActions, ResetAction } from "../globalActions";

export type usersState = {
  loading : boolean,
  users   : usersListType,
  error   : string;
}

const initialState: usersState = {
  loading : false ,
  users   : []    ,
  error   : ''    ,
}


const usersReducer: Reducer<usersState, userActions | GlobalActions> = ( state = initialState, action) => {

  switch(action.type) {
    case 'FETCH_USERS_REQUEST':
      return {
        ...state       ,
        loading : true ,
    };

    case 'FETCH_USERS_SUCCESS' :
      return {
        ...state                 ,
        loading : false          ,
        users   : action.payload ,
      };

    case 'FETCH_USERS_FAILURE' :
      return {
        ...state                 ,
        loading : false          ,
        error   : action.payload ,
      };

    case 'RESET' :
      return initialState;

    default:
      return state;
  }
  
}

export default usersReducer;