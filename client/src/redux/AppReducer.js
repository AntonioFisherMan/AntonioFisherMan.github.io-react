import React from 'react'
import {getAuth} from './AuthReducer'

const SET_INITIALIZED="SET_INITIALIZED"
const APP_IS_POPUP="APP_IS_POPUP"

let initialState={
      initialized:false,
      isPopUp:false
}

const AppReducer=(state=initialState,action)=>{
   switch(action.type) {
     case SET_INITIALIZED:
      return{
          ...state,initialized:true
      }
      case APP_IS_POPUP:
          return{...state,isPopUp:action.isPopUp}

    default:return state
   }
}

export const setInitialize=()=>({type:SET_INITIALIZED})
export const isPopUp=(isPopUp)=>({type:APP_IS_POPUP,isPopUp})


export const initializeThunkApp=()=>(dispatch)=>{
    let promise=dispatch(getAuth())
    Promise.all([promise]).then(()=>{
        dispatch(setInitialize());
    })
}


export default AppReducer