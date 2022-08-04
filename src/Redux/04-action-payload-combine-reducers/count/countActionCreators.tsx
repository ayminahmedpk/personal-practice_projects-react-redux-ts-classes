

import { incrementAction, decrementAction } from "./countActions";
import { INCREMENT, DECREMENT } from "./countTypes";
import { ActionCreator } from "redux";

export const increment: ActionCreator<incrementAction> = () => {
  return {
    type: INCREMENT
  }
}

export const decrement: ActionCreator<decrementAction> = () => {
  return {
    type: DECREMENT
  }
}