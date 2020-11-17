import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { MyInput } from '../../common/FormsControls/MyInput'
import { required, MinLength, MaxLength } from '../../../utils/Validators/validators'
import MyButton from '../../SiteButton/MyButton/MyButton'
import { useStylesSign } from '../Login/LoginForm'
import { Box, Divider } from '@material-ui/core'
import { IconOr } from '../../common/elements/IconOr'
import { Subtitle1 } from '../../Typography/Subtitle1'

const MaxLengthCreator50 = MaxLength(50)
const MinLengthCreator5 = MinLength(5)

const RegisterForm = (props) => {
    const classes = useStylesSign()
    return (
        <form onSubmit={props.handleSubmit} className={classes.registerForm}>
            <Box className={classes.iconBlock}>
                <Divider className={classes.divider} />
                <Box className={classes.icon}>
                    <IconOr />
                </Box>
                <Divider className={classes.divider} />
            </Box>
            <Box className={classes.box}>
                <Field type="Name" label="Name" id="registerName" component={MyInput} validate={[required, MaxLengthCreator50]} name="registerName" placeholder="Enter  name" required />
            </Box>
            <Box className={classes.box}>
                <Field type="email" label="Email" id="registerEmail" component={MyInput} validate={[required, MinLengthCreator5, MaxLengthCreator50]} name="registerEmail" placeholder="Enter  email" required />
            </Box>
            <Field type="password" label="Password" id="registerPass" component={MyInput} validate={[required, MinLengthCreator5, MaxLengthCreator50]} name="registerPassword" placeholder="Enter  password" required />
            <Subtitle1 text="By joining I agree to receive emails from DressItBox" classes={classes.greyText} />
            <button> <MyButton text="register" href="" /></button>
        </form>
    )
}


export const ReduxRegisterForm = reduxForm({ form: 'register' })(RegisterForm)
