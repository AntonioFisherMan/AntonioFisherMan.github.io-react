import { Fab, makeStyles } from '@material-ui/core'
import React from 'react'
import { H6 } from '../../Typography/H6'



const useStyles = makeStyles({
        back: {
                background: "#7ECB80",
                color: "white"
        }
})
export const IconOr = () => {
        const classes = useStyles()
        return (
                <Fab className={classes.back} size="medium">
                        <H6 text="or" />
                </Fab>
        )
}
