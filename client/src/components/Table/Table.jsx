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
import { PinkText } from '../../common/Typography/PinkText'
import { MyCloseIcon } from '../../assets/icons/icons'


const usePaperStyles = makeStyles(theme => ({
        box: { position: 'absolute', zIndex: 1 },
        root: {
                position: 'relative',
                margin: theme.spacing(2),
                paddingLeft: theme.spacing(5),
                paddingRight: theme.spacing(5),
                paddingTop: theme.spacing(3),
                paddingBottom: theme.spacing(3),
                textAlign: "center"
        },
        cell: { borderBottom: `2px solid ${theme.palette.primary.light} !important` },
        table: { paddingLeft: 10, paddingRight: 10 },
        icon: { position: 'absolute', right: 0, top: 0, margin: theme.spacing(1), },
        text: { color: theme.palette.grey[700], marginBottom: '20px !important' },

}))

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
                setTimeout(() => resolve(items), 5000)
        })

export default function MyTable({ closeTable }) {
        const [loading, setLoading] = useState(true)
        const classes = usePaperStyles()
        const [items, setItems] = useState([])
        const handleCloseTable = () => {
                closeTable(false)
        }
        useEffect(() => {
                fetchData().then(items => {
                        setItems(items)
                        setLoading(false)
                })
        }, [])
        return (
                <Box className={classes.box}>
                        <Paper className={classes.root}>
                                <Typography variant="body2" className={classes.text}>Please note that this is a standard size chart and conversions can vary from brand to brand. Please
                                see the description of the brand for more specific size conversions. If you need help picking up the
right size please contact <PinkText text="hello@dressitbox.com" /> </Typography>
                                <Box className={classes.icon} onClick={handleCloseTable}>
                                        <MyCloseIcon color="primary" />
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
                </Box>

        )
}