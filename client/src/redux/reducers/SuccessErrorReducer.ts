import { InferActionsTypes } from '../ReduxStore'

type MessageType = {
    message: string | null
    status?: number | null
    id: string | null
}
type InitialStateType = typeof initialState
export type MessageActions = InferActionsTypes<typeof messageActions>

const initialState = {
    successMessage: {} as MessageType,
    errorsMessage: {} as MessageType,
}

const SuccessErrorReducer = (state = initialState, action: MessageActions): InitialStateType => {
    switch (action.type) {
        case 'GET_ERRORS': {
            return {
                ...state,
                errorsMessage: {
                    message: action.message,
                    status: action.status,
                    id: action.id,
                },
            }
        }
        case 'GET_SUCCESS': {
            return {
                ...state,
                successMessage: {
                    message: action.message,
                    id: action.id,
                },
            }
        }
        case 'CLEAR_ERRORS': {
            return initialState
        }
        case 'CLEAR_SUCCESS': {
            return initialState
        }
        default:
            return state
    }
}

export const messageActions = {
    clearErrors: () => ({ type: 'CLEAR_ERRORS' } as const),
    clearSuccess: () => ({ type: 'CLEAR_SUCCESS' } as const),
    returnErrors: (message: string, status: number, id: string) => ({ type: 'GET_ERRORS', message, status, id } as const),
    returnSuccess: (message: string, id: string) => ({ type: 'GET_SUCCESS', message, id } as const),
}

export default SuccessErrorReducer
