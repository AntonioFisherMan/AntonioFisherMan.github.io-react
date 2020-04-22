export const GET_ERRORS="GET_ERRORS"
export const CLEAR_ERRORS="CLEAR_ERRORS"

const initialState={
    message:null,
    status:null,
    id:null
}

const ErrorReducer=(state=initialState,action)=>{
    switch(action.type){
      case GET_ERRORS:{
          return{
              message:action.payload.message,
              status:action.payload.status,
              id:action.payload.id
          }
      }
      case CLEAR_ERRORS:{
        return{message:{},status:null,id:null}
    }
    default:return state;
    }
}


export const returnErrors=(message,status,id=null)=>({type:GET_ERRORS,payload:{message,status,id}})
export const clearErrors=()=>({type:CLEAR_ERRORS})


export default ErrorReducer