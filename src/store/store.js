import { combineReducers, createStore, applyMiddleware } from "redux";
import usersReducers from "../reducers/usersReducers";
import {thunk} from "redux-thunk"
import profileReducer from "../reducers/profileReducer";
import authReducer from "../reducers/authReducer.js";

const rootReducer = combineReducers({
    initState: usersReducers,
    profilePage: profileReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
window.store = store