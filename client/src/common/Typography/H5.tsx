import React from 'react'
import { Typography } from '@material-ui/core'
import { TypographyType } from '../../types/types'

export const H5: React.FC<TypographyType> = ({ text, align, propsClasses }) => <Typography variant="h5" align={align ? align : "center"} className={propsClasses}>{text}</Typography>
