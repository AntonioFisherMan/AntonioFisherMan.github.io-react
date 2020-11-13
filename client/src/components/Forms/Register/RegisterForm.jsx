import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { MyInput } from '../../common/FormsControls/MyInput'
import { required, MinLength, MaxLength } from '../../../utils/Validators/validators'
import MyButton from '../../SiteButton/MyButton'
import { useStylesSign } from '../Login/LoginForm'
import { Box } from '@material-ui/core'


const MaxLengthCreator50 = MaxLength(50)
const MinLengthCreator5 = MinLength(5)

const RegisterForm = (props) => {
    const classes = useStylesSign()
    return (
        <form className="signForm" onSubmit={props.handleSubmit}>
            <div className="signPopUpBlock">
                <hr />
                <div className="signPopUp">
                    <p>Or</p>
                </div>
                <hr />
            </div>
            <Box className={classes.box}>
                <Field type="Name" label="Name" id="registerName" component={MyInput} validate={[required, MaxLengthCreator50]} name="registerName" placeholder="Enter  name" required />
            </Box>
            <Box className={classes.box}>
                <Field type="email" label="Email" id="registerEmail" component={MyInput} validate={[required, MinLengthCreator5, MaxLengthCreator50]} name="registerEmail" placeholder="Enter  email" required />
            </Box>
            <Box className={classes.box}>
                <Field type="password" label="Password" id="registerPass" component={MyInput} validate={[required, MinLengthCreator5, MaxLengthCreator50]} name="registerPassword" placeholder="Enter  password" required />

            </Box>
            <p className="signGrey">By joining I agree to receive emails from DressItBox</p>
            <button> <MyButton text="register" href="" /></button>
        </form>
    )
}
export const ReduxRegisterForm = reduxForm({
    form: 'register'
})(RegisterForm)
