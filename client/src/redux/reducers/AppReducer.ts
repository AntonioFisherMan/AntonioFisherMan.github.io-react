import { InferActionsTypes } from '../ReduxStore'
export interface CountryType {
    code: string
    label: string
    phone: string
}
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

// type AppDispatchType = Dispatch<AppActionsTypes>
export type AppActionsTypes = InferActionsTypes<typeof appActions>
export const appActions = {
    setInitialize: () => ({ type: 'SET_INITIALIZED' } as const),
    setLoading: (loading: boolean) => ({ type: 'SET_LOADING', loading } as const),
}

export const initializeThunkApp = () => (dispatch: any, getState: any) => {
    dispatch(appActions.setLoading(true))
    dispatch(appActions.setInitialize())
    dispatch(appActions.setLoading(false))
}

export default AppReducer
