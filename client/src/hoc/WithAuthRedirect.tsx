import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppStateType } from '../redux/ReduxStore'
import { checkAuth } from '../utils/helperFunctions/checkAuth'
import { logout, refreshTokenThunk } from '../redux/reducers/AuthReducer'
import { checkRefreshToken } from '../utils/helperFunctions/checkRefreshToken'

let mapStateToProps = (state: AppStateType) => {
    return {
        auth: state.auth.isAuth,
    }
}

type MapPropsType = {
    auth: boolean,

}
type DispatchPropType = {
    refreshTokenThunk: (refreshToken: string) => void,
    logout: () => void
}
export function WithAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapPropsType & DispatchPropType> = (props) => {
        let { auth, ...rest } = props
        const isAuth = checkAuth(auth)
        const data = checkRefreshToken() as { needRefresh: false, refreshToken: '', needLogout: false }
        useEffect(() => {
            if (data.needRefresh) {
                props.refreshTokenThunk(data.refreshToken)
            } else if (data.needLogout) {
                props.logout()
            }

        }, [data.needRefresh])

        if (isAuth === true) {
            return <WrappedComponent {...rest as unknown as WCP} />

        } else {
            return <Redirect to={'/sign'} />
        }

    }
    return connect(mapStateToProps, { refreshTokenThunk, logout })(RedirectComponent)

}
