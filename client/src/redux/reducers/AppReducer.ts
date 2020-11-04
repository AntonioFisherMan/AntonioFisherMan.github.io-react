import { getAuth } from './AuthReducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

let initialState = {
    initialized: false as Boolean | false,
}

type InitialStateType = typeof initialState
const AppReducer = (state = initialState, action: ACType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return { ...state, initialized: true }
        default:
            return state
    }
}

type setInitializeType = { type: typeof SET_INITIALIZED }
type ACType = setInitializeType

export const setInitialize = (): setInitializeType => ({
    type: SET_INITIALIZED,
})

export const initializeThunkApp = () => (dispatch: any) => {
    let promise = dispatch(getAuth())
    Promise.all([promise]).then(() => {
        dispatch(setInitialize())
    })
}

export default AppReducer
