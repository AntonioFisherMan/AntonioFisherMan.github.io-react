import {createSelector} from 'reselect'
export const getPageSize=(state)=>{
    return state.users.pageSize;
}
export const getTotalUsersCount=(state)=>{
     return state.users.totalUsersCount;
}
export const getCurrentPage=(state)=>{
    return  state.users.currentPage;
}
export const getIsFetching=(state)=>{
    return state.users.isFetching;
}
export const getAuth=(state)=>{
    return  state.auth;
}
export const getStatus=(state)=>{
    return state.users.status;
}

 const getUsersSelector=(state)=>{
 return state.users.users
}
export const getUsers=createSelector(getUsersSelector,(users)=>{
    return users.filter(u=>true)
})