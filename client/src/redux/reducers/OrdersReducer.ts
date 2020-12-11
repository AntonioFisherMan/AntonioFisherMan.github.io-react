import { ordersAPI } from '../../api/ordersAPI'
import { appActions } from './AppReducer'
import { cardActions } from './CardReducer'
import { messageActions } from './ServerMessageReducer'

type OrderType = {}
let initialState = {
    orders: [] as Array<OrderType>,
    unloginOrder: null as object | null,
    inform: null as object | null,
}

type InitialStateType = typeof initialState

let OrdersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'ADD_ORDERS':
            return { ...state, orders: [...action.data] }
        case 'ADD_UNLOGINORDER':
            return { ...state, unloginOrder: action.data }
        default:
            return state
    }
}

export const ordersActions = {
    addOrders: (data: any) => ({ type: 'ADD_ORDERS', data } as const),
    addUnloginOrders: (data: any) => ({ type: 'ADD_UNLOGINORDER', data } as const),
}

export const addUnloginOrdersThunk = (items: any, formData: any, history: any) => async (dispatch: any) => {
    try {
        dispatch(appActions.setLoading(true))
        let data = await ordersAPI.setUnloginOrders(items, formData)
        dispatch(ordersActions.addUnloginOrders(data.order.inform))
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_ADD_UNLOGIN_ORDER'))
        dispatch(cardActions.clearCardItems())
        dispatch(appActions.setLoading(false))
        history.push('/catalog')
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.data.status, 'ERROR_ADD_UNLOGIN_ORDER'))
    }
}
export const getOrders = (id: any) => async (dispatch: any) => {
    try {
        dispatch(appActions.setLoading(true))
        let data = await ordersAPI.getOrders(id)
        dispatch(appActions.setLoading(false))
        dispatch(ordersActions.addOrders(data))
    } catch (err) {
        dispatch(appActions.setLoading(false))
    }
}

export const addOrdersThunk = (data: any, history: any) => async (dispatch: any, getState: any) => {
    try {
        dispatch(appActions.setLoading(true))
        let response = await ordersAPI.setOrders(data)
        dispatch(cardActions.clearCardItems())
        debugger
        dispatch(messageActions.returnSuccess(response.message, 'SUCCESS_ADD_ORDER'))
        dispatch(appActions.setLoading(false))
        history.push('/orders')
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.data.status, 'ERROR_ADD_LOGIN_ORDER'))
    }
}

export default OrdersReducer
