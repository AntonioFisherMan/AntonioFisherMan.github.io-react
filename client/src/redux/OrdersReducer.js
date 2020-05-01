import {clearCardItems} from './CardReducer'
import { testAPI } from "../api/api";


const ADD_ORDERS="ADD_ORDERS"
const ADD_UNLOGINORDER="ADD_UNLOGINORDER"

let initialState = {
  orders: [],
  unloginOrder:null,
  inform:null
};

let OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_ORDERS:
          return{...state,orders:[...action.data]}
          case ADD_UNLOGINORDER:
          return{...state,unloginOrder:action.data}
    default:
      return state;
  }
};


 export const addOrders=(data)=>({type:ADD_ORDERS,data})
  const addUnloginOrders=(data)=>({type:ADD_UNLOGINORDER,data})


 export const addUnloginOrdersThunk=(data)=>dispatch=>{
   dispatch(addUnloginOrders(data))
   dispatch(clearCardItems(null,null,null))
  }
export const getOrders=(id)=>dispatch=>{
 testAPI.getOrders(id).then(response=>{
     dispatch(addOrders(response.data));
 })
}

export const addOrdersThunk=({items,inform,id})=>dispatch=>{
    testAPI.setOrders(items,inform,id).then(response=>{
        dispatch(clearCardItems(null,null,null))
      })
    
}

export default OrdersReducer