import { Dispatch } from 'redux'
import { profileAPI } from '../../api/profileAPI'
import { InferActionsTypes } from '../ReduxStore'
export interface CountryType {
    code: string
    label: string
    phone: string
}
let initialState = {
    loading: false as boolean,
    initialized: false as Boolean | false,
    countries: [] as Array<CountryType>,
}

type InitialStateType = typeof initialState
const AppReducer = (state = initialState, action: AppActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SET_INITIALIZED':
            return { ...state, initialized: true }
        case 'SET_LOADING':
            return { ...state, loading: action.loading }
        case 'SET_COUNTRY':
            return { ...state, countries: action.countries }
        default:
            return state
    }
}

type AppDispatchType = Dispatch<AppActionsTypes>
export type AppActionsTypes = InferActionsTypes<typeof appActions>
export const appActions = {
    setInitialize: () => ({ type: 'SET_INITIALIZED' } as const),
    setLoading: (loading: boolean) => ({ type: 'SET_LOADING', loading } as const),
    setCountry: (countries: Array<CountryType>) => ({ type: 'SET_COUNTRY', countries } as const),
}

export const initializeThunkApp = () => (dispatch: any, getState: any) => {
    dispatch(appActions.setLoading(true))
    const isAuth = getState().auth.isAuth
    dispatch(appActions.setInitialize())
    dispatch(appActions.setLoading(false))
}
export const uploadCountries = () => async (dispatch: any) => {
    appActions.setLoading(true)
    let countries = await profileAPI.uploadCountry()
    dispatch(appActions.setCountry(countries))
    appActions.setLoading(false)
}

export default AppReducer
