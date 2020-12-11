import { Box, Hidden, withStyles } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import MyButton from '../SiteButton/MyButton/MyButton'
import { H6 } from '../../common/Typography/H6'
import { styles } from './styles'
type Props = {
    classes: any
}
const Sidebar: React.FC<Props> = (props) => {
    const { classes } = props
    return (
        <>
            <Box>
                <H6 text="Menu" propsClasses={classes.headline} />
                <Box className={classes.sidebar}>
                    <ul>
                        <NavLink activeStyle={{ color: "#E77E83" }} to="/orders" className={classes.sidebarItem}>
                            <img src="/images/svg/Vector (16).svg" alt="" />
                            <li className={classes.greyText}>  My orders </li>
                        </NavLink>
                        <NavLink activeStyle={{ color: "#E77E83" }} to="/return" className={classes.sidebarItem}>
                            <img src="/images/svg/Vector (17).svg" alt="" />
                            <li className={classes.greyText}>Return</li>
                        </NavLink>
                        <NavLink activeStyle={{ color: "#E77E83" }} to="/inform" className={classes.sidebarItem}>
                            <img src="/images/svg/Vector (18).svg" alt="" />
                            <li className={classes.greyText}>   My information </li>
                        </NavLink>
                        <NavLink activeStyle={{ color: "#E77E83" }} to="/changepass" className={classes.sidebarItem}>
                            <img src="/images/svg/Vector (19).svg" alt="" />
                            <li className={classes.greyText}> Change Password</li>
                        </NavLink>
                        <NavLink activeStyle={{ color: "#E77E83" }} to="/feedback" className={classes.sidebarItem}>
                            <img src="/images/svg/Vector (20).svg" alt="" />
                            <li className={classes.greyText}>   Share Feedback</li>
                        </NavLink>
                        <NavLink activeStyle={{ color: "#E77E83" }} to="/help" className={classes.sidebarItem}>
                            <img src="/images/svg/Vector (21).svg" alt="" />
                            <li className={classes.greyText}>  Help & Contact</li>
                        </NavLink>
                    </ul>
                </Box>
            </Box>

            <Hidden smDown>
                <Box className={classes.btn}>
                    <MyButton href="/catalog" variant="text" text="Return to catalogue" />
                </Box>
            </Hidden>

        </>
    )
}


export default withStyles(styles)(Sidebar)