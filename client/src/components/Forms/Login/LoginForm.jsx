import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../common/FormsControls/Input'
import { required, MinLength, MaxLength } from '../../../utils/Validators/validators'
import { Redirect,Link  } from 'react-router-dom'
import { Alert } from 'reactstrap'





const MaxLengthCreator20 = MaxLength(20)
const MinLengthCreator5 = MinLength(5)

const LoginForm = (props) => {
    debugger
    return (
        <form className="signForm" onSubmit={props.handleSubmit}>
            <h5 className="signHeadline">log-in</h5>
            <div className="form-group">
                <Field type="email" id="inputEmail" name={"email"} className="form-control" placeholder="Email adress"
                    required component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator20]} />
            </div>
            <div>

                <Field type="password" id="inputPassword" name={"password"} className="form-control" placeholder="Password"
                    required component={Input} validate={[required, MinLengthCreator5, MaxLengthCreator20]} />
            </div>

            <div className="custom-control custom-checkbox d-flex ">
                <label className="d-flex align-items-center"><Field name={"remember"} type="checkbox" className="checkbox" component={"input"} /> <span className="fake fakeSign" ></span><span className="checkText span">Remember Me<span>(Privacy
                    Policy)</span></span></label>
                <Link className="forgotPass" to="/changepass">forgot password</Link>
                <button>Login</button>
            </div>
            <div style={{ width: '400px' }}>

                {props.errors.id==='LOGIN_FAIL' ?<Alert color="danger">{props.errors.message.message}</Alert> : null}
            </div>
        </form>
    )
}

export const ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)