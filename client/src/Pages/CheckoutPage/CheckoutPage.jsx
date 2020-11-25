import React from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import CheckoutForm from '../../components/Forms/Checkout/CheckoutForm'
import { reduxForm } from 'redux-form'
import { Container, Grid, } from '@material-ui/core'


export const CheckoutPage = (props) => {
    return (
        <>
            <HeaderBottom />
            <Container>
                <Grid container >
                    <SiteHeadline text="Check Out" />
                </Grid>
                <Grid container>
                    <Grid item xs={1} md={1}></Grid>
                    <Grid item xs={12} md={8}>
                        <ReduxCheckoutForm onSubmit={props.onSubmit} btn="continue" initialValues={props.userInform !== null ? props.userInform.inform : props.userInform} />
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}


const ReduxCheckoutForm = reduxForm({ form: 'inform' })(CheckoutForm)


