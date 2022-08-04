

import React from "react"

import { ActionCreator } from "redux"

import { ITextChange } from "./textActions"

import { TEXT_CHANGE } from "./textTypes"

export const textChange: ActionCreator<ITextChange> = (
  event: React.ChangeEvent<HTMLInputElement>
  ) => {
  return {
    type: TEXT_CHANGE,
    payload: event.target.value
  }
}

export type textChangeType = typeof textChange;