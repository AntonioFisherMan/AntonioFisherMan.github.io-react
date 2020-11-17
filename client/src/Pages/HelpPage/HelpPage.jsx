import React from 'react'
import './HelpPage.css'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { ServerMessageData } from '../../hoc/ServerMessageData'
import { Textarea } from '../../components/common/FormsControls/Textarea'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { sendHelpMessage } from '../../redux/reducers/InformReducer'
import { required } from '../../utils/Validators/validators'
import { H6 } from '../../components/Typography/H6'

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
                        <ReduxHelpForm onSubmit={onSubmit} />
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
            <button style={{ marginTop: '20px' }}> <MyButton text="send" href="" /></button>
        </form>
    )

}
const ReduxHelpForm = reduxForm({ form: 'help' })(HelpForm)


export default compose(
    WithAuthRedirect,
    connect(null, { sendHelpMessage })
)(HelpPage)