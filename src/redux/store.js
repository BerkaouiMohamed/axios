import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./reducerProducts";
import { thunk } from "redux-thunk";




const myStore=createStore(productReducer,applyMiddleware(thunk))
export default myStore