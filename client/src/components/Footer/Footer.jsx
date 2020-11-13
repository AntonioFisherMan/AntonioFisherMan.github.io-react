import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { Field, reduxForm } from 'redux-form'
import { required, MaxLength, MinLength } from '../../utils/Validators/validators'
import MyButton from '../SiteButton/MyButton'
import { PinkText } from '../common/elements/PinkText'
import { Box, TextField, withStyles, createStyles } from '@material-ui/core'

const maxLengthCreator30 = MaxLength(30)
const minLengthCreator5 = MinLength(5)



const Footer = (props) => {
    const onSubmitBLL = (formData) => {
        props.subscribeNewUser(formData.submitEmail)
    }
    return (
        <div>
            <footer className="footer">
                <section>
                    <div className="container">
                        <hr style={{ border: '0.5px solid #111111 !important' }} />
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3 d-flex flex-column align-items-center">
                                <div className={styles.footerItem}>
                                    <p>Help</p>
                                    <Link to="/">
                                        <li>How it Works</li>
                                    </Link>
                                    <Link to="/">
                                        <li>FAQs</li>
                                    </Link>
                                    <Link to="/">
                                        <li>Size Charts</li>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className={styles.footerItem}>
                                    <p>About Us</p>
                                    <Link to="/">
                                        <li>About Dress IT Box</li>
                                    </Link>
                                    <Link to="/">
                                        <li>Privacy & Cookie Policy</li>
                                    </Link>
                                    <Link to="/">
                                        <li>Terms & Conditions</li>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 d-flex flex-column align-items-center col-sm-6 col-lg-3">
                                <div className={styles.footerItem}>
                                    <p>Quick Links</p>
                                    <Link to="/">
                                        <li>Blog</li>
                                    </Link>
                                    <Link to="/">
                                        <li>Refer a friend</li>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className={styles.footerItem}>
                                    <p > Subscribe and <PinkText text="get 10% off" variant="subtitle1" /> your first rental</p>
                                    <ReduxFormEmailSent onSubmit={onSubmitBLL} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.footerBottom}>
                    <div className="container">
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-11">
                                <p>© 2020 dressitbox.com</p>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>

    )
}
const stylesInput = theme => createStyles({
    textField: {
        width: '254',
        height: '45px',
        padding: 0,
        background: '#EFEFEF',
        borderBottom: "none",
        borderRadius: "30px",
        paddingLeft: "29px"
    },
    helperText: {
        fontSize: 12,
        fontWeight: 600
    },
    box: {
        display: "flex"
    }
})
const MyInput = withStyles(stylesInput)((props) => {
    const { input, meta: { touched, error, invalid }, classes, ...custom } = props
    return (

        <TextField variant="filled"
            InputProps={{
                classes: { root: classes.textField }
            }}
            placeholder={custom.label}
            FormHelperTextProps={{ classes: { root: classes.helperText } }}
            error={touched && invalid | error}
            helperText={touched && error}
            {...input}{...custom}
        />
    )
})

const FormEmail = (props) => {
    return (
        <form className={styles.footerForm} onSubmit={props.handleSubmit}>
            <Box className={styles.footerBox}>
                <Field name={"submitEmail"} type="email" component={MyInput} placeholder="Your email" validate={[required, maxLengthCreator30, minLengthCreator5]} />
                <button ><MyButton text="send" href="" /> </button>

            </Box>
        </form>
    )
}


const ReduxFormEmailSent = reduxForm({
    form: 'submitEmail'
})(FormEmail)

export default Footer

// InputProps={{
//     classes: { root: classes.textField },
// }}
// InputLabelProps={{ classes: { root: classes.label } }}
// variant="filled"
// label={custom.label}
// placeholder={custom.label}
// error={touched && invalid | error}
// helperText={touched && error}
// FormHelperTextProps={{ classes: { root: classes.helperText } }}
// {...input}