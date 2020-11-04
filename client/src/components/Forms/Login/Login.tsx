import React from 'react'
import { ReduxLoginForm } from './LoginForm'
import { login } from '../../../redux/reducers/AuthReducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { SuccessErrorsData } from '../../../hoc/SuccessErrorsData'



class Login extends React.Component<mapDispatchToPropsType & mapStateToProps>{
    onSubmit = (formData: any) => {
        this.props.login(formData.email, formData.password, formData.rememberMe)
    }
    render() {
        return (
            <ReduxLoginForm onSubmit={this.onSubmit} errors={this.props.errors} />
        )
    }
}

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type mapStateToProps = {
    errors: { id: string, message: string }
}
export default compose(SuccessErrorsData,
    connect(null, { login }))(Login)

