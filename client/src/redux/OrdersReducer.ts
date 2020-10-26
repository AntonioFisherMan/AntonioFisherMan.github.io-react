import { clearCardItems } from './CardReducer'
import { testAPI } from '../api/api'
import { returnSuccess } from './SuccessErrorReducer'

const ADD_ORDERS = 'ADD_ORDERS'
const ADD_UNLOGINORDER = 'ADD_UNLOGINORDER'

type OrderType = {}
let initialState = {
    orders: [] as Array<OrderType>,
    unloginOrder: null as object | null,
    inform: null as object | null,
}

type InitialStateType = typeof initialState

let OrdersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_ORDERS:
            return { ...state, orders: [...action.data] }
        case ADD_UNLOGINORDER:
            return { ...state, unloginOrder: action.data }
        default:
            return state
    }
}

type AddOrdersType = {
    type: typeof ADD_ORDERS
    data: any
}
type AddUnOrdersType = {
    type: typeof ADD_UNLOGINORDER
    data: any
}
export const addOrders = (data: any): AddOrdersType => ({
    type: ADD_ORDERS,
    data,
})
const addUnloginOrders = (data: any): AddUnOrdersType => ({
    type: ADD_UNLOGINORDER,
    data,
})

export const addUnloginOrdersThunk = (data: any) => (dispatch: any) => {
    testAPI.setUnloginOrders(data).then((response: any) => {
        dispatch(addUnloginOrders(response.data.item.inform))
        dispatch(clearCardItems())
    })
}
export const getOrders = (id: any) => (dispatch: any) => {
    testAPI.getOrders(id).then((response: any) => {
        dispatch(addOrders(response.data))
    })
}

export const addOrdersThunk = (items: any, inform: any) => (dispatch: any, getState: any) => {
    testAPI.setOrders(items, inform, getState().auth.user.id).then((response: any) => {
        dispatch(clearCardItems())
        dispatch(returnSuccess(response.data.message, response.status, 'SUCCESS_ADD_ORDER'))
    })
}

export default OrdersReducer
