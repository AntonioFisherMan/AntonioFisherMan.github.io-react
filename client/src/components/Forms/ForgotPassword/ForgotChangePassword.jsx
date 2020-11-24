import React from 'react'
import { connect } from 'react-redux'
import { resetPass } from '../../../redux/reducers/AuthReducer'
import { MyInput } from '../../../common/FormsControls/MyInput'
import { Field, reduxForm } from 'redux-form'
import MyButton from '../../SiteButton/MyButton/MyButton'
import { compose } from 'redux'

class ForgotChangePassword extends React.Component {
    onSubmit = (formData) => {
        const token = this.props.match.params.token
        this.props.resetPass(formData.newPassword, formData.verifyPassword, token)
    }

    render() {
        return (
            <ReduxForgotChangePassword onSubmit={this.onSubmit} />
        )
    }
}


const ForgotChangePasswordForm = (props) => {
    return (
        <div className="container" style={{ marginBottom: "20px" }}>
            <div className="row">
                <div className="col-12 d-flex justif-content-center flex-column align-items-center">
                    <div><h3>Password confirmation!</h3>
                        <form onSubmit={props.handleSubmit} style={{ marginTop: "20px" }}>
                            <label for="newPassword">New Password</label>
                            <Field className="form-control" type="text" component={MyInput} name="newPassword" id="newPassword" required />
                            <label for="verifyPassword">Confirm Password</label>
                            <Field className="form-control" type="text" component={MyInput} name="verifyPassword" id="verifyPassword" required />

                            <button > <MyButton text=" Reset Password" href="" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ReduxForgotChangePassword = reduxForm({
    form: 'forgotForm'
})(ForgotChangePasswordForm)


export default compose(
    connect(null, { resetPass })
)(ForgotChangePassword)
