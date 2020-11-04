import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import AuthReducer from './reducers/AuthReducer'
import CatalogReducer from './reducers/CatalogReducer'
import AppReducer from './reducers/AppReducer'
import CardReducer from './reducers/CardReducer'
import OrdersReducer from './reducers/OrdersReducer'
import InformReducer from './reducers/InformReducer'
import SuccessErrorReducer from './reducers/SuccessErrorReducer'
import ReviewsReducer from './reducers/ReviewsReducer'

let reducers = combineReducers({
    auth: AuthReducer,
    goods: CatalogReducer,
    form: formReducer,
    app: AppReducer,
    card: CardReducer,
    orders: OrdersReducer,
    inform: InformReducer,
    successErrors: SuccessErrorReducer,
    reviews: ReviewsReducer,
})

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never | string
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>

type RootReducer = typeof reducers
export type AppStateType = ReturnType<RootReducer>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.store = store

export default store
