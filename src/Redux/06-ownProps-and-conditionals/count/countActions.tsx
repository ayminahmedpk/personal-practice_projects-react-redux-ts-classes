

export type IncrementAction = {type: 'INCREMENT'};
export type DecrementAction = {type: 'DECREMENT'};

export type CountActions = IncrementAction | DecrementAction;