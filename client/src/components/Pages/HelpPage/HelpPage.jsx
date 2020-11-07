import React from 'react'
import './HelpPage.css'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import { SiteHeadline } from '../../Typography/SiteHeadline'
import MyButton from '../../SiteButton/MyButton'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect'
import { ServerMessageData } from '../../../hoc/ServerMessageData'
import { Textarea } from '../../common/FormsControls/Textarea'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { sendHelpMessage } from '../../../redux/reducers/InformReducer'
import { required } from '../../../utils/Validators/validators'
import ServerMessage from '../../common/ServerMessages/ServerMessage'
import { H6 } from '../../Typography/H6'
const HelpPage = (props) => {

    const onSubmit = (formData) => {
        props.sendHelpMessage(formData.helpMessage)
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
                        {props.success && props.success.id === 'SUCCESS_HELP_MESSAGE' ? <ServerMessage message={props.success.message} /> : <ReduxHelpForm onSubmit={onSubmit} errors={props.errors} />}
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="returnLink">
                                <MyButton href="/catalog" text="Return to catalogue" variant="text" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

const HelpForm = (props) => {
    return (
        <form className="col-12 col-md-7 helpInform" onSubmit={props.handleSubmit}>
            <H6 text="Your question" />
            <Field component={Textarea} name="helpMessage" validate={[required]} className="form-control" placeholder="text..." />
            <button style={{ marginTop: '20px' }}> <MyButton text="send" /></button>

            {props.errors && props.errors.id === 'ERROR_HELP_MESSAGE' ? <ServerMessage message={props.errors.message} /> : null}

        </form>
    )

}

export const ReduxHelpForm = reduxForm({ form: 'help' })(HelpForm)


export default compose(
    ServerMessageData,
    WithAuthRedirect,
    connect(null, { sendHelpMessage })
)(HelpPage)