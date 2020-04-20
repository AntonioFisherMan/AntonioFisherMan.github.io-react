import React from 'react'
import { getAuthThunkCreator } from './AuthReducer'

const SET_INITIALIZED="SET_INITIALIZED"
const APP_IS_POPUP="APP_IS_POPUP"

let initialState={
      initialized:false,
      globalError:null,
      isPopUp:false
}

const AppReducer=(state=initialState,action)=>{
   switch(action.type) {
     case SET_INITIALIZED:
      return{
          ...state,initialized:true
      }
      case APP_IS_POPUP:
          debugger
          return{...state,isPopUp:action.isPopUp}

    default:return state
   }
}

export const setInitialize=()=>({type:SET_INITIALIZED})
export const isPopUp=(isPopUp)=>({type:APP_IS_POPUP,isPopUp})


export const initializeThunkApp=()=>(dispatch)=>{
    let promise=dispatch(getAuthThunkCreator())
    Promise.all([promise]).then(()=>{
        dispatch(setInitialize());
    })
}


export default AppReducer