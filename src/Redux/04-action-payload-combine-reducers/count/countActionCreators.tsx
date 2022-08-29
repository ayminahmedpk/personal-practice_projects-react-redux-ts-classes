

import { IncrementAction, DecrementAction } from "./countActions";

export const increment: () => IncrementAction = () => ({type: 'INCREMENT'})
export const decrement: () => DecrementAction = () => ({type: 'DECREMENT'})



// import { ActionCreator } from "redux";

// export const increment: ActionCreator<IncrementAction> = () => {
//   return {type: 'INCREMENT'}
// }

// export const decrement: ActionCreator<DecrementAction> = () => {
//   return { type: 'DECREMENT' }
// }