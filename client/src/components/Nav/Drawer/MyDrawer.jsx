import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';
import clsx from 'clsx';
import { Switch, Route, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { colors } from '../../common/all/colors';



const styles = theme => ({
        alignContent: {
                alignSelf: 'center'
        },
        activeListItem: {
                color: colors.PINK
        },
        textColor: {
                fontWeight: 600,
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                textTransform: "uppercase",
                color: "#111111",
        }
});

export const MyDrawer = withStyles(styles)(({ open, onClose, setTitle, classes }) => {
        return (
                <Drawer anchor={"left"} open={open} onClose={onClose}>
                        <List>
                                <NavItem className={classes.textColor} to="/" text="Rent Outfits" Icon={HomeIcon} onClick={() => { setTitle('Home'); onClose(); }} />
                                <NavItem className={classes.textColor} to="/catalog" text="Our Products" Icon={WebIcon} onClick={() => { setTitle('Our Products'); onClose(); }} />
                        </List>
                </Drawer>
        )
})

const NavListItem = withStyles(styles)(
        ({ classes, Icon, text, active, ...other }) => (
                <ListItem component={NavLink}  {...other}>
                        <ListItemIcon classes={{ root: clsx({ [classes.activeListItem]: active }) }}>
                                <Icon />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: clsx({ [classes.activeListItem]: active }) }} >
                                {text}
                        </ListItemText>
                </ListItem>

        )
);
const NavItem = props => (
        <Switch>
                <Route exact path={props.to} render={() => <NavListItem active={true} {...props} />} />
                <Route path="/" render={() => <NavListItem {...props} />} />
        </Switch>
);