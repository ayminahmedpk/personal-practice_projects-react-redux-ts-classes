

import {Reducer} from 'redux';

import {TextActions} from './textActions';

type TextState = {text: string;}
const initialState = {text: 'default'}

export const textReducer:Reducer<TextState, TextActions> = (state = initialState, action) => {

  switch(action.type) {
    case 'TEXT_CHANGE':
      return {text: action.payload}
    
    default:
      return state;
  }

}