import { ordersAPI } from '../../api/ordersAPI'
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

export const addUnloginOrdersThunk = (obj: any) => async (dispatch: any) => {
    try {
        let data = await ordersAPI.setUnloginOrders(obj)
        dispatch(ordersActions.addUnloginOrders(data.item.inform))
        dispatch(cardActions.clearCardItems())
    } catch (err) {}
}
export const getOrders = (id: any) => async (dispatch: any) => {
    let data = await ordersAPI.getOrders(id)
    try {
        dispatch(ordersActions.addOrders(data))
    } catch (err) {}
}

export const addOrdersThunk = (items: any, inform: any) => async (dispatch: any, getState: any) => {
    try {
        let data = await ordersAPI.setOrders(items, inform, getState().auth.user.id)
        dispatch(cardActions.clearCardItems())
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_ADD_ORDER'))
    } catch (err) {}
}

export default OrdersReducer
