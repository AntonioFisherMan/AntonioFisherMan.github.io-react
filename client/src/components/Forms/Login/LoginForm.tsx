import React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { MyInput } from '../../common/FormsControls/MyInput'
import { required, MinLength, MaxLength, email } from '../../../utils/Validators/validators'
import MyButton from '../../SiteButton/MyButton'
import { PinkText } from '../../common/elements/PinkText'
import { H6 } from '../../Typography/H6'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { MyCheckBox } from '../../common/FormsControls/MyCheckBox'


export const useStylesSign = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            marginBottom: 23
        },
        headline: {
            marginBottom: 13
        }
    }),
)

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

const LoginForm: React.FC<InjectedFormProps<LoginValuesType, LoginPropsType> & LoginPropsType> = (props) => {
    const classes = useStylesSign();
    return (
        <form className="signForm" onSubmit={props.handleSubmit}>
            <Box className={classes.headline}>
                <H6 text="log-in" />
            </Box>
            <Box className={classes.box}>
                <Field
                    placeholder="Email"
                    name="email"
                    validate={[required, email, MinLengthCreator5, MaxLengthCreator20]}
                    component={MyInput}
                    type="email"
                    label="Email"
                    required
                />
            </Box>
            <Field
                placeholder="Password"
                name="password"
                validate={[required, MinLengthCreator5, MaxLengthCreator20]}
                component={MyInput}
                type="password"
                label="Password"
                required
            />

            <div className="custom-control custom-checkbox d-flex ">
                <label className="d-flex align-items-center">
                    <Field name="rememberMe" type="checkbox" component={MyCheckBox} />
                    <span className="checkText span">Remember Me<PinkText text="(PrivacyPolicy)" variant="body" /></span>
                </label>
                <MyButton className="forgotPass" text="forgot password" href="/forgotpassword" color="primary" isIcon={false} variant="text" />
                <button><MyButton text="Login" href="" /></button>
            </div>
        </form>
    )
}

export const ReduxLoginForm = reduxForm<LoginValuesType, LoginPropsType>({ form: 'login' })(LoginForm)