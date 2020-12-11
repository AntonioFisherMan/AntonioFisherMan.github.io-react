import React from 'react'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import { MyInput } from '../../../common/FormsControls/MyInput'
import { required, MinLength, MaxLength, email } from '../../../utils/validators/validators'
import MyButton from '../../SiteButton/MyButton/MyButton'
import { PinkText } from '../../../common/Typography/PinkText'
import { H6 } from '../../../common/Typography/H6'
import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'
import { MyCheckBox } from '../../../common/FormsControls/MyCheckBox'


export const useStylesSign = makeStyles((theme: Theme) =>
    createStyles({
        box: {
            marginBottom: 23,
            maxWidth: 390
        },
        headline: {
            marginBottom: 13
        },
        maxWidth: {
            width: 500,
            color: "red"
        },
        checkBoxBlock: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: 10
        },
        checkBox: {
            marginRight: 11
        },
        btn: {
            display: 'flex',
            justifyContent: 'center',
        },
        iconBlock: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        divider: {
            width: 150,
        },
        icon: {
            margin: 20,
        },
        greyText: {
            fontSize: 12,
            color: '#707070',
            fontWeight: 400,
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 20
        },
        margin: {
            margin: 0,
            maxWidth: 390
        },
        loginForm: {

        },
        pink: {
            fontSize: 12,
            alignItems: 'center',
            display: 'flex'
        },
        span: {
            display: 'flex'
        },
        '@media (max-width: 960px)': {
            loginForm: {
                marginBottom: 30
            }
        },
        '@media (max-width: 600px)': {
            divider: {
                width: 100,
            },
            iconBlock: {
                justifyContent: 'center',
            },
            checkBoxBlock: {
                marginLeft: 0,
                marginTop: 10,
                flexDirection: 'column'
            }
        }

    }),
)

const MaxLengthCreator20 = MaxLength(20)
const MinLengthCreator5 = MinLength(5)



const LoginForm: React.FC<InjectedFormProps<LoginValuesType>> = (props) => {
    const classes = useStylesSign()
    return (
        <form onSubmit={props.handleSubmit} className={classes.loginForm}>
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
                    fullWidth
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
                fullWidth
                propsClasses={classes.margin}
            />


            <Box className={classes.checkBoxBlock}>
                <Box className={classes.span}>
                    <Field name="rememberMe" type="checkbox" component={MyCheckBox} label="Remember Me" className={classes.checkBox} />
                    <PinkText text="(PrivacyPolicy)" variant="body1" classes={classes.pink} />
                </Box>
                <MyButton text="forgot password?" href="/forgotpassword" color="primary" isIcon={false} variant="text" />
            </Box>
            <button className={classes.btn}><MyButton text="Login" href="" /></button>
        </form>
    )
}

type LoginValuesType = {
    email: string,
    password: string,
    rememberMe: boolean
}


export const ReduxLoginForm = reduxForm<LoginValuesType>({ form: 'login' })(LoginForm)