import { returnErrors, returnSuccess, clearSuccess, MessageSiteType } from './SuccessErrorReducer'
import { testAPI } from '../api/api'
import { UserType } from '../types/types'
import { AppStateType } from './ReduxStore'
import { Dispatch } from 'react'
const USER_LOADED = 'USER_LOADED'
const AUTH_ERROR = 'AUTH_ERROR'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const REGISTER_FAIL = 'REGISTER_FAIL'
const FORGOT_PASS = 'FORGOT_PASS'
const FORGOT_PASS_RESET = 'FORGOT_PASS_RESET'
const EMAIL_SENT = 'EMAIL_SENT'

const initialState = {
    token: sessionStorage.getItem('token') as string | '',
    isAuth: false as boolean | false,
    user: {} as UserType,
    userInform: {} as object,
    forgotEmail: null as string | null,
    emailSent: false as boolean,
}

const AuthReducer = (state = initialState, action: ACType): typeof initialState => {
    switch (action.type) {
        case USER_LOADED:
            sessionStorage.setItem('token', action.token)
            return { ...state, isAuth: true, user: action.user, userInform: action.userInform }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            sessionStorage.setItem('token', action.token)
            return { ...state, isAuth: true }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case LOGOUT_SUCCESS:
            sessionStorage.removeItem('token')
            return { ...state, isAuth: false, user: { _id: '', name: '', email: '' }, userInform: {}, token: '' }
        case FORGOT_PASS:
            return { ...state, forgotEmail: action.forgotEmail }
        case EMAIL_SENT:
            return { ...state, emailSent: action.bool }
        case FORGOT_PASS_RESET:
            return { ...state, forgotEmail: action.forgotEmail, emailSent: false }
        default:
            return state
    }
}

type LogoutType = { type: typeof AUTH_ERROR | typeof LOGIN_FAIL | typeof REGISTER_FAIL | typeof LOGOUT_SUCCESS }
type UserLoadType = { type: typeof USER_LOADED; token: string; user: UserType; userInform: object }
type ChangePassType = { type: typeof FORGOT_PASS; forgotEmail: string }
type EmailSentType = { type: typeof EMAIL_SENT; bool: boolean }
type ResetEmailSentClear = { type: typeof FORGOT_PASS_RESET; forgotEmail: string }
type RegisterLoginType = { type: typeof LOGIN_SUCCESS | typeof REGISTER_SUCCESS; token: string }
type ACType = UserLoadType | ChangePassType | EmailSentType | ResetEmailSentClear | RegisterLoginType | LogoutType

type GetStateType = () => AppStateType
type DispatchType = Dispatch<ACType | MessageSiteType>

export const userLoad = (token: string, user: UserType, userInform: object): UserLoadType => ({
    type: USER_LOADED,
    token,
    user,
    userInform,
})

export const changePass = (forgotEmail: string): ChangePassType => ({
    type: FORGOT_PASS,
    forgotEmail,
})

export const emailSent = (bool: boolean): EmailSentType => ({
    type: EMAIL_SENT,
    bool,
})

export const resetEmailSentClear = (forgotEmail: string): ResetEmailSentClear => ({
    type: FORGOT_PASS_RESET,
    forgotEmail,
})

export const getAuth = () => async (dispatch: DispatchType, getState: GetStateType) => {
    try {
        const token = getState().auth.token
        let { data } = await testAPI.getAuth()
        dispatch(userLoad(token, data.user, {}))
    } catch (error) {
        dispatch({ type: AUTH_ERROR })
    }
}
export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: DispatchType) => {
    try {
        const { data } = await testAPI.login(email, password, rememberMe)
        dispatch(userLoad(data.token, data.user, data.inform))
        dispatch({ type: LOGIN_SUCCESS, token: data.token })
    } catch (err) {
        dispatch(returnErrors(err.response.datmessage, err.response.status, 'LOGIN_FAIL'))
        dispatch({ type: LOGIN_FAIL })
    }
}

export const register = (name: string, email: string, password: string) => async (dispatch: DispatchType) => {
    try {
        const { data } = await testAPI.register(name, email, password)
        dispatch({ type: REGISTER_SUCCESS, token: data.token })
        dispatch(userLoad(data.token, data.user, {}))
    } catch (err) {
        dispatch(returnErrors(err.response.datmessage, err.response.status, 'REGISTER_FAIL'))
        dispatch({ type: REGISTER_FAIL })
    }
}
export const requestToken = () => async (dispatch: DispatchType, getState: GetStateType) => {
    try {
        await testAPI.forgotPassword(getState().auth.forgotEmail)
        dispatch(emailSent(true))
    } catch (err) {
        dispatch(returnErrors(err.response.datmessage, err.response.status, 'FORGOT_ERROR'))
    }
}

export const resetPass = (newPassword: string, verifyPassword: string, token: string) => async (dispatch: DispatchType) => {
    try {
        const response = await testAPI.resetPassword(newPassword, verifyPassword, token)
        dispatch(returnSuccess(response.datmessage, response.status, 'SUCCESS_RESET'))
    } catch (err) {
        dispatch(returnErrors(err.response.datmessage, err.response.status, 'RESET_ERROR'))
    }
}
export const changeUserPass = (oldPass: string, newPassword: string, verifyPassword: string) => async (
    dispatch: DispatchType,
    getState: GetStateType
) => {
    try {
        const response = await testAPI.changeUserPass(oldPass, newPassword, verifyPassword, getState().auth.user)
        dispatch(returnSuccess(response.datmessage, response.status, 'SUCCESS_CHANGE_PASS'))
    } catch (err) {
        dispatch(returnErrors(err.response.datmessage, err.response.status, 'ERROR_CHANGE_PASS'))
    }
}

export const subscribeNewUser = (email: string) => async (dispatch: DispatchType) => {
    try {
        const response = await testAPI.subscribeNewUser(email)
        dispatch(returnSuccess(response.datmessage, response.status, 'SUBSCRIBER_SUCCESS'))
        const timer = setTimeout(() => {
            dispatch(clearSuccess())
        }, 3000)
        return () => clearTimeout(timer)
    } catch (err) {
        dispatch(returnErrors(err.response.datmessage, err.response.status, 'SUBSCRIBER_FAIL'))
    }
}

export const logout = () => (dispatch: DispatchType) => {
    dispatch({ type: LOGOUT_SUCCESS })
}

export default AuthReducer
