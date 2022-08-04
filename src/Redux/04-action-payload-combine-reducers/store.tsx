import {combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { countReducer } from "./count/countReducer";
import { textReducer } from './text/textReducer';


const rootReducer = combineReducers({
  countReducer,
  textReducer,
});

// Because the actual state object's structure will be something new, after
// combining the individual reducers
export type StateType = ReturnType<typeof rootReducer>

// const store = createStore(textReducer, composeWithDevTools());
const store = createStore(rootReducer, composeWithDevTools());
// const store = createStore(countReducer, composeWithDevTools(applyMiddleware(...)));
console.log(store.getState());

export default store;
