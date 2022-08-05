

import React from "react"
import { TEXT_CHANGE } from "./textTypes"
import { TextChangeAction } from "./textActions"

export type TextChangeType = (
  event: React.ChangeEvent<HTMLInputElement>
) => TextChangeAction;

export const textChange: TextChangeType = (event) => {
  return {
    type: TEXT_CHANGE,
    payload: event.target.value
  }
}