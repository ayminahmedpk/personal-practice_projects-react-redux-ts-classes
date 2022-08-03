
import { RESET } from "../globalTypes";

const initialState = {text: 'default'}

export const textReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'TEXT_CHANGE':
      return {text: action.payload}

    case RESET:
      return {text: '-'}
    
    default:
      return state;
  }

}