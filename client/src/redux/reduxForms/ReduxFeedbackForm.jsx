import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Textarea } from '../../components/common/FormsControls/Textarea'
import { Box, makeStyles } from '@material-ui/core'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { required } from '../../utils/Validators/validators'
import { Subtitle1 } from '../../components/Typography/Subtitle1'


const useStyles = makeStyles({
        textArea: {
                background: '#F7F8FC',
                border: '1px solid #E9ECF0',
                width: '100%',
                marginBottom: 45
        },
        box: {
                marginTop: 97
        }
})

const FeedbackForm = (props) => {
        const classes = useStyles()
        return (
                <Box className={classes.box}>
                        <Subtitle1 text="Review" />
                        <form onSubmit={props.handleSubmit} >
                                <Field validate={[required]} component={Textarea} classes={classes.textArea} rows={8} name="feedbackTextarea" />
                                <button className=" ml-auto" ><MyButton text="Send" href="" loading={props.loading} /></button>
                        </form>
                </Box>
        )
}
export const ReduxFeedbackForm = reduxForm({ form: 'feedback' })(FeedbackForm)