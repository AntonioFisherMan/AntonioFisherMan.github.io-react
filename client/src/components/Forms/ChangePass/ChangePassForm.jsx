import React from 'react'
import {Field,reduxForm} from 'redux-form'
import {Input} from '../../common/FormsControls/Input'
import { Alert } from 'reactstrap'
import Button1 from '../../SiteButtons/Button1/Button1'


const ChangePassPage=(props)=>{
   const generateForm = () => {
        return (
            <ReduxChangePassword  onSubmit={props.onSubmit}  errors={props.errors}/> 
        )
    }
    const generateSuccessMessage = () => {
        return (
            <div className="row justify-content-center " style={{ color: '#E77E83' }}><h4 className=" d-flex flex-column align-items-center">{props.success.message}<br /><i class="fas fa-check-circle"></i></h4>
    
            </div>
    
        )
    }
    return (
        <div>
        {props.success&&props.success.message ? generateSuccessMessage() : generateForm()}
    </div>
    )
   
}
 

const ChangePassForm=(props)=>{
    return(
        <form className="changePassForm" onSubmit={props.handleSubmit}>
                <h5 className="changePassHeadline">Change Password</h5>
                <div className="form-group">
                    <Field type="password"  component={Input} className="form-control" name="oldPass" placeholder="Your old password"
                        required autofocus />
                </div>
                <div className="form-group">
                    <Field type="password"  component={Input} className="form-control" name="newPass" placeholder="Your new password"
                        required />
                </div>
                <div className="form-group">
                    <Field type="password" component={Input} className="form-control" name="verifyPass" placeholder="Repeat new password"
                        required />
                </div>
                <div className="changePassFormBtn">
                    <Button1 text="Save" />
                    <button>Save</button>
                </div>
                <div className="row d-flex justify-content-center">
                    {props.errors.id === 'CHANGE_PASS_ERROR' ? <Alert color="danger">{props.errors.message}</Alert> : null}
                </div>
            </form>
    )
}
    const ReduxChangePassword = reduxForm({
        form: 'changePassForm'
    })(ChangePassForm)

    export default ChangePassPage