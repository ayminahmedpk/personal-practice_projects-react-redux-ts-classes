

import { RESET } from "../globalTypes";

import { INCREMENT, DECREMENT } from "./countTypes";

// random value for testing
const initialState = { count: 0 }

export const countReducer = (state = initialState, action) => {

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
