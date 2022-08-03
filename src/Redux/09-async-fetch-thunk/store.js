import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { countReducer } from "./count/countReducer";
import { textReducer } from './text/textReducer';
import usersReducer from './users/usersReducer';

import { createLogger } from 'redux-logger';

import thunkMiddleware from 'redux-thunk';

// Middleware's own requirement
const logger = createLogger({});

// Combining reducer
const rootReducer = combineReducers({
  countReducer ,
  textReducer  ,
  usersReducer ,
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
// const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,)));
// const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunkMiddleware)));

// Combined store + middleware + thunk
// const store = createStore(rootReducer,(applyMiddleware(logger, thunkMiddleware)));

// Combined store + devtools + middleware + thunk
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger, thunkMiddleware)));


// console.log(store.getState());
store.subscribe(() => console.log('From subscription: ', store.getState()))

export default store;
