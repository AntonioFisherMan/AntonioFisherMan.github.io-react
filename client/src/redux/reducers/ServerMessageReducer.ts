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
    open: false as boolean,
    code: '' as string,
}

const ServerMessageReducer = (state = initialState, action: MessageActions): InitialStateType => {
    switch (action.type) {
        case 'GET_ERRORS': {
            return {
                ...state,
                open: true,
                code: 'error',
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
                open: true,
                code: 'success',
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
        case 'CLOSE_SERVER_MESSAGE': {
            return { ...state, open: false }
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
    closeMessage: () => ({ type: 'CLOSE_SERVER_MESSAGE' } as const),
}

export default ServerMessageReducer
