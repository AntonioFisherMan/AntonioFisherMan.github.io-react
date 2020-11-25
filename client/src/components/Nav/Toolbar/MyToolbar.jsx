import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { NavAccount, NavCart, NavSearch, NavLogo } from '../NavElements/NavElements'
import { colors } from '../../../constants/colors'

const styles = theme => ({
        root: {
                flexGrow: 1,
        },
        navFlex: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
        },
        toolbar: {
                background: "white",
                maxWidth: "100%"
        },
        menuButton: {
                width: 50,
                height: 50,
                color: colors.PINK
        },
        textColor: {
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                textTransform: "uppercase",
                color: "#111111"
        },
})
export const MyToolbar = withStyles(styles)(({ classes, title, onMenuClick, isAuth, user, logout, totalSizeCard }) => (
        <>

                <AppBar className={classes.toolbar} position="relative">
                        <Toolbar>
                                <Grid container>
                                        <Grid item xs={10} sm={6} md={4}>
                                                <NavLogo />
                                        </Grid>
                                        <Grid item xs={2} sm={1} md={2} className={classes.navFlex} >
                                                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={onMenuClick}>
                                                        <MenuIcon />
                                                        <Typography variant="title" color="inherit" >
                                                                {title}
                                                        </Typography>
                                                </IconButton>
                                        </Grid>
                                        <Grid item xs={4} sm={1} md={2} className={classes.navFlex} justify="center">
                                                <NavCart totalSizeCard={totalSizeCard} />

                                        </Grid>
                                        <Grid item xs={4} sm={2} className={classes.navFlex} justify="center">
                                                <NavSearch />
                                        </Grid>
                                        <Grid item xs={4} sm={2} className={classes.navFlex} justify="center">
                                                <NavAccount isAuth={isAuth} user={user} logout={logout} />
                                        </Grid>
                                </Grid>

                        </Toolbar>
                </AppBar>

                <div className={classes.toolbarMargin} />
        </>
))

