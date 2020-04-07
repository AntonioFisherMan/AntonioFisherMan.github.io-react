import {usersAPI} from '../../src/api/api'
const FOLLOW_AC='Follow'
const UN_FOLLOW_AC='UnFollow'
const SETUSERS_AC='SetUsers'
const SETPAGE_AC='SetPage'
const SETTOTAL_AC='SetTotalCount'
const SETFETCH_AC='SetFetch'
const SETSTATUS_AC='SetStatus'

let initialState={
users:[],
pageSize:4,
totalUsersCount:0,
currentPage:1,
isFetching:false,
status:null
}

const userReducer=(state=initialState,action)=>{
  switch(action.type){
      case FOLLOW_AC:
          return{
              ...state,
              users:state.users.map(user=>{
              if(user.id===action.user_id)
              {
                  return {...user,followed:true}
              }
              return user
           })
           }
       case UN_FOLLOW_AC:
          return{
             ...state,
             users:state.users.map(user=>{
                 if(user.id===action.user_id){
                     return{...user,followed:false}
                 }
                 return user
             })
          }
        case SETUSERS_AC:{
            return{...state, users:[...action.users]}
        }
        case SETPAGE_AC:{
           return{...state, currentPage:action.page_id}
        }
        case SETTOTAL_AC:{
           return{...state,totalUsersCount:action.totalCount}
        }
        case SETFETCH_AC:{
            return{...state,isFetching:action.isFetching}
        }
        case  SETSTATUS_AC:{
            return{...state,status:action.status}
        }
      default:return state
  }
}


export const follow=(user_id)=>({type:FOLLOW_AC,user_id})
export const unfollow=(user_id)=>({type:UN_FOLLOW_AC,user_id})
export const setUsers=(users)=>({type:SETUSERS_AC,users})
export const setPage=(page_id)=>({type:SETPAGE_AC,page_id})
export const setTotalCount=(totalCount)=>({type:SETTOTAL_AC,totalCount})
export const setFetch=(isFetching)=>({type:SETFETCH_AC,isFetching})
export const setStatus=(status)=>({type:SETSTATUS_AC,status})

export const getUsersThunkCreator=(currentPage,pageSize)=>(dispatch)=>{
    dispatch(setFetch(true));
    usersAPI.getUsers(currentPage,pageSize).then(data => {
        dispatch(setFetch(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
      
    })
}
export const getStatus=(user_id)=>(dispatch)=>{
    usersAPI.getStatus(user_id)
    .then(data=>{
        debugger
        dispatch(setStatus(data))
    })

}

export const updateStatus=(user_id)=>(dispatch)=>{
    usersAPI.getStatus(user_id)
    .then(data=>{
        if(data.resultCode===0){
            dispatch(setStatus(data.status))
        }
    })

}
export default userReducer