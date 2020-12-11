import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { required, MaxLength, MinLength } from '../../utils/validators/validators'
import { Box, makeStyles, } from '@material-ui/core'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { MyInput2 } from './MyInput2'

const maxLengthCreator30 = MaxLength(30)
const minLengthCreator5 = MinLength(5)


const useStyles = makeStyles({
        footerForm: {
                display: 'flex',
                position: 'relative'
        },
        footerBox: {
                display: 'flex',
                alignItems: 'center',
        }
})

const FormEmail: React.FC<InjectedFormProps> = ({ handleSubmit }) => {
        const classes = useStyles()
        return (
                <form className={classes.footerForm} onSubmit={handleSubmit}>
                        <Box className={classes.footerBox}>
                                <Field name={"submitEmail"} type="email" component={MyInput2} placeholder="Your email" validate={[required, maxLengthCreator30, minLengthCreator5]} />
                                <button ><MyButton text="send" href="" size="small" /> </button>
                        </Box>
                </form>
        )
}


export const ReduxFormEmailSent = reduxForm({ form: 'submitEmail' })(FormEmail)






