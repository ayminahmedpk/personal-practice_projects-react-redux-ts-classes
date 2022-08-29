import {combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { CountActions } from './count/countActions';

import { countReducer } from "./count/countReducer";
import { GlobalActions } from './globalActions';
import { TextActions } from './text/textActions';
import { textReducer } from './text/textReducer';

const rootReducer = combineReducers({
  countReducer,
  textReducer,
});

export type StateType = ReturnType<typeof rootReducer>
export type AppActions = CountActions | TextActions | GlobalActions;

// const store = createStore(textReducer, composeWithDevTools());
const store = createStore(rootReducer, composeWithDevTools());
// const store = createStore(countReducer, composeWithDevTools(applyMiddleware(...)));

console.log(store.getState());

export default store;
