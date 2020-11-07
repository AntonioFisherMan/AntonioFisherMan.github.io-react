import React from 'react'
import { connect } from 'react-redux'
import { messageActions } from '../redux/reducers/ServerMessageReducer'

let mapStateToProps = (state) => {
    return {
        errors: state.messages.errorsMessage,
        success: state.messages.successMessage,
        open: state.messages.open,
    }
}

export const ServerMessageData = (Component) => {
    class RedirectComponent extends React.PureComponent {
        componentWillUnmount() {
            this.props.clearErrors()
            this.props.clearSuccess()
        }

        render() {
            return <Component {...this.props} />
        }
    }
    return connect(mapStateToProps, { ...messageActions })(RedirectComponent)
}
