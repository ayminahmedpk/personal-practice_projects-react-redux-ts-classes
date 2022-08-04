

import {Reducer} from 'redux';

import {textActions} from './textActions';

type textState = {text: string;}
const initialState = {text: 'default'}

export const textReducer:Reducer<textState, textActions > = (state = initialState, action) => {

  switch(action.type) {
    case 'TEXT_CHANGE':
      return {text: action.payload}
    
    default:
      return state;
  }

}