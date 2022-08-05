

import { RESET } from "../globalTypes";

import { INCREMENT, DECREMENT } from "./countTypes";

import { Reducer } from "redux";
import { CountActions } from "./countActions";

// random value for testing
export type CountState = {count: number;}
const initialState: CountState = { count: 0 }

export const countReducer: Reducer<CountState, CountActions> = (
  state = initialState, action
  ) => {

  switch (action.type) {
    case INCREMENT:
      return {count: state.count + 1};
    
    case DECREMENT:
      return {count: state.count - 1};

    case RESET:
      return {count: 0};

    default:
      return state;
  }

}
