import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppStateType } from '../redux/ReduxStore'

let mapStateToProps = (state: AppStateType) => {
    return {
        auth: state.auth.isAuth,
    }
}
type MapPropsType = {
    auth: boolean
}
type DispatchPropType = {}
export function WithAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapPropsType & DispatchPropType> = (props) => {
        let { auth, ...rest } = props
        if (!props.auth) {
            return <Redirect to={'/sign'} />
        } else {
            return <WrappedComponent {...rest as WCP} />
        }
    }
    return connect(mapStateToProps, {})(RedirectComponent)

}
