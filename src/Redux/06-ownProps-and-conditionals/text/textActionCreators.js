

import { TEXT_CHANGE } from "./textTypes"

export const textChange = (event) => {
  return {
    type: TEXT_CHANGE,
    payload: event.target.value
  }
}