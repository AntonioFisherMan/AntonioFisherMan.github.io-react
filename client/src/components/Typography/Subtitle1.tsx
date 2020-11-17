
import React from 'react'
import { Typography } from '@material-ui/core'
import { TypographyType } from '../../types/types'

export const Subtitle1: React.FC<TypographyType> = ({ text, classes }) => <Typography variant="subtitle1" className={classes}>{text}</Typography>
