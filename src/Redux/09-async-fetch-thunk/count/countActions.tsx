

import { Action } from "redux";

export type IncrementAction = Action<string>;
export type DecrementAction = Action<string>;

export type CountActions = IncrementAction | DecrementAction;