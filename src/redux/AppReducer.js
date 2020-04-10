import React from 'react'
import { getAuthThunkCreator } from './AuthReducer'

const SET_INITIALIZED="SET_INITIALIZED"

let initialState={
      initialized:false,

}



const AppReducer=(state=initialState,action)=>{
   switch(action.type) {
     case SET_INITIALIZED:
      return{
          ...state,initialized:true
      }
     
    default:return state
   }
}

export const setInitialize=()=>({type:SET_INITIALIZED})

export const initializeThunkApp=()=>(dispatch)=>{
    let promise=dispatch(getAuthThunkCreator())
    Promise.all([promise]).then(()=>{
        dispatch(setInitialize());
    })
}

export default AppReducer