export const GET_ERRORS = 'GET_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const GET_SUCCESS = 'GET_SUCCESS'
export const CLEAR_SUCCESS = 'CLEAR_SUCCESS'

type MessageType = {
    message: string | null
    status: number | null
    id: string | null
}
const initialState = {
    successMessage: {} as MessageType,
    errorsMessage: {} as MessageType,
}

type InitialStateType = typeof initialState

const SuccessErrorReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case GET_ERRORS: {
            return {
                ...state,
                errorsMessage: {
                    message: action.message,
                    status: action.status,
                    id: action.id,
                },
            }
        }
        case GET_SUCCESS: {
            return {
                ...state,
                successMessage: {
                    message: action.message,
                    status: action.status,
                    id: action.id,
                },
            }
        }
        case CLEAR_ERRORS: {
            return initialState
        }
        case CLEAR_SUCCESS: {
            return initialState
        }
        default:
            return state
    }
}

export const clearErrors = () => ({ type: CLEAR_ERRORS })
export const clearSuccess = (): ClearSuccess => ({ type: CLEAR_SUCCESS })
type ClearSuccess = {
    type: typeof CLEAR_SUCCESS
}
type ReturnErrorsType = {
    type: typeof GET_ERRORS
    message: string
    status: number
    id: string | null
}
export const returnErrors = (message: string, status: number, id: string): ReturnErrorsType => ({
    type: GET_ERRORS,
    message,
    status,
    id,
})
export type MessageSiteType = ReturnErrorsType | ReturnSuccessType | ClearSuccess
type ReturnSuccessType = {
    type: typeof GET_SUCCESS
    message: string
    status: number
    id: string | number | null
}
export const returnSuccess = (message: string, status: number, id: string): ReturnSuccessType => ({
    type: GET_SUCCESS,
    message,
    status,
    id,
})

export default SuccessErrorReducer
