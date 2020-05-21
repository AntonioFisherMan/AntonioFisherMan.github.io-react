
const CARD_ADD_ITEMS="CARD_ADD_ITEMS"
const CARD_REMOVE_ITEMS="CARD_REMOVE_ITEMS"
const REMOVE_CARD_ITEMS="REMOVE_CARD_ITEMS"


let initialState={
  items:[],
  isLoaded:false,
  totalPrice:0
}

const CardReducer=(state=initialState,action)=>{
   switch(action.type){
   case CARD_ADD_ITEMS:
     debugger
   return{...state, items:[...state.items,action.payload],isLoaded:true}
       case CARD_REMOVE_ITEMS:
           return{
               ...state,
               items:state.items.filter(i=>i._id!==action.itemId)
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