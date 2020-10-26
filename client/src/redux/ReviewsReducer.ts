import { testAPI } from '../api/api'

import { returnErrors, returnSuccess } from './SuccessErrorReducer'
const SET_REVIEWS = 'SET_REVIEW'
const INITIAL_REVIEWS = 'INITIAL_REVIEWS'

type ReviewItem = {}
let initialState = {
    reviews: [] as Array<ReviewItem>,
}
type InitialStateType = typeof initialState
const ReviewsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case INITIAL_REVIEWS:
            return initialState
        case SET_REVIEWS:
            return { ...state, reviews: [action.item] }
        default:
            return state
    }
}

type SetItemOfReviewType = {
    type: typeof SET_REVIEWS
    item: any
}
export const setItemOfReview = (item: any): SetItemOfReviewType => ({
    type: SET_REVIEWS,
    item,
})
type ClearReviewType = {
    type: typeof INITIAL_REVIEWS
}
export const clearReview = (): ClearReviewType => ({ type: INITIAL_REVIEWS })

export const setReviews = (data: any, goodsId: any, reviewText: any, rating: any) => (dispatch: any, getState: any) => {
    let userImage
    if (getState().auth.userInform) {
        userImage = getState().auth.userInform.userImage
    }
    testAPI.setReviews(getState().auth.user.name, userImage, data, goodsId, reviewText).then((response: any) => {
        if (response.data.success) {
            dispatch(returnSuccess(response.data.message, response.status, 'SUCCESS_FILE_UPLOAD'))
            dispatch(clearReview())
        } else {
            dispatch(returnErrors(response.data.message, response.status, 'ERRORS_FILE_UPLOAD'))
        }
    })
}

export default ReviewsReducer
