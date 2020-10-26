import { testAPI } from '../api/api'
import { GoodType } from '../types/types'

const GET_GOODS_AC = 'GET_GOODS_AC'
const GET_GOODBYID_AC = 'GET_GOODBYID_AC'
const REMOVE_GOODBYID_AC = 'REMOVE_GOODBYID_AC'
const CHANGE_PAGE_SIZE_GOODS = 'CHANGE_PAGE_SIZE_GOODS'
const CHANGE_PAGE_NUMBER_GOODS = 'CHANGE_PAGE_NUMBER_GOODS'
const CHANGE_SORT_BY = 'CHANGE_SORT_BY'
const CHANGE_FILTER = 'CHANGE_FILTER'
const ClEAR_GOODS_AC = 'ClEAR_GOODS_AC'
const REMOVE_FILTER = 'REMOVE_FILTER'

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

const CatalogReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_GOODS_AC:
            return {
                ...state,
                goods: [...action.dataGoods.goods],
                totalCount: action.dataGoods.totalCount,
            }
        case GET_GOODBYID_AC:
            return { ...state, goodItem: [action.goodItem] }
        case REMOVE_GOODBYID_AC:
            return { ...state, goodItem: null }
        case ClEAR_GOODS_AC:
            return initialState
        case CHANGE_PAGE_SIZE_GOODS:
            return { ...state, pageSize: action.pageSize }
        case CHANGE_PAGE_NUMBER_GOODS:
            return { ...state, pageNumber: action.pageNumber }
        case CHANGE_SORT_BY:
            return { ...state, filterBy: action.filterBy }
        case CHANGE_FILTER:
            return { ...state, filter: action.filter }
        case REMOVE_FILTER:
            return {
                ...state,
                filter: state.filter.filter((i) => i !== action.filter),
            }
        default:
            return state
    }
}

type ClearGoodsType = {
    type: typeof ClEAR_GOODS_AC
}

export const ClearGoods = (): ClearGoodsType => ({ type: ClEAR_GOODS_AC })

type ChangePageSizeType = {
    type: typeof CHANGE_PAGE_SIZE_GOODS
    pageSize: number
}
export const changePageSize = (pageSize: number): ChangePageSizeType => ({
    type: CHANGE_PAGE_SIZE_GOODS,
    pageSize,
})

type ChangePageNumberType = {
    type: typeof CHANGE_PAGE_NUMBER_GOODS
    pageNumber: number
}
export const changePageNumber = (pageNumber: number): ChangePageNumberType => ({
    type: CHANGE_PAGE_NUMBER_GOODS,
    pageNumber,
})
type ChangeSortByType = {
    type: typeof CHANGE_SORT_BY
    filterBy: any
}

export const changeSortBy = (filterBy: any): ChangeSortByType => ({
    type: CHANGE_SORT_BY,
    filterBy,
})
type ChangeFilterType = {
    type: typeof CHANGE_FILTER
    filter: string
}
const changeFilter = (filter: string): ChangeFilterType => ({
    type: CHANGE_FILTER,
    filter,
})

type GetGoodsType = {
    type: typeof GET_GOODS_AC
    dataGoods: any
}
const getGoods = (dataGoods: any): GetGoodsType => ({
    type: GET_GOODS_AC,
    dataGoods,
})
type GetGoodType = {
    type: typeof GET_GOODBYID_AC
    goodItem: any
}
const getGood = (goodItem: any): GetGoodType => ({
    type: GET_GOODBYID_AC,
    goodItem,
})

type RemoveGoodType = {
    type: typeof REMOVE_GOODBYID_AC
}
export const removeGood = (): RemoveGoodType => ({ type: REMOVE_GOODBYID_AC })

export const getGoodsForSlider = () => async (dispatch: any) => {
    let response = await testAPI.changeFilter()
    dispatch(getGoods(response.data))
}
export const getGoodsThunkById = (id: string) => async (dispatch: any) => {
    let response = await testAPI.getGood(id)
    var data = response.data.goods.data.good
    data.reviews = response.data.goods.data.review
    data.goodReviewsQuantity = response.data.reviewQuantity
    dispatch(getGood(data))
}
export const getGoodsThunk = (pageNumber: number, pageSize: number, data: any) => (dispatch: any) => {
    testAPI.changeFilter(data, pageSize, pageNumber).then((response: any) => {
        dispatch(changePageNumber(pageNumber))
        dispatch(changePageSize(pageSize))
        dispatch(getGoods(response.data))
        dispatch(changeFilter(data))
    })
}
export const removeFilter = (filter: string) => (dispatch: any, getState: any) => {
    dispatch({ type: REMOVE_FILTER, filter })
    let data = getState().goods.filter
    testAPI.changeFilter(data, getState().goods.pageSize, getState().goods.pageNumber)
}

export default CatalogReducer
