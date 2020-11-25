import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Textarea } from '../../common/FormsControls/Textarea'
import { Grid, makeStyles, Box, Typography, Hidden } from '@material-ui/core'
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
        textActive: {
                marginBottom: 10,
                textAlign: 'center',
        }

})

const FeedbackForm = (props) => {
        const classes = useStyles()
        return (
                <>

                        <Hidden xsDown>
                                <Grid item xs={2}></Grid>
                        </Hidden>
                        <Grid item xs={12} sm={5}>
                                <Hidden smUp >
                                        <Box className={classes.textActive}>
                                                <Typography>Show others how this outfit looks on you!</Typography>
                                                <Typography>Upload pictures here</Typography>
                                        </Box>
                                </Hidden>
                                <UploadFile onSaveFiles={props.onSaveFiles} filesLimit={3} />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                                <Hidden smUp >
                                        <Typography className={classes.textActive}>Review</Typography>
                                </Hidden>
                                <form onSubmit={props.handleSubmit} >
                                        <Field validate={[required]} component={Textarea} classes={classes.textArea} rows={8} name="feedbackTextarea" />
                                        <button className=" ml-auto" ><MyButton text="Send" href="" loading={props.loading} /></button>
                                </form>
                        </Grid>


                </>
        )
}
export const ReduxFeedbackForm = reduxForm({ form: 'feedback' })(FeedbackForm)