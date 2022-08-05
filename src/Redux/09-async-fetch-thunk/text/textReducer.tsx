
import { RESET } from "../globalTypes";

import { Reducer } from "redux";
import { TextActions } from "./textActions";

export type TextState = {text: string;}
const initialState: TextState = {text: 'default'}

export const textReducer: Reducer<TextState, TextActions> = (
  state = initialState, action
  ) => {

  switch(action.type) {
    case 'TEXT_CHANGE':
      return {text: action.payload}

    case RESET:
      return {text: '-'}
    
    default:
      return state;
  }

}