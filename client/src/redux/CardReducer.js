import React from 'react'
 const CARD_ADD_ITEMS="CARD_ADD_ITEMS"
 const CARD_REMOVE_ITEMS="CARD_REMOVE_ITEMS"
const REMOVE_CARD_ITEMS="REMOVE_CARD_ITEMS"
let initialState={
  items:[],
  isLoaded:false,
  totalPrice:0,
  totalItemCount:0
}

const CardReducer=(state=initialState,action)=>{
   switch(action.type){
   case CARD_ADD_ITEMS:
       return{...state, items:[...state.items,action.payload],isLoaded:true,totalItemCount:state.items.reduce((count,item)=>count+=(action.payload._id===item._id)?1:0,0)}
       case CARD_REMOVE_ITEMS:
           return{
               ...state,
               items:state.items.filter(i=>i._id!=action.itemId)
           }
           case REMOVE_CARD_ITEMS:
             return{items:[],totalPrice:null,totalItemCount:null}
    default:return state;
   }
  
}

export const setProduct=(payload)=>({type:CARD_ADD_ITEMS,payload})
export const clearCardItems=()=>({type:REMOVE_CARD_ITEMS})
export const removeProduct=(itemId)=>({type:CARD_REMOVE_ITEMS,itemId})


export default CardReducer