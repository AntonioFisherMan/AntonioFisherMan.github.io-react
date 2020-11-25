import React, { useState } from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import { change, reduxForm } from 'redux-form'
import CheckoutForm from '../../components/Forms/Checkout/CheckoutForm'
import { Grid, Container, makeStyles } from '@material-ui/core'
import InformCard from './InformCard'



const InformPage = (props) => {


    return (
        <>
            <HeaderBottom />
            <Container>
                <Grid container>
                    <SiteHeadline text="My information" />
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={3} container direction="column" justify="space-between" >
                        <Sidebar />
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        {props.inCard ? <InformCard inform={props.inform} changeLayout={props.changeLayout} loading={props.loading} /> :
                            <ReduxUserInform onSaveFiles={props.onSaveFiles} onSubmit={props.inform ? props.updateInform : props.setInform} isAddInform={Boolean(props.inform)} initialValues={props.inform} btn="Сохранить" changeLayout={props.changeLayout} />}
                    </Grid>
                </Grid>
            </Container>
        </>


    )
}



export const ReduxUserInform = reduxForm({
    form: 'userInform'
})(CheckoutForm)





export default InformPage