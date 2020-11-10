// import React, { useState, Fragment } from 'react'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
// import { Avatar, withStyles } from '@material-ui/core'
// import clsx from 'clsx'
// import { Badge } from '@material-ui/core'
// import Collapse from '@material-ui/core/Collapse'
// import ExpandLessIcon from '@material-ui/icons/ExpandLess'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
// import InboxIcon from '@material-ui/icons/Inbox'
// import MailIcon from '@material-ui/icons/Mail'
// import ContactsIcon from '@material-ui/icons/Contacts'
// import ContactMailIcon from '@material-ui/icons/ContactMail'
// import { List as VirtualList, AutoSizer } from 'react-virtualized'
// import Paper from '@material-ui/core/Paper'

// function* genItems() {
//         for (let i = 1 i <= 1000 i++) {
//                 yield `Item ${i}`
//         }
// }
// const styles = theme => ({
//         list: {
//                 height: 300
//         },
//         paper: {
//                 margin: theme.spacing(3)
//         },
//         activeAvatar: {
//                 backgroundColor: theme.palette.primary[theme.palette.type]
//         },
//         subItem: { paddingLeft: theme.spacing(3) }
// })

// const ExpandIcon = ({ expanded }) =>
//         expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />
// const MaybeSelectedIcon = ({ selected, Icon }) =>
//         selected ? <CheckCircleOutlineIcon /> : <Icon />
// function UsingStatetoRenderListItems({ classes }) {

//         const [items] = useState([...genItems()])
//         const rowRenderer = ({ index, isScrolling, key, style }) => {
//                 const item = items[index]
//                 return (
//                         <ListItem button key={key} style={style}>
//                                 <ListItemText primary={isScrolling ? '...' : item} />
//                         </ListItem>
//                 )
//         }
//         // const [items, setItems] = useState([
//         //         { name: 'First Item', timestamp: new Date(), selected: false, notifications: 2 },
//         //         { name: 'Second Item', timestamp: new Date(), selected: false, notifications: 3 },
//         //         { name: 'Third Item', timestamp: new Date(), selected: false, notifications: 0 }
//         // ])

//         const [nested, setNested] = useState([
//                 {
//                         name: 'Messages',
//                         Icon: InboxIcon,
//                         expanded: false,
//                         children: [
//                                 { name: 'First Message', Icon: MailIcon },
//                                 { name: 'Second Message', Icon: MailIcon }
//                         ]
//                 },
//                 {
//                         name: 'Contacts',
//                         Icon: ContactsIcon,
//                         expanded: false,
//                         children: [
//                                 { name: 'First Contact', Icon: ContactMailIcon },
//                                 { name: 'Second Contact', Icon: ContactMailIcon }
//                         ]
//                 }
//         ])
//         const onClick = index => () => {
//                 const newItems = [...nested]
//                 const item = nested[index]
//                 newItems[index] = { ...item, expanded: !item.expanded }
//                 setNested(newItems)

//         }
//         return (
//                 // <List>
//                 //         {items.map((item, index) => (
//                 //                 <ListItem key={index} button selected={item.selected}
//                 //                         onClick={onClick(index)}>
//                 //                         <ListItemIcon >
//                 //                                 <Badge
//                 //                                         color={item.notifications ? 'secondary' : undefined}
//                 //                                         badgeContent={
//                 //                                                 item.notifications ? item.notifications : null
//                 //                                         }
//                 //                                 >
//                 //                                         <Avatar className={clsx({ [classes.activeAvatar]: item.notifications })}>
//                 //                                                 <MaybeSelectedIcon
//                 //                                                         selected={item.selected}
//                 //                                                         Icon={AccountCircleIcon}
//                 //                                                 />
//                 //                                         </Avatar>
//                 //                                 </Badge>
//                 //                         </ListItemIcon>
//                 //                         <ListItemText
//                 //                                 primary={item.name}
//                 //                                 secondary={item.timestamp.toLocaleString()}
//                 //                                 primaryTypographyProps={{
//                 //                                         color: item.selected ? 'primary' : undefined
//                 //                                 }}
//                 //                                 secondaryTypographyProps={{
//                 //                                         color: item.selected ? 'secondary' : undefined
//                 //                                 }}
//                 //                         />
//                 //                 </ListItem>
//                 //         ))}
//                 // </List>
//                 // <List>
//                 //         {nested.map(({ Icon, ...item }, index) => (
//                 //                 <Fragment key={index}>
//                 //                         <ListItem button onClick={onClick(index)}>
//                 //                                 <ListItemIcon>
//                 //                                         <Icon />
//                 //                                 </ListItemIcon>
//                 //                                 <ListItemText primary={item.name} />
//                 //                                 <ExpandIcon expanded={item.expanded} />
//                 //                         </ListItem>
//                 //                         <Collapse in={item.expanded}>
//                 //                                 {item.children.map(child => (
//                 //                                         <ListItem key={child.name} button dense className={classes.subItem}>
//                 //                                                 <ListItemIcon>
//                 //                                                         <child.Icon />
//                 //                                                 </ListItemIcon>
//                 //                                                 <ListItemText primary={child.name} />
//                 //                                         </ListItem>
//                 //                                 ))}
//                 //                         </Collapse>
//                 //                 </Fragment>
//                 //         ))}
//                 // </List>

