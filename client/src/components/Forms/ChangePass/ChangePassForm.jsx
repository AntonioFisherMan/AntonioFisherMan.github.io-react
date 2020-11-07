import React from "react"
import { Field, reduxForm } from "redux-form"
import { Input } from "../../common/FormsControls/Input"
import MyButton from "../../SiteButton/MyButton"
import { H6 } from "../../Typography/H6"


const ChangePassPage = (props) => {

    return (
        <>
            <ReduxChangePassword onSubmit={props.onSubmit} errors={props.errors} />
        </>
    )

}
const ChangePassForm = (props) => {
    return (
        <form className="changePassForm" onSubmit={props.handleSubmit}>
            <H6 text="Change Password" />
            <div className="form-group">
                <Field type="password" component={Input} className="form-control" name="oldPass" placeholder="Your old password" required autoFocus />
            </div>
            <div className="form-group">
                <Field type="password" component={Input} className="form-control" name="newPass" placeholder="Your new password" required />
            </div>
            <div className="form-group">
                <Field type="password" component={Input} className="form-control" name="verifyPass" placeholder="Repeat new password" required />
            </div>
            <button><MyButton text="Save" href="" /></button>
        </form>
    )
}
const ReduxChangePassword = reduxForm({
    form: "changePassForm"
})(ChangePassForm)

export default ChangePassPage