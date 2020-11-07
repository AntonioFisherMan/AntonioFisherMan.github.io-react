import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../common/FormsControls/Input'
import { required, MinLength, MaxLength } from '../../../utils/Validators/validators'
import ServerMessage from '../../common/ServerMessages/ServerMessage'
import MyButton from '../../SiteButton/MyButton'


const MaxLengthCreator50 = MaxLength(50)
const MinLengthCreator5 = MinLength(5)

const RegisterForm = (props) => {
    return (
        <form className="signForm" onSubmit={props.handleSubmit}>


            <div className="signPopUpBlock">
                <hr />
                <div className="signPopUp">
                    <p>Or</p>
                </div>
                <hr />
            </div>
            <div className="form-group">
                <div className="form-group">
                    <Field type="Name" id="registerName" component={Input} validate={[required, MaxLengthCreator50]} name={"registerName"} className="form-control" placeholder="Enter  name" required />
                </div>
                <div className="form-group">
                    <Field type="email" id="registerEmail" component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator50]} name={"registerEmail"} className="form-control" placeholder="Enter  email" required />
                </div>
                <div className="form-group">
                    <Field type="password" id="registerPass" component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator50]} name={"registerPassword"} className="form-control" placeholder="Enter  password" required />
                </div>
            </div>
            <p className="signGrey">By joining I agree to receive emails from DressItBox</p>
            <button> <MyButton text="register" href="" /></button>
        </form>
    )
}
export const ReduxRegisterForm = reduxForm({
    form: 'register'
})(RegisterForm)
