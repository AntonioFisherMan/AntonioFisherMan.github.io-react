
import React from 'react'
import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
  label: {
    margin: 10
  },
});

export const MyCheckBox = ({ input, label }) => {
  const classes = useStyles()
  return (
    <div>
      <FormControlLabel
        className={classes.label}
        control={
          <Checkbox
            color="primary"
            checked={input.value ? true : false}
            onChange={input.onChange}
          />
        }
        checked={input.value ? true : false}
        label={label}
      />
    </div>
  )
}



