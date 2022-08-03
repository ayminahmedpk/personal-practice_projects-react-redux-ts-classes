import {createStore} from 'redux'

import { countReducer } from "./count/countReducer";

const store = createStore(countReducer);
// console.log(store.getState());

export default store;