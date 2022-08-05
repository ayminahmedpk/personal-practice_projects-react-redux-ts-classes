

import { INCREMENT, DECREMENT } from "./countTypes";
import { IncrementAction, DecrementAction } from "./countActions";

export type IncrementType = () => IncrementAction;
export const increment: IncrementType = () => {
  return {
    type: INCREMENT
  }
}


export type DecrementType = () => DecrementAction;
export const decrement: DecrementType = () => {
  return {
    type: DECREMENT
  }
}