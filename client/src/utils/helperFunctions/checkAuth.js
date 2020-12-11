

export const checkAuth = (auth) => {
    const accessToken = JSON.parse(sessionStorage.getItem('accessToken'))
    const refreshToken = JSON.parse(sessionStorage.getItem('refreshToken'))
    
    try {
        if (!accessToken || !refreshToken||!auth) {
            return false
        }
    } catch (e) {
        return false
    }

    return true
}


