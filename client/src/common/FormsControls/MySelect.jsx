

import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles({

  helperText: {
    fontSize: 12,
    fontWeight: 600,
    margin: 0
  },
})
export const MySelect = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <FormControl error={touched && error}>
    <Select
      variant="outlined"
      defaultValue="Select your size"
      native
      {...input}
      {...custom}

    >
      {children}
    </Select>
    <RenderFromHelper touched={touched} error={error} />
  </FormControl>
)


const RenderFromHelper = ({ touched, error }) => {
  const classes = useStyles()
  if (!(touched && error)) {
    return null
  } else {
    return <FormHelperText classes={{ error: classes.helperText }}>{touched && error}</FormHelperText>
  }
}