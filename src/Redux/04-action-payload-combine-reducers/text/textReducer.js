

const initialState = {text: 'default'}

export const textReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'TEXT_CHANGE':
      return {text: action.payload}
    
    default:
      return state;
  }

}