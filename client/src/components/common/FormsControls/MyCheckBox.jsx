import { randomFillSync } from "crypto";

import React from 'react'
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Checkbox, FormControlLabel } from '@material-ui/core'

export const MyCheckBox = ({ input, label }) => (
    <div>
      <FormControlLabel
        control={
          <Checkbox
          color="primary"
            checked={input.value ? true : false}
            onChange={input.onChange}
          />
        }
        label={label}
      />
    </div>
  )
  