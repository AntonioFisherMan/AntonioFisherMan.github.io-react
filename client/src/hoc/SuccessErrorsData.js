import React from 'react'
import { connect } from 'react-redux'
import { messageActions } from '../redux/reducers/SuccessErrorReducer'

let mapStateToProps = (state) => {
    return {
        errors: state.successErrors.errorsMessage,
        success: state.successErrors.successMessage,
    }
}

export const SuccessErrorsData = (Component) => {
    class RedirectComponent extends React.Component {
        componentWillMount() {
            console.log(this.props)
            //this.props.messageActions.clearErrors()
            //this.props.messageActions.clearSuccess()
        }
        render() {
            return <Component {...this.props} />
        }
    }
    return connect(mapStateToProps, { messageActions })(RedirectComponent)
}
