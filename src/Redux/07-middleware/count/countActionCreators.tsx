

import { IncrementAction, DecrementAction } from "./countActions"

export const increment: () => IncrementAction = () => ({type: "INCREMENT"})
export const decrement: () => DecrementAction = () => ({type: "DECREMENT"})