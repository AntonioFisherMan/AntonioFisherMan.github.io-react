

import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import { createStyles } from '@material-ui/core'
const stylesInput = theme => createStyles({
  helperText: {
    fontSize: 12,
    fontWeight: 600
  }
})

export const MySelect = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <FormControl error={touched && error}>
    <Select
      variant="outlined"
      defaultValue="Select your size"
      native
      {...input}
      {...custom}
      inputProps={{
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
)


const renderFromHelper = ({ touched, error }) => {
  const classes = stylesInput()
  if (!(touched && error)) {
    return
  } else {
    return <FormHelperText className={classes.helperText}>{touched && error}</FormHelperText>
  }
}