
import { Reducer } from "redux"

import { TextActions } from "./textActions"
import { GlobalActions } from "../globalActions"

type TextState = { text: string; }

const initialState = {text: 'default'}

export const textReducer:Reducer<TextState, TextActions | GlobalActions> = (state = initialState, action) => {

  switch(action.type) {
    case 'TEXT_CHANGE':
      return {text: action.payload}

    case 'RESET':
      return {text: '-'}
    
    default:
      return state;
  }

}