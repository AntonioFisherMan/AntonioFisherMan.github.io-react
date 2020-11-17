import React from 'react'
import { Typography } from '@material-ui/core'
import { TypographyType } from '../../types/types'

export const H4: React.FC<TypographyType> = ({ text, align, classes }) => <Typography variant="h4" align={align ? align : "center"} className={classes}>{text}</Typography>
