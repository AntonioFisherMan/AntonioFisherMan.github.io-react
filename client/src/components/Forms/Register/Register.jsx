import React from 'react'
import { ReduxRegisterForm } from './RegisterForm'
import { register } from '../../../redux/reducers/AuthReducer'
import { connect } from 'react-redux'



class Register extends React.Component {
    onSubmit = (formData) => {
        this.props.register(formData.registerName, formData.registerEmail, formData.registerPassword)
    }
    render() {
        return (
            <ReduxRegisterForm onSubmit={this.onSubmit} />
        )
    }
}


export default connect(null, { register })(Register)
