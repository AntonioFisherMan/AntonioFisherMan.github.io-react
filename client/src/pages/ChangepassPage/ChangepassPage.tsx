import React from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import ChangePass from '../../components/Forms/ChangePass/ChangePass'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { Box, Container, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    changePassBlock: {},

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
                    <Grid container >
                        <SiteHeadline text="Profile" />
                    </Grid>
                    <Grid container>

                        <Grid item xs={12} sm={12} md={3} container direction="column" justify="space-between" >
                            <Sidebar />
                        </Grid>
                        <Grid item xs={12} sm={12} md={1}></Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <ChangePass />
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
