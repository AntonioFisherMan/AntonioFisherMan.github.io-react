import React from 'react'
import {createStore,combineReducers} from 'redux'
import usersReducer from '../Redux/UsersReducer'
import AuthReducer from './AuthReducer';


let reducers=combineReducers({
    users:usersReducer,
    auth:AuthReducer
});
let store=createStore(reducers);
window.store=store;

export default store