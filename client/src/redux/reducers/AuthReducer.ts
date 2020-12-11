import { MessageActions, messageActions } from './ServerMessageReducer'
import { TokensType, UserType } from '../../types/types'
import { AppStateType, InferActionsTypes } from '../ReduxStore'
import { Dispatch } from 'react'
import { authAPI } from '../../api/authAPI'
import { appActions, AppActionsTypes } from './AppReducer'
import { reset } from 'redux-form'
import { informActions } from './InformReducer'

const accessToken = sessionStorage.getItem('accessToken')
const refreshToken = sessionStorage.getItem('refreshToken')
const isAuth = sessionStorage.getItem('isAuth')
const user: UserType = JSON.parse(sessionStorage.getItem('user') as string)
const userInform = JSON.parse(sessionStorage.getItem('userInform') as string)

const initialState = {
    tokens: { accessToken: accessToken, refreshToken: refreshToken },
    isAuth: Boolean(isAuth) as boolean | false,
    user: user as UserType,
    userInform: userInform as object,
    forgotEmail: '' as string,
    emailSent: false as boolean,
}

const AuthReducer = (state = initialState, action: AuthActionsType): typeof initialState => {
    switch (action.type) {
        case 'USER_LOADED':
            sessionStorage.setItem('refreshToken', JSON.stringify(action.tokens.refreshToken))
            sessionStorage.setItem('accessToken', JSON.stringify(action.tokens.accessToken))
            sessionStorage.setItem('isAuth', JSON.stringify(true))
            sessionStorage.setItem('user', JSON.stringify(action.user))
            sessionStorage.setItem('userInform', JSON.stringify(action.userInform))
            return {
                ...state,
                isAuth: true,
                user: action.user,
                userInform: action.userInform,
                tokens: { accessToken: action.tokens.accessToken, refreshToken: action.tokens.refreshToken },
            }
        case 'FORGOT_PASS':
            return { ...state, forgotEmail: action.forgotEmail }
        case 'EMAIL_SENT':
            return { ...state, emailSent: action.bool }
        case 'FORGOT_PASS_RESET':
            return { ...state, forgotEmail: action.forgotEmail, emailSent: false }
        case 'LOGOUT':
            sessionStorage.removeItem('accessToken')
            sessionStorage.removeItem('refreshToken')
            sessionStorage.removeItem('isAuth')
            sessionStorage.removeItem('user')
            sessionStorage.removeItem('userInform')
            return { ...state, isAuth: false, user: { _id: '', name: '', email: '' }, userInform: {} }
        default:
            return state
    }
}

type GetStateType = () => AppStateType
type DispatchType = Dispatch<MessageActions | AuthActionsType | AppActionsTypes | any>
export type AuthActionsType = InferActionsTypes<typeof authActions>

export const authActions = {
    userLoad: (user: any, userInform: any, tokens: TokensType) => ({ type: 'USER_LOADED', user, userInform, tokens } as const),
    changePass: (forgotEmail: string) => ({ type: 'FORGOT_PASS', forgotEmail } as const),
    emailSent: (bool: boolean) => ({ type: 'EMAIL_SENT', bool } as const),
    resetEmailSentClear: (forgotEmail: string) => ({ type: 'FORGOT_PASS_RESET', forgotEmail } as const),
    logout: () => ({ type: 'LOGOUT' } as const),
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: DispatchType) => {
    try {
        dispatch(appActions.setLoading(true))
        const data = await authAPI.login(email, password, rememberMe)
        dispatch(authActions.userLoad(data.user, data.inform, data.tokens))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'LOGIN_FAIL'))
        dispatch(appActions.setLoading(false))
    }
}

export const register = (name: string, email: string, password: string) => async (dispatch: DispatchType) => {
    try {
        dispatch(appActions.setLoading(true))
        const data = await authAPI.register(name, email, password)
        dispatch(authActions.userLoad(data.user, {}, data.tokens))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'REGISTER_FAIL'))
        dispatch(appActions.setLoading(false))
    }
}
export const requestToken = (email: string) => async (dispatch: DispatchType) => {
    try {
        dispatch(appActions.setLoading(true))
        const data = await authAPI.forgotPassword(email)
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
        dispatch(reset('forgotForm'))
        setTimeout(() => {}, 1000)
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
export const refreshTokenThunk = (refreshToken: string) => async (dispatch: any) => {
    try {
        const data = await authAPI.refreshToken(refreshToken)
        sessionStorage.setItem('refreshToken', JSON.stringify(data.tokens.refreshToken))
        sessionStorage.setItem('accessToken', JSON.stringify(data.tokens.accessToken))
    } catch (err) {
        dispatch(authActions.logout())
        dispatch(informActions.clearInform())
    }
}
export const facebookAuth = (accessToken: string, userId: string) => async (dispatch: any) => {
    try {
        dispatch(appActions.setLoading(true))
        const data = await authAPI.facebookAuth(accessToken, userId)
        dispatch(authActions.userLoad(data.user, data.inform, data.tokens))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'GOOGLE_LOGIN_FAIL'))
        dispatch(appActions.setLoading(false))
    }
}
export const googleAuth = (tokenId: string) => async (dispatch: any) => {
    try {
        dispatch(appActions.setLoading(true))
        const data = await authAPI.googleAuth(tokenId)
        dispatch(authActions.userLoad(data.user, data.inform, data.tokens))
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'GOOGLE_LOGIN_FAIL'))
        dispatch(appActions.setLoading(false))
    }
}
export const logout = () => async (dispatch: any, getState: any) => {
    try {
        dispatch(appActions.setLoading(true))
        await authAPI.logout(JSON.parse(sessionStorage.getItem('refreshToken') as string), getState().auth.user.id)
        dispatch(authActions.logout())
        dispatch(informActions.clearInform())
        dispatch(appActions.setLoading(false))
    } catch (err) {
        dispatch(messageActions.returnErrors(err.response.data.message, err.response.status, 'LOGOUT_FAIL'))
        dispatch(appActions.setLoading(false))
    }
}

export default AuthReducer
