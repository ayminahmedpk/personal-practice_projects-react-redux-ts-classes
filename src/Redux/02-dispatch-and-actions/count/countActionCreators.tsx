

import { incrementAction, decrementAction } from "./countActions";
import { INCREMENT, DECREMENT } from "./countTypes";

export type incrementActionCreator = () => incrementAction
export const increment = () => {
  return {
    type: INCREMENT
  }
}

export type decrementActionCreator = () => decrementAction
export const decrement = () => {
  return {
    type: DECREMENT
  }
}