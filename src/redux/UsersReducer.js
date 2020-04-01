
const FOLLOW_AC='Follow'
const UN_FOLLOW_AC='UnFollow'
const SETUSERS_AC='SetUsers'
const SETPAGE_AC='SetPage'
const SETTOTAL_AC='SetTotalCount'
const SETFETCH_AC='SetFetch'
let initialState={
users:[],
pageSize:4,
totalUsersCount:0,
currentPage:1,
isFetching:false
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
      default:return state
  }
}


export const FollowActionCreator=(user_id)=>({type:FOLLOW_AC,user_id})
export const UnFollowActionCreator=(user_id)=>({type:UN_FOLLOW_AC,user_id})
export const SetUsersActionCreator=(users)=>({type:SETUSERS_AC,users})
export const SetPageActionCreator=(page_id)=>({type:SETPAGE_AC,page_id})
export const SetTotalCountActionCreator=(totalCount)=>({type:SETTOTAL_AC,totalCount})
export const SetFetchActionCreator=(isFetching)=>({type:SETFETCH_AC,isFetching})
export default userReducer