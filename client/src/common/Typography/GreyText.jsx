import React from 'react'
import { createStyles, Typography, withStyles } from '@material-ui/core'

const styles = (theme) => createStyles({
        root: {
                color: theme.palette.grey.A700,
                fontSize: 15,
                fontWeight: 400
        }
})

const GreyText = (props) => {
        return (
                <Typography className={props.classes.root} classes={{ root: props.propsClasses }} variant="body1" > { props.text}</Typography >
        )
}

export default withStyles(styles)(GreyText)
