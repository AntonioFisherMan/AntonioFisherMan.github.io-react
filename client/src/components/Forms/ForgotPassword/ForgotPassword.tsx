import React, { useEffect, useState } from 'react'
import { authActions } from '../../../redux/reducers/AuthReducer'
import { requestToken } from '../../../redux/reducers/AuthReducer'
import { connect } from 'react-redux'
import { MessageActions } from '../../../redux/reducers/ServerMessageReducer'
import { AppStateType } from '../../../redux/ReduxStore'
import MyButton from '../../SiteButton/MyButton/MyButton'


const ForgotPassword: React.FC<ForgotPasswordType> = (props) => {
    const [email, setEmail] = useState('')

    useEffect(() => {
        props.resetEmailSentClear('')
    }, [])
    const handleSubmit = (e: any) => {
        e.preventDefault()
        props.requestToken()
        setEmail('')
    }
    const handleChangePass = (e: any) => {
        props.changePass(e.target.value)
        setEmail(e.target.value)
    }
    return (

        <div>
            <div className="container">
                <div className="row ">
                    <div className="col-12 d-flex justify-content-center">
                        <form onSubmit={handleSubmit}>
                            <input className="form-control" type="email" value={email} onChange={handleChangePass} placeholder="Enter your email" />
                            <button ><MyButton text="Отправить" href="" /></button>
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}





type mapStateToPropsType = {
    email: string,
    emailSent: boolean,
}
type mapDispatchToProps = {
    messageActions: MessageActions,
    resetEmailSentClear: (string: string) => void,
    requestToken: () => void,
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

