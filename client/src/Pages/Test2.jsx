import React, { useState, Fragment } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import { Avatar, withStyles } from '@material-ui/core'
import clsx from 'clsx'
import { Badge } from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'
import ContactsIcon from '@material-ui/icons/Contacts'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import { List as VirtualList, AutoSizer } from 'react-virtualized'
import Paper from '@material-ui/core/Paper'
import MyTable from '../components/Table/Table'
import FilterTable from '../components/Table/FilterTable'
import MyAutoComplete from '../components/Table/MyAutoComplete'
import MyDialog from '../components/Dialogs/MyDialog'

function* genItems() {
        for (let i = 1; i <= 1000; i++) {
                yield `Item ${i}`
        }
}
const styles = theme => ({
        list: {
                height: 300
        },
        paper: {
                margin: theme.spacing(3)
        },
        activeAvatar: {
                backgroundColor: theme.palette.primary[theme.palette.type]
        },
        subItem: { paddingLeft: theme.spacing(3) }
})

const ExpandIcon = ({ expanded }) =>
        expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />
const MaybeSelectedIcon = ({ selected, Icon }) =>
        selected ? <CheckCircleOutlineIcon /> : <Icon />
function UsingStatetoRenderListItems({ classes }) {

        const [items] = useState([...genItems()])
        const rowRenderer = ({ index, isScrolling, key, style }) => {
                const item = items[index]
                return (
                        <ListItem button key={key} style={style}>
                                <ListItemText primary={isScrolling ? '...' : item} />
                        </ListItem>
                )
        }
        // const [items, setItems] = useState([
        //         { name: 'First Item', timestamp: new Date(), selected: false, notifications: 2 },
        //         { name: 'Second Item', timestamp: new Date(), selected: false, notifications: 3 },
        //         { name: 'Third Item', timestamp: new Date(), selected: false, notifications: 0 }
        // ])

        const [nested, setNested] = useState([
                {
                        name: 'Messages',
                        Icon: InboxIcon,
                        expanded: false,
                        children: [
                                { name: 'First Message', Icon: MailIcon },
                                { name: 'Second Message', Icon: MailIcon }
                        ]
                },
                {
                        name: 'Contacts',
                        Icon: ContactsIcon,
                        expanded: false,
                        children: [
                                { name: 'First Contact', Icon: ContactMailIcon },
                                { name: 'Second Contact', Icon: ContactMailIcon }
                        ]
                }
        ])
        const onClick = index => () => {
                const newItems = [...nested]
                const item = nested[index]
                newItems[index] = { ...item, expanded: !item.expanded }
                setNested(newItems)

        }
        return (
                // <List>
                //         {items.map((item, index) => (
                //                 <ListItem key={index} button selected={item.selected}
                //                         onClick={onClick(index)}>
                //                         <ListItemIcon >
                //                                 <Badge
                //                                         color={item.notifications ? 'secondary' : undefined}
                //                                         badgeContent={
                //                                                 item.notifications ? item.notifications : null
                //                                         }
                //                                 >
                //                                         <Avatar className={clsx({ [classes.activeAvatar]: item.notifications })}>
                //                                                 <MaybeSelectedIcon
                //                                                         selected={item.selected}
                //                                                         Icon={AccountCircleIcon}
                //                                                 />
                //                                         </Avatar>
                //                                 </Badge>
                //                         </ListItemIcon>
                //                         <ListItemText
                //                                 primary={item.name}
                //                                 secondary={item.timestamp.toLocaleString()}
                //                                 primaryTypographyProps={{
                //                                         color: item.selected ? 'primary' : undefined
                //                                 }}
                //                                 secondaryTypographyProps={{
                //                                         color: item.selected ? 'secondary' : undefined
                //                                 }}
                //                         />
                //                 </ListItem>
                //         ))}
                // </List>
                // <List>
                //         {nested.map(({ Icon, ...item }, index) => (
                //                 <Fragment key={index}>
                //                         <ListItem button onClick={onClick(index)}>
                //                                 <ListItemIcon>
                //                                         <Icon />
                //                                 </ListItemIcon>
                //                                 <ListItemText primary={item.name} />
                //                                 <ExpandIcon expanded={item.expanded} />
                //                         </ListItem>
                //                         <Collapse in={item.expanded}>
                //                                 {item.children.map(child => (
                //                                         <ListItem key={child.name} button dense className={classes.subItem}>
                //                                                 <ListItemIcon>
                //                                                         <child.Icon />
                //                                                 </ListItemIcon>
                //                                                 <ListItemText primary={child.name} />
                //                                         </ListItem>
                //                                 ))}
                //                         </Collapse>
                //                 </Fragment>
                //         ))}
                // </List>
                <>

                        <Paper className={classes.paper}>
                                <List className={classes.list}>
                                        <AutoSizer disableHeight>
                                                {({ width }) => (
                                                        <VirtualList
                                                                width={width}
                                                                height={300}
                                                                rowHeight={50}
                                                                rowCount={items.length}
                                                                rowRenderer={rowRenderer}
                                                        />
                                                )}
                                        </AutoSizer>
                                </List>
                        </Paper>
                        {/* <MyTable closeTable={() => undefined} /> */}
                        <FilterTable />
                        <MyAutoComplete />
                        <MyDialog />
                </>
        )
}

export default withStyles(styles)(UsingStatetoRenderListItems)



