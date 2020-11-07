import { Typography } from '@material-ui/core'
import React from 'react'
import { TypographyType } from '../../types/types'

export const H6: React.FC<TypographyType> = ({ text }) => <Typography variant="h6">{text}</Typography>
