import React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { Input } from '../../common/FormsControls/Input'
import { required, MinLength, MaxLength } from '../../../utils/Validators/validators'
import { Link } from 'react-router-dom'
import { createField } from '../../common/FormsControls/FormControl'
import MyButton from '../../SiteButton/MyButton'
import { PinkText } from '../../common/elements/PinkText'
import { H6 } from '../../Typography/H6'
import ServerMessage from '../../common/ServerMessages/ServerMessage'




const MaxLengthCreator20 = MaxLength(20)
const MinLengthCreator5 = MinLength(5)

type LoginValuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}
type LoginPropsType = {
    errors: { id: string, message: string },
    open: boolean
}
type KeysType = Extract<keyof LoginValuesType, string>

const LoginForm: React.FC<InjectedFormProps<LoginValuesType, LoginPropsType> & LoginPropsType> = (props) => {
    return (
        <form className="signForm" onSubmit={props.handleSubmit}>
            <H6 text="log-in" />
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
                    <span className="checkText span">Remember Me<PinkText text="(PrivacyPolicy)" variant="body" /></span>
                </label>
                <Link className="forgotPass" to="/forgotpassword">forgot password</Link>
                <button><MyButton text="Login" href="" /></button>
            </div>
        </form>
    )
}

export const ReduxLoginForm = reduxForm<LoginValuesType, LoginPropsType>({ form: 'login' })(LoginForm)