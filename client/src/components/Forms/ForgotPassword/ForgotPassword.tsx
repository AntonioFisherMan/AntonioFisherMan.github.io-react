import React from 'react'
import { authActions, AuthActionsType } from '../../../redux/reducers/AuthReducer'
import { requestToken } from '../../../redux/reducers/AuthReducer'
import { compose } from 'redux';
import { SuccessErrorsData } from '../../../hoc/SuccessErrorsData';
import { connect } from 'react-redux';
import { MessageActions, messageActions } from '../../../redux/reducers/SuccessErrorReducer'
import SuccessMessage from '../../common/ServerMessages/SuccessMessage';
import ErrorMessage from '../../common/ServerMessages/ErrorMessage';
import { AppStateType } from '../../../redux/ReduxStore';

class ForgotPassword extends React.Component<any> {
    componentDidMount() {
        this.props.authActions.resetEmailSentClear('')
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.requestToken();
    }
    generateForm = () => {
        return (
            <div>
                <div className="container">
                    <div className="row ">
                        <div className="col-12 d-flex justify-content-center">
                            <form onSubmit={this.handleSubmit}>
                                <input className="form-control" type="email" onChange={(e) => this.props.authActions.changePass(e.target.value)} placeholder="Enter your email" />
                                <input className="btn btn-success" style={{ width: "100%", marginTop: '20px' }} type="submit" value="Отправить" />
                            </form>

                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        {this.props.errors.id === 'FORGOT_ERROR' ? <ErrorMessage message={this.props.errors.message} /> : null}
                    </div>
                </div>
            </div>


        )
    }
    render() {
        return (
            <div>
                {this.props.emailSent ? <SuccessMessage message={"If account exist you will recieve message with instructions"} /> : this.generateForm()}
            </div>

        )
    }
}

type mapStateToPropsType = {
    email: string,
    emailSent: boolean,
    errors: { id: string, message: string }
}
type mapDispatchToProps = {
    messageActions: MessageActions,
    authActions: AuthActionsType,
    requestToken: () => void
}
type ForgotPasswordType = mapStateToPropsType & mapDispatchToProps

let mapStateToProps = (state: AppStateType) => {
    return {
        email: state.auth.forgotEmail,
        emailSent: state.auth.emailSent
    }
}


export default compose(
    SuccessErrorsData,
    connect(mapStateToProps, { messageActions, authActions, requestToken })
)(ForgotPassword)

