import { Dispatch } from 'redux'
import { goodsAPI } from '../../api/goodsAPI'
import { GoodType } from '../../types/types'
import { InferActionsTypes } from '../ReduxStore'

let initialState = {
    goods: [] as Array<GoodType>,
    filter: [] as Array<string>,
    filterBy: ['Рекомендации'] as Array<string>,
    pageSize: 3 as number,
    totalCount: 0 as number,
    pageNumber: 1 as number,
    goodItem: [] as Array<GoodType> | null,
}

type InitialStateType = typeof initialState

const CatalogReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'GET_GOODS':
            return { ...state, goods: [...action.dataGoods.goods], totalCount: action.dataGoods.totalCount }
        case 'GET_GOODBYID':
            return { ...state, goodItem: [action.goodItem] }
        case 'REMOVE_GOODBYID':
            return { ...state, goodItem: null }
        case 'ClEAR_GOODS':
            return initialState
        case 'CHANGE_PAGE_SIZE_GOODS':
            return { ...state, pageSize: action.pageSize }
        case 'CHANGE_PAGE_NUMBER_GOODS':
            return { ...state, pageNumber: action.pageNumber }
        case 'CHANGE_SORT_BY':
            return { ...state, filterBy: action.filterBy }
        case 'CHANGE_FILTER':
            return { ...state, filter: action.filter }
        case 'REMOVE_FILTER':
            return { ...state, filter: state.filter.filter((i) => i !== action.filter) }
        default:
            return state
    }
}

type ActionsTypes = InferActionsTypes<typeof catalogActions>
type DispatchType = Dispatch<ActionsTypes>

export const catalogActions = {
    changePageSize: (pageSize: number) => ({ type: 'CHANGE_PAGE_SIZE_GOODS', pageSize } as const),
    changePageNumber: (pageNumber: number) => ({ type: 'CHANGE_PAGE_NUMBER_GOODS', pageNumber } as const),
    changeSortBy: (filterBy: any) => ({ type: 'CHANGE_SORT_BY', filterBy } as const),
    getGoods: (dataGoods: any) => ({ type: 'GET_GOODS', dataGoods } as const),
    getGood: (goodItem: any) => ({ type: 'GET_GOODBYID', goodItem } as const),
    changeFilter: (filter: Array<string>) => ({ type: 'CHANGE_FILTER', filter } as const),
    removeFilter: (filter: string) => ({ type: 'REMOVE_FILTER', filter } as const),
    removeGood: () => ({ type: 'REMOVE_GOODBYID' } as const),
    clearGoods: () => ({ type: 'ClEAR_GOODS' } as const),
}

export const getGoodsForSlider = () => async (dispatch: DispatchType) => {
    try {
        let data = await goodsAPI.changeFilter(1, 10, '')
        dispatch(catalogActions.getGoods(data))
    } catch (err) {}
}
export const getGoodsThunkById = (id: string) => async (dispatch: DispatchType) => {
    try {
        let data = await goodsAPI.getGood(id)
        data.reviews = data.goods.data.review
        data.goodReviewsQuantity = data.reviewQuantity
        dispatch(catalogActions.getGood(data))
    } catch (err) {}
}
export const getGoodsThunk = (pageNumber: number, pageSize: number, obj: any) => async (dispatch: DispatchType) => {
    try {
        let data = await goodsAPI.changeFilter(pageNumber, pageSize, obj)
        dispatch(catalogActions.changePageNumber(pageNumber))
        dispatch(catalogActions.changePageSize(pageSize))
        dispatch(catalogActions.getGoods(data))
        dispatch(catalogActions.changeFilter(obj))
    } catch (err) {}
}
export const removeFilterThunk = (filter: string) => async (dispatch: DispatchType, getState: any) => {
    dispatch(catalogActions.removeFilter(filter))
    let data = getState().goods.filter
    try {
        await goodsAPI.changeFilter(data, getState().goods.pageSize, getState().goods.pageNumber)
    } catch (err) {}
}

export default CatalogReducer
