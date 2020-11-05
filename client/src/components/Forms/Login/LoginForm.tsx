import React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { Input } from '../../common/FormsControls/Input'
import { required, MinLength, MaxLength } from '../../../utils/Validators/validators'
import { Link } from 'react-router-dom'
import ErrorMessage from '../../common/ServerMessages/ErrorMessage'
import { createField } from '../../common/FormsControls/FormControl'
import MyButton from '../../SiteButton/MyButton'




const MaxLengthCreator20 = MaxLength(20)
const MinLengthCreator5 = MinLength(5)

type LoginValuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}
type LoginPropsType = {
    errors: { id: string, message: string }
}
type KeysType = Extract<keyof LoginValuesType, string>

const LoginForm: React.FC<InjectedFormProps<LoginValuesType, LoginPropsType> & LoginPropsType> = (props) => {
    return (
        <form className="signForm" onSubmit={props.handleSubmit}>
            <h5 className="signHeadline">log-in</h5>
            <div className="form-group">
                {createField<KeysType>("Email", "email", [required, MinLengthCreator5, MaxLengthCreator20],
                    Input, 'form-control', "email", true, "inputEmail",
                )}
            </div>
            <div>
                {createField<KeysType>("Password", "password", [required, MinLengthCreator5, MaxLengthCreator20],
                    Input, 'form-control', "password", true, "inputPassword",
                )}
            </div>

            <div className="custom-control custom-checkbox d-flex ">
                <label className="d-flex align-items-center"><Field name={"rememberMe"} type="checkbox" className="checkbox" component={"input"} />
                    <span className="fake fakeSign" ></span>
                    <span className="checkText span">Remember Me<span>(PrivacyPolicy)</span></span>
                </label>
                <Link className="forgotPass" to="/forgotpassword">forgot password</Link>
                <button><MyButton text="Login" /></button>
            </div>
            {props.errors && props.errors.id === 'LOGIN_FAIL' ? <ErrorMessage message={props.errors.message} /> : null}
        </form>
    )
}

export const ReduxLoginForm = reduxForm<LoginValuesType, LoginPropsType>({ form: 'login' })(LoginForm)