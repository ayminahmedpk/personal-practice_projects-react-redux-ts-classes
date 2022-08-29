import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { CountActions } from './count/countActions';
import { countReducer } from "./count/countReducer";
import { GlobalActions } from './globalActions';
import { TextActions } from './text/textActions';
import { textReducer } from './text/textReducer';

import { createLogger } from 'redux-logger';

const logger = createLogger({});

const rootReducer = combineReducers({
  countReducer,
  textReducer,
});

export type StateType = ReturnType<typeof rootReducer>
export type AppActions = CountActions | TextActions | GlobalActions;

// Normal store
// const store = createStore(countReducer);

// Normal store + middleware
// const store = createStore(countReducer, applyMiddleware(logger));

// Normal store + devtools
// const store = createStore(countReducer, composeWithDevTools());

// Normal store + devtools + middleware
// const store = createStore(countReducer, composeWithDevTools(applyMiddleware(logger)));

// Combined store
// const store = createStore(rootReducer);

// Combined store + middleware
// const store = createStore(rootReducer, applyMiddleware(logger));

// Combined store + devtools
// const store = createStore(rootReducer, composeWithDevTools());

// Combined store + devtools + middleware
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));

store.subscribe(() => console.log('From subscription: ', store.getState()))

// console.log(store.getState());

export default store;
