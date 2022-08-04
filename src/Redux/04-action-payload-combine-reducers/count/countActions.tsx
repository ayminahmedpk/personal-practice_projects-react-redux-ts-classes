

import { Action } from "redux";


export type incrementAction = Action<string>
export type decrementAction = Action<string>

export type countActions = incrementAction | decrementAction;