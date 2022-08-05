

import { Action } from "redux"

export interface ActionWithPayload<T,U> extends Action<T> {
  payload: U;
}

export type TextChangeAction = ActionWithPayload<string, string>

export type TextActions = TextChangeAction;