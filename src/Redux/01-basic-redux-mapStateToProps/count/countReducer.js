

// random value for testing
const initialState = { count: 50 }

export const countReducer = (state = initialState, action) => {

  switch (action.type) {
    // not needed until actions are defined
    // case INCREMENT:
    //   return {count: state.count + 1};

    default:
      return state;
  }

}
