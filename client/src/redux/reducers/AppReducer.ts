import { Dispatch } from 'redux'
import { InferActionsTypes } from '../ReduxStore'
import { getAuth } from './AuthReducer'

let initialState = {
    loading: false as boolean,
    initialized: false as Boolean | false,
}

type InitialStateType = typeof initialState
const AppReducer = (state = initialState, action: AppActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return { ...state, initialized: true }
        case 'SET_LOADING':
            return { ...state, loading: action.loading }
        default:
            return state
    }
}

type AppDispatchType = Dispatch<AppActionsTypes>
export type AppActionsTypes = InferActionsTypes<typeof appActions>
export const appActions = {
    setInitialize: () => ({ type: 'SET_INITIALIZED' } as const),
    setLoading: (loading: boolean) => ({ type: 'SET_LOADING', loading } as const),
}

export const initializeThunkApp = () => (dispatch: any) => {
    let promise = dispatch(getAuth())
    Promise.all([promise]).then(() => {
        dispatch(appActions.setInitialize())
    })
}

export default AppReducer
