import React, { useEffect, useState } from 'react'
import { authActions } from '../../../redux/reducers/AuthReducer'
import { requestToken } from '../../../redux/reducers/AuthReducer'
import { connect } from 'react-redux'
import { MessageActions } from '../../../redux/reducers/ServerMessageReducer'
import { AppStateType } from '../../../redux/ReduxStore'
import MyButton from '../../SiteButton/MyButton/MyButton'
import { Container, Grid } from '@material-ui/core'


const ForgotPassword: React.FC<ForgotPasswordType> = (props) => {
    const [email, setEmail] = useState('')

    useEffect(() => {
        props.resetEmailSentClear('')
    }, [email])
    const handleSubmit = (e: any) => {
        e.preventDefault()
        props.requestToken(email)
        setEmail('')
    }
    const handleChangePass = (e: any) => {
        props.changePass(e.target.value)
        setEmail(e.target.value)
    }
    return (

        <Container>
            <Grid container justify="center">
                <form onSubmit={handleSubmit} style={{ marginTop: '30px' }}>
                    <input className="form-control" type="email" value={email} onChange={handleChangePass} placeholder="Enter your email" />
                    <button ><MyButton text="Отправить" href="" /></button>
                </form>
            </Grid>
        </Container>


    )
}





type mapStateToPropsType = {
    email: string,
    emailSent: boolean,
}
type mapDispatchToProps = {
    messageActions: MessageActions,
    resetEmailSentClear: (string: string) => void,
    requestToken: (email: string) => void,
    changePass: (value: string) => void
}
type ForgotPasswordType = mapStateToPropsType & mapDispatchToProps

let mapStateToProps = (state: AppStateType) => {
    return {
        email: state.auth.forgotEmail,
        emailSent: state.auth.emailSent
    }
}


export default connect(mapStateToProps, { ...authActions, requestToken })(ForgotPassword)

