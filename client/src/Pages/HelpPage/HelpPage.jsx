import React from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { connect } from 'react-redux'
import { sendHelpMessage } from '../../redux/reducers/InformReducer'
import { Container, Grid, makeStyles } from '@material-ui/core'
import { ReduxHelpForm } from '../../redux/reduxForms/ReduxHelpForm'
import { LoadingDataHOC } from '../../hoc/LoaingData'
import { reset } from 'redux-form'
const useStyles = makeStyles({
    headline: {
        marginTop: 35,
        marginBottom: 21
    },
    btn: {
        marginBottom: 53,
        marginTop: 66
    }
})

const HelpPage = (props) => {
    const onSubmit = (formData) => {
        props.sendHelpMessage(formData.helpMessage)
        props.reset('help')
    }
    const classes = useStyles()
    return (
        <>
            <HeaderBottom />
            <section className="helpBlock">

                <Container>
                    <Grid container className={classes.headline}>
                        <SiteHeadline text="Help & Contact" />
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} md={2}>
                            <Sidebar />
                        </Grid>
                        <Grid item xs={12} md={2}></Grid>
                        <Grid item xs={12} md={8}>
                            <ReduxHelpForm onSubmit={onSubmit} loading={props.loading} />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.btn}>
                        <MyButton href="/catalog" text="Return to catalogue" variant="text" size="large" />
                    </Grid>
                </Container>
            </section>
        </>
    )
}



export default compose(
    LoadingDataHOC,
    WithAuthRedirect,
    connect(null, { sendHelpMessage, reset })
)(HelpPage)