

import { Action } from "redux";

// export interface ITextChange extends Action<string> {
//   payload: string;
// }

// export type textActions = ITextChange;



// can create a generic interface for this type of stuff ourselves
interface ActionWithPayload<T, U> extends Action<T> {
  payload: U
}

export interface ITextChange extends ActionWithPayload<string, string> {}


export type textActions = ITextChange;