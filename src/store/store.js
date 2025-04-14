import { combineReducers, createStore, applyMiddleware } from "redux";
import usersReducers from "../reducers/usersReducers";
import {thunk} from "redux-thunk"
const rootReducer = combineReducers({
    initState: usersReducers
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
window.store = store