//                 <Paper className={classes.paper}>
//                         <List className={classes.list}>
//                                 <AutoSizer disableHeight>
//                                         {({ width }) => (
//                                                 <VirtualList
//                                                         width={width}
//                                                         height={300}
//                                                         rowHeight={50}
//                                                         rowCount={items.length}
//                                                         rowRenderer={rowRenderer}
//                                                 />
//                                         )}
//                                 </AutoSizer>
//                         </List>
//                 </Paper>
//         )
// }

// export default withStyles(styles)(UsingStatetoRenderListItems)





import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import { CircularProgress, Typography } from '@material-ui/core'
import { PinkText } from '../common/elements/PinkText'
import { CloseIcon } from '../../assets/icons/icons'

const fetchData = () =>
        new Promise(resolve => {
                const items = [
                        { id: 1, name: 'UK', xs: 6, s: 8, m: 10, l: 12, xl: 14 },
                        { id: 2, name: 'US', xs: 38, s: 40, m: 42, l: 44, xl: 46 },
                        { id: 3, name: 'ITALY', xs: 34, s: 36, m: 38, l: 40, xl: 42 },
                        { id: 4, name: 'EU', xs: 6, s: 8, m: 10, l: 12, xl: 14 },
                        { id: 5, name: 'RUSSIA', xs: 6, s: 8, m: 10, l: 12, xl: 14 },
                        { id: 6, name: 'DENMARK', xs: 6, s: 8, m: 10, l: 12, xl: 14 },
                        { id: 7, name: 'AUSTRALIA', xs: 6, s: 8, m: 10, l: 12, xl: 14 }
                ]
                setTimeout(() => resolve(items), 1000)
        })

const useProgressStyles = makeStyles(theme => ({
        progress: { margin: theme.spacing(2) }
}))

const usePaperStyles = makeStyles(theme => ({
        root: {
                position: 'relative',
                margin: theme.spacing(2),
                paddingLeft: theme.spacing(5),
                paddingRight: theme.spacing(5),
                paddingTop: theme.spacing(3),
                paddingBottom: theme.spacing(3)
        },
        cell: { borderBottom: `2px solid ${theme.palette.primary.light} !important` },
        table: { paddingLeft: 10, paddingRight: 10 },
        icon: { position: 'absolute', right: 0, top: 0, margin: theme.spacing(1), },
        text: { color: theme.palette.grey[700], marginBottom: '20px !important' }
}))
export default function StatefulTables() {
        const [loading, setLoading] = useState(true)
        const classes = usePaperStyles()
        const [items, setItems] = useState([])
        useEffect(() => {
                fetchData().then(items => {
                        setItems(items)
                        setLoading(false)
                })
        }, [])
        return (
                <Paper className={classes.root}>
                        <Typography variant="body2" className={classes.text}>Please note that this is a standard size chart and conversions can vary from brand to brand. Please
                        see the description of the brand for more specific size conversions. If you need help picking up the
right size please contact <PinkText text="hello@dressitbox.com" /> </Typography>
                        <Box className={classes.icon}>
                                <CloseIcon color="primary" />
                        </Box>

                        <Table className={classes.table}>
                                <TableHead>
                                        <TableRow >

                                                <TableCell align="left" className={classes.cell}></TableCell>
                                                <TableCell align="center" className={classes.cell}> xs</TableCell>
                                                <TableCell align="center" className={classes.cell}>s</TableCell>
                                                <TableCell align="center" className={classes.cell}>m</TableCell>
                                                <TableCell align="center" className={classes.cell}>l</TableCell>
                                                <TableCell align="center" className={classes.cell}>xl</TableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                        {items.map(item => {
                                                return (
                                                        <TableRow key={item.id}>

                                                                <TableCell align="left">
                                                                        {item.name}
                                                                </TableCell>
                                                                <TableCell align="center">{item.xs}</TableCell>
                                                                <TableCell align="center">{item.s}</TableCell>
                                                                <TableCell align="center">{item.m}</TableCell>
                                                                <TableCell align="center">{item.l}</TableCell>
                                                                <TableCell align="center">{item.xl}</TableCell>
                                                        </TableRow>
                                                )
                                        })}
                                </TableBody>
                        </Table>
                        {loading && <CircularProgress className={classes.progress} />}
                </Paper>
        )
}

const MYRGOROD ="MYGOROD"