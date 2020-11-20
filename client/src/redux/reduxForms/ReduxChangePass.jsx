
import React from "react"
import { Field, reduxForm } from "redux-form"
import { Box, makeStyles } from '@material-ui/core'
import { H6 } from '../../components/Typography/H6'
import { MyInput } from '../../components/common/FormsControls/MyInput'
import { required } from '../../utils/Validators/validators'
import MyButton from '../../components/SiteButton/MyButton/MyButton'

const useStyles = makeStyles({
        box: {
                marginBottom: 30
        }
})

const ChangePassForm = (props) => {
        const classes = useStyles()
        return (
                <form className="changePassForm" onSubmit={props.handleSubmit}>
                        <Box className={classes.box}>
                                <H6 text="Change Password" />
                        </Box>
                        <Box className={classes.box}>
                                <Field type="password" component={MyInput} label="Old password" validate={[required]} name="oldPass" placeholder="Your old password" fullWidth required autoFocus />
                        </Box>
                        <Box className={classes.box}>
                                <Field type="password" component={MyInput} label="New password" validate={[required]} name="newPass" placeholder="Your new password" required fullWidth />
                        </Box>

                        <Field type="password" component={MyInput} label="Confirm password" validate={[required]} name="verifyPass" placeholder="Repeat new password" required fullWidth />
                        <button><MyButton text="Save" href="" /></button>
                </form>
        )
}
export const ReduxChangePassword = reduxForm({ form: "changePassForm" })(ChangePassForm)