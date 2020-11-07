import { Typography } from '@material-ui/core'
import React from 'react'

type PinkTextType = {
        text: string,
        variant?: string | any
}

export const PinkText: React.FC<PinkTextType> = ({ text, variant }) => {
        return (
                <Typography color="primary" noWrap={false} display="inline" variant={variant ? variant : "subtitle2"}>{text}</Typography>
        )
}
