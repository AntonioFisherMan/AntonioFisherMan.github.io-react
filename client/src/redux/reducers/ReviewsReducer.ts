import { goodsAPI } from '../../api/goodsAPI'
import { messageActions } from './ServerMessageReducer'

type ReviewItem = {}
type InitialStateType = typeof initialState

let initialState = {
    reviews: [] as Array<ReviewItem>,
}

const ReviewsReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'INITIAL_REVIEWS':
            return initialState
        case 'SET_REVIEWS':
            return { ...state, reviews: [action.item] }
        default:
            return state
    }
}

export const reviewsActions = {
    setItemOfReview: (item: ReviewItem) => ({ type: 'SET_REVIEWS', item } as const),
    clearReview: () => ({ type: 'INITIAL_REVIEWS' } as const),
}

export const setReviews = (obj: any, goodsId: any, reviewText: any, rating: any) => async (dispatch: any, getState: any) => {
    let userImage
    if (getState().auth.userInform) {
        userImage = getState().auth.userInform.userImage
    }
    try {
        let data = await goodsAPI.setReviews(getState().auth.user.name, userImage, obj, goodsId, reviewText)
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_FILE_UPLOAD'))
        dispatch(reviewsActions.clearReview())
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'ERRORS_FILE_UPLOAD'))
    }
}

export default ReviewsReducer
