import { createSelector } from 'reselect'
import { sortBy } from '../../utils/helperFunctions/sortBy'
import { AppStateType } from '../ReduxStore'

const getGoods = (state: AppStateType) => {
    return state.goods.goods
}
export const getFilterBy = (state: AppStateType) => {
    return state.goods.filterBy
}
export const getTotalGoods = createSelector([getGoods, getFilterBy], (items, filterBy: string) => {
    return sortBy(items, filterBy)
})
