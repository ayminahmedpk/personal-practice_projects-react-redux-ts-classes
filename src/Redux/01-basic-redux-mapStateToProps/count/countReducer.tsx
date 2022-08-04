import { Reducer } from "redux";

// random value for testing
export type CountStateType = {count: number;}

export type CountActionType = {type: string}

const initialState: CountStateType = { count: 50 }

export const countReducer: Reducer <CountStateType, CountActionType> = (state = initialState, action: CountActionType) => {

  switch (action.type) {
    // not needed until actions are defined
    // case INCREMENT:
    //   return {count: state.count + 1};

    default:
      return state;
  }

}
