
import { Reducer } from "redux"
import { GlobalActions } from "../globalActions";

import { TextActions } from "./textActions";

type TextState = { text: string; }

const initialState = {text: 'default'}

export const textReducer:Reducer<TextState, TextActions | GlobalActions > = (state = initialState, action) => {

  switch(action.type) {
    case 'TEXT_CHANGE':
      return {text: action.payload}

    case 'RESET':
      return {text: '-'}
    
    default:
      return state;
  }

}