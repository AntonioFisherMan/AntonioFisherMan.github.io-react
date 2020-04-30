import {clearCardItems} from './CardReducer'
import { testAPI } from "../api/api";


const ADD_ORDERS="ADD_ORDERS"
const ADD_UNLOGINORDER="ADD_UNLOGINORDER"

let initialState = {
  orders: [],
  unloginOrder:null
};

let OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_ORDERS:
          debugger
          return{...state,orders:[...state.orders,action.data]}
          case ADD_UNLOGINORDER:
          return{...state,unloginOrder:action.data}
    default:
      return state;
  }
};


 export const addOrders=(data)=>({type:ADD_ORDERS,data})
 
export const getOrders=(id)=>dispatch=>{
    debugger
 testAPI.getOrders(id).then(response=>{
     debugger
     dispatch(addOrders(response.data));
 })
}

export const addOrdersThunk=({items,inform,id})=>dispatch=>{
    debugger
    testAPI.setOrders(items,inform,id).then(response=>{
        dispatch(clearCardItems(null,null,null))
      })
    
}

export default OrdersReducer