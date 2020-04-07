import React from 'react'
import {createStore,combineReducers, applyMiddleware} from 'redux'
import usersReducer from './UsersReducer'
import AuthReducer from './AuthReducer';
import CatalogReducer from './CatalogReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AppReducer from './AppReducer';

let reducers=combineReducers({
    users:usersReducer,
    auth:AuthReducer,
    goods:CatalogReducer,
    form: formReducer,
    app:AppReducer
});

let store=createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;

export default store