import { applyMiddleware, createStore } from "redux"
import { rootReducer } from "../reducers"
import thunk from "redux-thunk"
import { compose } from "@reduxjs/toolkit";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
))