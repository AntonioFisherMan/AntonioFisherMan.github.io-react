import { TokensType, UserType } from '../types/types'
import { instance } from './api'

type LoginType = {
    inform: { inform: {}; userId: string; isAddInform: boolean }
    user: UserType
    tokens: TokensType
}
type RegisterType = {
    tokens: TokensType
    user: UserType
}
export const authAPI = {
    login(email: string, password: string, rememberMe = false) {
        return instance
            .post<LoginType>('auth/login', { email, password, rememberMe })
            .then((res) => res.data)
    },
    register(name: string, email: string, password: string) {
        return instance
            .post<RegisterType>('auth/register', { name, email, password })
            .then((res) => res.data)
    },
    forgotPassword(forgotEmail: string) {
        return instance.post('profile/forgot_password', { forgotEmail }).then((res) => res.data)
    },
    resetPassword(newPass: string, verifyPass: string, token: string) {
        return instance.post('profile/reset_password', { newPass, verifyPass, token }).then((res) => res.data)
    },
    changeUserPass(oldPass: string, newPassword: string, verifyPassword: string, user: UserType) {
        const { email } = user
        return instance
            .post('profile/change_password', { oldPass, newPassword, verifyPassword, email }, { headers: { Authorization: 'Bearer ' + JSON.parse(sessionStorage.getItem('accessToken') as string) } })
            .then((res) => res.data)
    },
    subscribeNewUser(email: any) {
        return instance.post('auth/subscribe', { email }).then((res) => res.data)
    },
    facebookAuth(accessToken: string, userID: string) {
        return instance.post('auth/facebook_auth', { accessToken, userID }).then((res) => res.data)
    },
    refreshToken(refreshToken: string) {
        return instance.post('auth/refresh_token', { refreshToken }).then((res) => res.data)
    },
    googleAuth(tokenId: string) {
        return instance.post('auth/google_auth', { tokenId }).then((res) => res.data)
    },
    logout(refreshToken: string, userId: string) {
        return instance.post('auth/logout', { refreshToken, userId }).then((res) => res.data)
    },
}
