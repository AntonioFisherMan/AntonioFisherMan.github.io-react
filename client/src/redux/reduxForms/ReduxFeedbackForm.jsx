import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Textarea } from '../../common/FormsControls/Textarea'
import { Grid, makeStyles, Box, Typography } from '@material-ui/core'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { required } from '../../utils/validators/validators'
import UploadFile from '../../components/UploadFile/UploadFile'


const useStyles = makeStyles({
        textArea: {
                background: '#F7F8FC',
                border: '1px solid #E9ECF0',
                width: '100%',
                marginBottom: 45
        },


})

const FeedbackForm = (props) => {
        const classes = useStyles()
        return (
                <>
                        <Grid item md={2}></Grid>
                        <Grid item md={5}>
                                <UploadFile onSaveFiles={props.onSaveFiles} filesLimit={3} />
                        </Grid>
                        <Grid item md={5}>
                                <form onSubmit={props.handleSubmit} >
                                        <Field validate={[required]} component={Textarea} classes={classes.textArea} rows={8} name="feedbackTextarea" />
                                        <button className=" ml-auto" ><MyButton text="Send" href="" loading={props.loading} /></button>
                                </form>
                        </Grid>


                </>
        )
}
export const ReduxFeedbackForm = reduxForm({ form: 'feedback' })(FeedbackForm)