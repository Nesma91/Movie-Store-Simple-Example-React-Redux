import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combineReducers from "./Reducers/combineRed";

export const store = createStore(combineReducers, composeWithDevTools());
