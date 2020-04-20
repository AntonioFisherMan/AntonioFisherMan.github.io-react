 import {testAPI} from '../api/api'
 
 
 const GET_MYUSERS_AC="GET_MYUSERS_AC"

 let initialState={
    myUsers:[]
 }
 
 const  TestReducer=(state=initialState,action)=>{
     switch (action.type) {
         case GET_MYUSERS_AC:
             return {...state, myUsers: [...action.dataUsers]}
         default: return state
     }
 }

 export const getMyUsers=(dataUsers)=>({type:GET_MYUSERS_AC,dataUsers})

 export const getMyUsersThunk=()=>async(dispatch)=>{
     let data= await testAPI.getMyUsers()
    dispatch(getMyUsers(data))


 }

 export default  TestReducer