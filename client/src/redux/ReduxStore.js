import React from 'react'
import {createStore,combineReducers, applyMiddleware,compose} from 'redux'
import AuthReducer from './AuthReducer';
import CatalogReducer from './CatalogReducer';
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import AppReducer from './AppReducer';
import ErrorReducer from './ErrorReducer'
import CardReducer from './CardReducer'
import ReviewsReducer from './ReviewsReducer';
import OrdersReducer from './OrdersReducer';
import InformReducer from './InformReducer';


let reducers=combineReducers({
    auth:AuthReducer,
    goods:CatalogReducer,
    form: formReducer,
    app:AppReducer,
    errors:ErrorReducer,
   card:CardReducer,
   reviews:ReviewsReducer,
   orders:OrdersReducer,
   inform:InformReducer
});



 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers,composeEnhancers( applyMiddleware(thunkMiddleware)))

window.store=store;
export default store