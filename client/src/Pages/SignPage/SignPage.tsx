import React from 'react'
import { Box, Container, Grid, Hidden, WithStyles, withStyles } from '@material-ui/core'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { SiteHeadline } from '../../common/Typography/SiteHeadline'
import Login from '../../components/Forms/Login/Login'
import Register from '../../components/Forms/Register/Register'
import FacebookLogin from '../../components/Forms/FacebookGoogle/Facebook'
import GoogleLogin from '../../components/Forms/FacebookGoogle/Google'
import { H6 } from '../../common/Typography/H6'
import { styles } from './styles'
import { AppStateType } from '../../redux/ReduxStore'


type Props = {
    isAuth: boolean
}

class SignPage extends React.Component<WithStyles<typeof styles> & Props> {
    render() {
        if (this.props.isAuth) {
            return <Redirect to="/orders" />
        }
        const { classes } = this.props
        return (
            <>
                <HeaderBottom />
                <Container className={classes.signBlock}>
                    <Grid container >
                        <Grid item xs={12} >
                            <SiteHeadline text="Sign-In" />
                        </Grid>
                    </Grid>

                    <Grid container className={classes.signForm}>
                        <Grid item xs={12} md={5} >
                            <Login />
                            <Hidden smDown>
                                <Box className={classes.signReturnBlock}>
                                    <MyButton href="/card" variant="text" text="Return to cart" />
                                </Box>
                            </Hidden>
                        </Grid>
                        <Grid item md={2}></Grid>
                        <Grid item xs={12} md={5}>
                            <H6 text="Not a member? Sign Up" propsClasses={classes.text} />
                            <FacebookLogin />
                            <GoogleLogin />
                            <Register />
                        </Grid>
                    </Grid>
                </Container>

            </>

        )
    }

}

let mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default compose(withStyles(styles), connect(mapStateToProps, null))(SignPage)
