
import React from 'react'
import { Checkbox, FormControlLabel, makeStyles } from '@material-ui/core'
const useStyles = makeStyles({
  label: {
    marginLeft: 11,
    fontSize: 12,
    color: '#666666'
  },
  checked: {
    color: "#e77e83",
    borderWidth: '3px'
  }
});

export const MyCheckBox = ({ input, label, }) => {
  const classes = useStyles()
  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label
        }}
        control={
          <Checkbox
            classes={{
              root: classes.checked
            }}
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



