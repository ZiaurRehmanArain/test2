import { Reducer } from "react";
import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";

const Store=createStore(Reducer,applyMiddleware())

export default Store