import React from 'react'
import './HelpPage.css'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Button3 from '../../SiteButtons/Button3/Button3'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect'
import { SuccessErrorsData } from '../../../hoc/SuccessErrorsData'
import { Textarea } from '../../common/FormsControls/Textarea'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import {sendHelpMessage} from '../../../redux/InformReducer'
import { Alert } from 'reactstrap'
import {required} from '../../../utils/Validators/validators'


const HelpPage = (props) => {
    debugger
    const onSubmit = (formData) => {
        props.sendHelpMessage(formData.helpMessage)
    } 
    const generateSuccessMessage = () => {
        return (
            <div className="row justify-content-center " style={{ color: '#E77E83' }}><h4 className=" d-flex flex-column align-items-center">{props.success.message}<br /><i class="fas fa-check-circle"></i></h4>
    
            </div>
    
        )
    }

    return (
        <div>
            <HeaderBottom />

            <section className="helpBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SiteHeadline text="Help & Contact" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <Sidebar />
                        </div>
                        <div className="col-2"></div>
                       {props.success&&props.success.message?generateSuccessMessage():<ReduxHelpForm onSubmit={onSubmit} errors={props.errors}/>} 
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Button3 link="/catalog" text="Return to catalogue" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

const HelpForm = (props) => {
    return(
        <form className="col-12 col-md-7 helpInform" onSubmit={props.handleSubmit}>
        <p className="helpText">Your question</p>
        <Field component={Textarea} name="helpMessage" validate={[required]}className="form-control" placeholder="text..." />
        <button>Send</button>
        {props.errors&&props.errors.id==='ERROR_HELP_MESSAGE' ?<Alert color="danger">{props.errors.message.message}</Alert> : null}
    </form>
    )
   
}

export const ReduxHelpForm = reduxForm({
    form: 'help'
})(HelpForm)


export default compose(
    SuccessErrorsData,
    WithAuthRedirect,
    connect(null,{sendHelpMessage})
)(HelpPage)