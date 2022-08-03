import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { countReducer } from "./count/countReducer";
import { textReducer } from './text/textReducer';

import { createLogger } from 'redux-logger';

// Middleware's own requirement
const logger = createLogger({});

// Combining reducer
const rootReducer = combineReducers({
  countReducer,
  textReducer,
});


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

// console.log(store.getState());

export default store;
