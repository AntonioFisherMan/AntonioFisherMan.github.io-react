import React from 'react'
import { ReduxLoginForm } from './LoginForm'
import { login } from '../../../redux/reducers/AuthReducer'
import { connect } from 'react-redux'




class Login extends React.Component<mapDispatchToPropsType & mapStateToProps>{
    onSubmit = (formData: any) => {
        this.props.login(formData.email, formData.password, formData.rememberMe)
    }
    render() {
        return (
            <ReduxLoginForm onSubmit={this.onSubmit} {...this.props} />
        )
    }
}

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
type mapStateToProps = {
    errors: { id: string, message: string },
    open: boolean
}
export default connect(null, { login })(Login)

