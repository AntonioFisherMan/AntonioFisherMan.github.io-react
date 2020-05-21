import React from 'react'
import { changePass, requestToken, resetEmailSentClear } from '../../../redux/AuthReducer'
import { Alert } from 'reactstrap'
import { compose } from 'redux';
import { SuccessErrorsData } from '../../../hoc/SuccessErrorsData';
import { connect } from 'react-redux';
import {clearErrors,clearSuccess} from '../../../redux/SuccessErrorReducer'

class ForgotPassword extends React.Component {
    componentDidMount() {
        this.props.resetEmailSentClear()
    }
    changePassword = (e) => {
        this.props.changePass(e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.requestToken();
    }
    generateForm = () => {
        debugger
        return (
            <div>
                <div className="container">
                <div className="row ">
                    <div className="col-12 d-flex justify-content-center">
                        <form onSubmit={this.handleSubmit}>
                            <input className="form-control" type="email" onChange={this.changePassword} placeholder="Enter your email" />
                            <input className="btn btn-success" style={{ width: "100%", marginTop: '20px' }} type="submit" value="Отправить" />
                        </form>

                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    {this.props.errors.id === 'FORGOT_ERROR' ? <Alert color="danger">{this.props.errors.message.message}</Alert> : null}
                </div>
            </div>
            </div>
            

        )
    }
    generateSuccessMessage = () => {
        return (
            <div className="row justify-content-center " style={{ color: '#E77E83' }}><h4 className=" d-flex flex-column align-items-center">If account exist you will recieve message with instructions<br /><i class="fab fa-linux"></i></h4>

            </div>

        )
    }
    render() {
        return (
            <div>
                {this.props.emailSent ? this.generateSuccessMessage() : this.generateForm()}
            </div>

        )
    }
}



let mapStateToProps = (state) => {
    return {
        email: state.auth.forgotEmail,
        emailSent: state.auth.emailSent
    }
}


export default compose(
    SuccessErrorsData,
    connect(mapStateToProps,{clearSuccess,clearErrors,changePass, requestToken, resetEmailSentClear})
)(ForgotPassword)

