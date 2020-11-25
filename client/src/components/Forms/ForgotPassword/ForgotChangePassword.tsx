import React from 'react'
import { connect } from 'react-redux'
import { resetPass } from '../../../redux/reducers/AuthReducer'

import { compose } from 'redux'
import { ReduxForgotChangePassword } from '../../../redux/reduxForms/ReduxForgotPass'
import { RouteComponentProps } from 'react-router-dom'

type RouteProps = {
    token: string
}
class ForgotChangePassword extends React.Component<Props & RouteComponentProps<RouteProps>> {
    onSubmit = (formData: any) => {
        const token = this.props.match.params.token
        this.props.resetPass(formData.newPassword, formData.verifyPassword, token)
    }
    render() {
        return (
            <ReduxForgotChangePassword onSubmit={this.onSubmit} />
        )
    }
}

type Props = {
    resetPass: (pass: string, verifyPass: string, token: string) => void
}



export default compose(connect(null, { resetPass }))(ForgotChangePassword)
