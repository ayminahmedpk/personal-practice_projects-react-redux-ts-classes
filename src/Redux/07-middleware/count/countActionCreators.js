

import { INCREMENT, DECREMENT } from "./countTypes";

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}