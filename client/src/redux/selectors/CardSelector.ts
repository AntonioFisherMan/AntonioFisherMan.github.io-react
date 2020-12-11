import { createSelector } from 'reselect'
import { uniqBy } from 'lodash'
import { AppStateType } from '../ReduxStore'

export const getCardItems = (state: AppStateType) => {
    return uniqBy(state.card.items, (i: any) => i._id)
}
export const getTotalPrice = createSelector(getCardItems, (items) => {
    return items.reduce((total: number, item: any) => total + item.price * item.quantity, 0)
})
