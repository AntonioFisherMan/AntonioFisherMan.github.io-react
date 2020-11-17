import { Typography } from '@material-ui/core'
import React from 'react'

type PinkTextType = {
        text: string,
        variant?: string | any,
        classes?: any
}

export const PinkText: React.FC<PinkTextType> = ({ text, variant, classes }) => {
        return (
                <Typography color="primary" noWrap={false} display="inline" variant={variant ? variant : "subtitle2"} className={classes}>{text}</Typography>
        )
}
