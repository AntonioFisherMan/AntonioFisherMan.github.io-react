import React from 'react'
import { NavLink } from 'react-router-dom'
import { colors } from '../../../constants/colors'
import { Box, Link, makeStyles, Badge } from '@material-ui/core';
import { UserType } from '../../../types/types';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
const useStyles = makeStyles({
        navBlock: {
                display: 'flex',
                alignItems: 'center'
        },
        img: {
                marginRight: 10,
        },
        text: {
                color: '#111111',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
        },
        searchIcon: {
                marginRight: 10,
        },
        logo: {},
        '@media (max-width: 600px)': {
                logo: {
                        width: 200
                }
        },
})

export const NavAccount: React.FC<NavAccount> = ({ isAuth, user, logout }) => {
        const classes = useStyles()
        return (
                <Box className={classes.navBlock}>
                        { isAuth && user
                                ? <NavLink className={classes.text} activeStyle={{ color: "#E77E83" }} to="/orders">{user.name}<p onClick={logout} >Logout</p></NavLink>
                                : <NavLink activeStyle={{ color: colors.PINK }} to="/sign"><img src="/images/svg/Vector (6).svg" className="ml-auto" alt="Account" /></NavLink>}
                </Box>

        )
}

export const NavCart: React.FC<NavCard> = ({ totalSizeCard }) => {
        const classes = useStyles()
        return (
                <Box className={classes.navBlock}>
                        <Badge badgeContent={totalSizeCard} color="primary">
                                <NavLink activeStyle={{ color: colors.PINK }} to="/card" className={classes.text}>
                                        {totalSizeCard === 0 ? <p >Cart </p> : <div ><ShoppingBasketIcon /></div>}
                                </NavLink>
                        </Badge>
                </Box>

        )
}
export const NavLogo = () => {
        const classes = useStyles()
        return (
                <Link href="/"><img className={classes.logo} src="/images/svg/logo.svg" alt="Logo" /></Link>
        )
}
export const NavSearch = () => {
        const classes = useStyles()
        return (
                <Box className={classes.navBlock}>
                        <img src="/images/svg/Vector (5).svg" alt="" className={classes.searchIcon} />
                        <input placeholder="Search" style={{ border: 'none', width: '60px' }} />
                </Box>


        )
}




type NavAccount = {
        isAuth: boolean,
        user: UserType,
        logout: () => void
}
type NavCard = {
        totalSizeCard: number
}