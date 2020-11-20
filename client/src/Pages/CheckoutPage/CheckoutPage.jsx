import React from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import CheckoutForm from '../../components/Forms/Checkout/CheckoutForm'
import { reduxForm } from 'redux-form'
import { Container, Grid, createStyles, withStyles } from '@material-ui/core'

const styles = theme => createStyles({
    headline: {
        marginTop: 35,
        marginBottom: 36
    }
})
export const CheckoutPage = withStyles(styles)((props) => {
    const { classes } = props
    return (
        <>
            <HeaderBottom />
            <Container>
                <Grid container className={classes.headline}>
                    <SiteHeadline text="Check Out" />
                </Grid>
                <Grid container>
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={12} md={8}>
                        <ReduxCheckoutForm onSubmit={props.onSubmit} btn="continue" initialValues={props.userInform} />
                    </Grid>
                </Grid>
            </Container>

        </>
    )
})


const ReduxCheckoutForm = reduxForm({ form: 'inform' })(CheckoutForm)


