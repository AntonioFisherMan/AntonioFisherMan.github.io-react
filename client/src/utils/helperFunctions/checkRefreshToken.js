import decode from 'jwt-decode'

export const checkRefreshToken = () => {
    const accessToken = sessionStorage.getItem('accessToken')
    const refreshToken = JSON.parse(sessionStorage.getItem('refreshToken'))
    let data = {
        needRefresh: true,
        refreshToken: refreshToken,
    }

    if (accessToken) {
        const { exp: expAccess } = decode(accessToken)
        const { exp: expRefresh } = decode(refreshToken)
        if (expAccess < new Date().getTime() / 1000) {
            return data
        } else if (expRefresh < new Date().getTime() / 1000) {
            return { needLogout: true }
        }
    }
    return { needRefresh: false }
}
