import React from 'react'
import { Typography } from '@material-ui/core'
import { TypographyType } from '../../types/types'

export const H5: React.FC<TypographyType> = ({ text, align, classes }) => <Typography variant="h5" align={align ? align : "center"} className={classes}>{text}</Typography>
