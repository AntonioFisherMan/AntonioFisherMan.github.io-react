import { MessageActions, messageActions } from './ServerMessageReducer'
import { UserType } from '../../types/types'
import { AppStateType, InferActionsTypes } from '../ReduxStore'
import { Dispatch } from 'react'
import { authAPI } from '../../api/authAPI'
import { appActions, AppActionsTypes } from './AppReducer'
import { reset } from 'redux-form'
const initialState = {
    token: sessionStorage.getItem('token') as string | '',
    isAuth: false as boolean | false,
    user: {} as UserType,
    userInform: {} as object,
    forgotEmail: '' as string,
    emailSent: false as boolean,
}

const AuthReducer = (state = initialState, action: AuthActionsType): typeof initialState => {
    switch (action.type) {
        case 'USER_LOADED':
            sessionStorage.setItem('token', action.token)
            return { ...state, isAuth: true, user: action.user, userInform: action.userInform }

        case 'FORGOT_PASS':
            return { ...state, forgotEmail: action.forgotEmail }
        case 'EMAIL_SENT':
            return { ...state, emailSent: action.bool }
        case 'FORGOT_PASS_RESET':
            return { ...state, forgotEmail: action.forgotEmail, emailSent: false }
        case 'AUTH_SUCCESS':
            sessionStorage.setItem('token', action.token)
            return { ...state, isAuth: true }
        case 'AUTH_ERROR':
            sessionStorage.removeItem('token')
            return { ...state, isAuth: false, user: { _id: '', name: '', email: '' }, userInform: {}, token: '' }
        default:
            return state
    }
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<MessageActions | AuthActionsType | AppActionsTypes>
export type AuthActionsType = InferActionsTypes<typeof authActions>

export const authActions = {
    userLoad: (token: string, user: UserType, userInform: object) => ({ type: 'USER_LOADED', token, user, userInform } as const),
    changePass: (forgotEmail: string) => ({ type: 'FORGOT_PASS', forgotEmail } as const),
    emailSent: (bool: boolean) => ({ type: 'EMAIL_SENT', bool } as const),
    resetEmailSentClear: (forgotEmail: string) => ({ type: 'FORGOT_PASS_RESET', forgotEmail } as const),
    authSuccess: (token: string) => ({ type: 'AUTH_SUCCESS', token } as const),
    authError: () => ({ type: 'AUTH_ERROR' } as const),
}

export const getAuth = () => async (dispatch: DispatchType, getState: GetStateType) => {
    try {
        dispatch(appActions.setLoading(true))
        const token = getState().auth.token
        const data = await authAPI.getAuth()
        dispatch(authActions.userLoad(token, data.user, {}))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch({ type: 'AUTH_ERROR' })
        dispatch(appActions.setLoading(false))
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: DispatchType) => {
    try {
        dispatch(appActions.setLoading(true))
        const data = await authAPI.login(email, password, rememberMe)
        dispatch(authActions.userLoad(data.token, data.user, data.inform))
        dispatch(authActions.authSuccess(data.token))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'LOGIN_FAIL'))

        dispatch({ type: 'AUTH_ERROR' })
        dispatch(appActions.setLoading(false))
    }
}

export const register = (name: string, email: string, password: string) => async (dispatch: DispatchType) => {
    try {
        dispatch(appActions.setLoading(true))
        const data = await authAPI.register(name, email, password)
        dispatch(authActions.authSuccess(data.token))
        dispatch(authActions.userLoad(data.token, data.user, {}))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'REGISTER_FAIL'))

        dispatch({ type: 'AUTH_ERROR' })
        dispatch(appActions.setLoading(false))
    }
}
export const requestToken = () => async (dispatch: DispatchType, getState: GetStateType) => {
    try {
        dispatch(appActions.setLoading(true))
        const data = await authAPI.forgotPassword(getState().auth.forgotEmail)
        dispatch(authActions.emailSent(true))
        dispatch(appActions.setLoading(false))
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_SEND_EMAIL'))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.message, err.response.status, 'FORGOT_ERROR'))
        dispatch(appActions.setLoading(false))
    }
}

export const resetPass = (newPassword: string, verifyPassword: string, token: string) => async (dispatch: DispatchType) => {
    try {
        dispatch(appActions.setLoading(true))
        const data = await authAPI.resetPassword(newPassword, verifyPassword, token)

        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_RESET'))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'RESET_ERROR'))

        dispatch(appActions.setLoading(false))
    }
}
export const changeUserPass = (oldPass: string, newPassword: string, verifyPassword: string) => async (
    dispatch: DispatchType,
    getState: GetStateType
) => {
    try {
        dispatch(appActions.setLoading(true))
        const data = await authAPI.changeUserPass(oldPass, newPassword, verifyPassword, getState().auth.user)
        dispatch(messageActions.returnSuccess(data.message, 'SUCCESS_CHANGE_PASS'))

        dispatch(appActions.setLoading(false))
        dispatch(reset('changePassForm'))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'ERROR_CHANGE_PASS'))

        dispatch(appActions.setLoading(false))
    }
}

export const subscribeNewUser = (email: string) => async (dispatch: DispatchType) => {
    try {
        dispatch(appActions.setLoading(true))
        const data = await authAPI.subscribeNewUser(email)
        dispatch(messageActions.returnSuccess(data.message, 'SUBSCRIBER_SUCCESS'))

        const timer = setTimeout(() => {
            dispatch(messageActions.clearSuccess())
        }, 3000)
        dispatch(appActions.setLoading(false))
        return () => clearTimeout(timer)
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'SUBSCRIBER_FAIL'))

        dispatch(appActions.setLoading(false))
    }
}

export const logout = () => (dispatch: DispatchType) => {
    dispatch({ type: 'AUTH_ERROR' })
}

export default AuthReducer
