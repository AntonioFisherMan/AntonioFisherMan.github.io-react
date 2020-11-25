import React from 'react'
import { MyInput } from '../../common/FormsControls/MyInput'
import { Field, reduxForm } from 'redux-form'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { Grid, Box, Container } from '@material-ui/core'
import { H4 } from '../../common/Typography/H4'


const ForgotChangePasswordForm = (props) => {
        return (
                <Container>
                        <Grid container justify="center">
                                <Box>
                                        <form onSubmit={props.handleSubmit} style={{ marginTop: "20px" }}>
                                                <H4 text="Password confirmation!" />
                                                <label for="newPassword" style={{ marginTop: "20px" }}>New Password</label>
                                                <Field type="text" component={MyInput} name="newPassword" required fullWidth />
                                                <label for="verifyPassword">Confirm Password</label>
                                                <Field type="text" component={MyInput} name="verifyPassword" required fullWidth />
                                                <button style={{ margin: '0 auto' }}> <MyButton text=" Reset Password" href="" /></button>
                                        </form>
                                </Box>
                        </Grid>
                </Container>

        )
}

export const ReduxForgotChangePassword = reduxForm({ form: 'forgotForm' })(ForgotChangePasswordForm)