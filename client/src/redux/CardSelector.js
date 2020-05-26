import {createSelector} from 'reselect'
import { uniqBy } from 'lodash'


export const getCardItems=(state)=>{
    return uniqBy(state.card.items, i => i._id)
}
export const getTotalPrice=createSelector(getCardItems,(items)=>{
    debugger
   return items.reduce((total,item) => total + item.price*item.quantity, 0);
})
// export const getPageSize=(state)=>{
//     return state.users.pageSize;
// }
// export const getTotalItemsCount=(state)=>{
//      return state.users.totalItemsCount;
// }
// export const getCurrentPage=(state)=>{
//     return  state.users.currentPage;
// }
// export const getIsFetching=(state)=>{
//     return state.users.isFetching;
// }
// export const getAuth=(state)=>{
//     return  state.auth;
// }
// export const getStatus=(state)=>{
//     return state.users.status;
// }
// export const getProfile=(state)=>{
//     return state.users.profile
// }
//  const getUsersSelector=(state)=>{
//  return state.users.users
// }
// export const getUsers=createSelector(getUsersSelector,(users)=>{
//     return users.filter(u=>true)
// })