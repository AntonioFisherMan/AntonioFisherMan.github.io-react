import React from 'react'
import {createStore,combineReducers, applyMiddleware,compose} from 'redux'
import usersReducer from './UsersReducer'
import AuthReducer from './AuthReducer';
import CatalogReducer from './CatalogReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AppReducer from './AppReducer';
import TestReducer from './TestReducer';
import ProfileReducer from './ProfileReducer';

let reducers=combineReducers({
    users:usersReducer,
    auth:AuthReducer,
    goods:CatalogReducer,
    form: formReducer,
    app:AppReducer,
    test:TestReducer,
    profile:ProfileReducer
});



 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers,composeEnhancers( applyMiddleware(thunkMiddleware)))

window.store=store;
export default store