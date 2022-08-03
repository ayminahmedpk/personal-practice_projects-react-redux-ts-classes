import {combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { countReducer } from "./count/countReducer";
import { textReducer } from './text/textReducer';

const rootReducer = combineReducers({
  countReducer,
  textReducer,
});

// const store = createStore(textReducer, composeWithDevTools());
const store = createStore(rootReducer, composeWithDevTools());
// const store = createStore(countReducer, composeWithDevTools(applyMiddleware(...)));
console.log(store.getState());

export default store;
