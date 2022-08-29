

import { Reducer } from "redux";
import { CountActionTypes } from "./countActions";

// random value for testing

export type CountStateType = {count: number};
const initialState = { count: 0 }

export const countReducer: Reducer<CountStateType, CountActionTypes> = (state = initialState, action) => {

  switch (action.type) {
    case 'INCREMENT' :
      return {count: state.count + 1};
    
    case 'DECREMENT':
      return {count: state.count - 1};

    default:
      return state;
  }

}
