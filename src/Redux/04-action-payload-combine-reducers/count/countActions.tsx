

import { Action } from "redux";


// export type IncrementAction = Action<'INCREMENT'>
// export type DecrementAction = Action<'DECREMENT'>
export type IncrementAction = {type: 'INCREMENT'};
export type DecrementAction = {type: 'DECREMENT'};

export type CountActions = IncrementAction | DecrementAction;