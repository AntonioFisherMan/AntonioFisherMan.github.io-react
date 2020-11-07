import { UserType } from '../types/types'
import { instance } from './api'

type LoginType = {
    inform: { inform: {}; userId: string; isAddInform: boolean }
    token: string
    user: UserType
}
type RegisterType = {
    token: string
    user: UserType
}
export const authAPI = {
    login(email: string, password: string, rememberMe = false) {
        return instance
            .post<LoginType>('auth/', { email, password, rememberMe })
            .then((res) => res.data)
    },
    register(name: string, email: string, password: string) {
        return instance
            .post<RegisterType>('users', { name, email, password })
            .then((res) => res.data)
    },
    forgotPassword(forgotEmail: string) {
        return instance.post('users/forgot_password', { forgotEmail }).then((res) => {
            debugger
            return res.data
        })
    },
    resetPassword(newPassword: string, verifyPassword: string, token: string) {
        return instance.post('users/reset_password', { newPassword, verifyPassword, token }).then((res) => res.data)
    },
    changeUserPass(oldPass: string, newPassword: string, verifyPassword: string, user: UserType) {
        const { email } = user
        return instance.post('users/change_password', { oldPass, newPassword, verifyPassword, email }).then((res) => res.data)
    },
    getAuth() {
        return instance.get('auth/user').then((res) => res.data)
    },
    subscribeNewUser(email: any) {
        return instance.post('auth/subscribe', { email }).then((res) => res.data)
    },
    getMyUsers() {
        return instance.get('users').then((res) => res.data)
    },
}
