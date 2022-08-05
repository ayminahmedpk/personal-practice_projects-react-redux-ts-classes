import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { countReducer } from "./count/countReducer";
import { textReducer } from './text/textReducer';
import usersReducer from './users/usersReducer';

import { createLogger } from 'redux-logger';

import thunkMiddleware from 'redux-thunk';
import { CountActions } from './count/countActions';
import { TextActions } from './text/textActions';
import { userActions } from './users/userActions';

// Middleware's own requirement
const logger = createLogger({});

// Combining reducer
const rootReducer = combineReducers({
  countReducer ,
  textReducer  ,
  usersReducer ,
});

export type StateType = ReturnType<typeof rootReducer>
export type AppActions = CountActions | TextActions | userActions;

const store = createStore<StateType, AppActions, {}, {}>(rootReducer,composeWithDevTools(applyMiddleware(logger, thunkMiddleware)));


// console.log(store.getState());
store.subscribe(() => console.log('From subscription: ', store.getState()))

export default store;
