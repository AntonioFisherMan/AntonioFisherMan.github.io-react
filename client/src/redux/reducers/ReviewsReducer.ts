import { goodsAPI } from '../../api/goodsAPI'
import { appActions } from './AppReducer'
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

export const setReviews = (files: any, goodsId: string) => async (dispatch: any, getState: any) => {
    let userImage
    if (getState().auth.userInform) {
        if (getState().auth.userInform.inform) {
            userImage = getState().auth.userInform.inform.userImage
        }
    }
    try {
        dispatch(appActions.setLoading(true))
        let data = await goodsAPI.setReviews(files, goodsId, getState().auth.user.name, userImage)
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_REVIEW_ADDED'))
        dispatch(appActions.setLoading(false))
        dispatch(reviewsActions.clearReview())
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'ERRORS_REVIEW_ADDED'))
        dispatch(appActions.setLoading(false))
    }
}

export default ReviewsReducer
