import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import { countReducer } from "./count/countReducer";

const store = createStore(countReducer, composeWithDevTools());
// const store = createStore(countReducer, composeWithDevTools(applyMiddleware(...)));
// console.log(store.getState());

export default store;
