

import { INCREMENT, DECREMENT } from "./countTypes";
import { Reducer } from "redux";
import { countActions } from "./countActions";

// random value for testing
export type CountStateType = {count: number;}
const initialState = { count: 0 }

export const countReducer: Reducer<CountStateType, countActions> = (state = initialState, action) => {

  switch (action.type) {
    case INCREMENT:
      return {count: state.count + 1};
    
    case DECREMENT:
      return {count: state.count - 1};

    default:
      return state;
  }

}
