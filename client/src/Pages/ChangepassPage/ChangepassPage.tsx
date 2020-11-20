import React from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import ChangePass from '../../components/Forms/ChangePass/ChangePass'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { Box, Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    changePassBlock: {},
    headline: {
        marginTop: 35,
        marginBottom: 21
    },
    btn: {
        marginTop: 66,
        marginBottom: 51
    },
    '@media (max-width: 600px)': {
        changePassBlock: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
    },
})

const ChangepassPage = () => {
    const classes = useStyles()
    return (
        <div>
            <HeaderBottom />

            <Box className={classes.changePassBlock}>
                <Container>
                    <Grid container className={classes.headline}>
                        <SiteHeadline text="Profile" />
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} sm={4} md={2}>
                            <Sidebar />
                        </Grid>
                        <Grid item xs={12} sm={1}></Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ChangePass />
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item className={classes.btn}>
                            <MyButton href="/catalog" variant="text" text="Return to catalogue" size="large" />
                        </Grid>
                    </Grid>
                </Container>

            </Box>

        </div>
    )
}

export default compose(
    WithAuthRedirect
)(ChangepassPage) 
