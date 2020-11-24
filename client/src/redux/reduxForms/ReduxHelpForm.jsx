import React from 'react'
import { Textarea } from '../../common/FormsControls/Textarea'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { H6 } from '../../common/Typography/H6'
import { required } from '../../utils/validators/validators'
import { makeStyles } from '@material-ui/core'
import { Values } from '../../pages/HelpPage/HelpPage'

const useStyles = makeStyles({
        textArea: {
                height: 195,
                width: '100%',
                background: '#F7F8FC',
                border: '1px solid #E9ECF0',
                paddingLeft: 10,
                paddingTop: 10,
                color: 'grey'
        },
        h6: {
                marginBottom: 15
        },
        btn: {
                marginTop: 20
        }
})

const HelpForm = ({ handleSubmit, loading }) => {
        const classes = useStyles()
        return (
                <form onSubmit={handleSubmit}>
                        <H6 text="Your question" propsClasses={classes.h6} />
                        <Field component={Textarea} name="helpMessage" validate={[required]} placeholder="Text..." classes={classes.textArea} rows={10} />
                        <button className={classes.btn}> <MyButton text="send" href="" loading={loading} /></button>
                </form>
        )

}
export const ReduxHelpForm = reduxForm({ form: 'help' })(HelpForm)
