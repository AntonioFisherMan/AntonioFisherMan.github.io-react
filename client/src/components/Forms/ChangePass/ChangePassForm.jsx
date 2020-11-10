import React from "react"
import { Field, reduxForm } from "redux-form"
import { Input } from "../../common/FormsControls/Input"
import MyButton from "../../SiteButton/MyButton"
import { H6} from "../../Typography/H6"
import {Box} from '@material-ui/core'
import { useStylesSign } from "../Login/LoginForm"
import { required } from "../../../utils/Validators/validators"

const ChangePassPage = (props) => {
    return (
        <>
            <ReduxChangePassword onSubmit={props.onSubmit} errors={props.errors} />
        </>
    )
}

const ChangePassForm = (props) => {
    const classes=useStylesSign()
    return (
        <form className="changePassForm" onSubmit={props.handleSubmit}>
            <Box className={classes.box}>
            <H6 text="Change Password" />
            </Box>
            <Box className={classes.box}>
            <Field type="password" component={Input} label="Old password"  validate={[required]} name="oldPass" placeholder="Your old password" required autoFocus />
            </Box>
            <Box className={classes.box}>
            <Field type="password" component={Input} label="New password"  validate={[required]} name="newPass" placeholder="Your new password" required />
            </Box>
            
          <Field type="password" component={Input} label="Confirm password"  validate={[required]} name="verifyPass" placeholder="Repeat new password" required />
            
            <button><MyButton text="Save" href="" /></button>
        </form>
    )
}
const ReduxChangePassword = reduxForm({
    form: "changePassForm"
})(ChangePassForm)

export default ChangePassPage