import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMidleware from "redux-thunk";

import mainReduser from './Main-reduser';

let redusers = combineReducers({
    main: mainReduser,

});

let store = createStore (redusers, applyMiddleware(thunkMidleware));

export default store;