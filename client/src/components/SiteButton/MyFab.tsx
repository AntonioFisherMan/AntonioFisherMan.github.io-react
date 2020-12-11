import React from 'react'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { createStyles, Theme, makeStyles, Fab } from '@material-ui/core'


type MyFabProps = {
        side: string
}
const useStyles = makeStyles((theme: Theme) => createStyles({
        tab: {
                "&:hover": {
                        backgroundColor: "black",
                        color: "white"
                },
                border: "1px solid #111111",
                background: "none"
        }
}))
export const MyFab: React.FC<MyFabProps> = ({ side }) => {
        const classes = useStyles()
        return (
                <Fab color="default" size="large" className={classes.tab}>
                        {side === 'left' ? <ArrowBackIosIcon fontSize="small" /> : <ArrowForwardIosIcon fontSize="small" />}
                </Fab>
        )
}
