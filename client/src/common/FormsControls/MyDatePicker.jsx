import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { MyDateIcon } from '../../assets/icons/icons'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  textField: {
    width: 142,
    height: 45,
    background: "#F7F8FC",
    paddingLeft: 10,
    paddingRight: 10
  },
  helperText: {
    fontSize: 12,
    fontWeight: 600
  },
})

export const MyDatePicker = props => {
  const { meta: { submitting, error, touched }, input: { onBlur, value, ...inputProps }, ...others } = props;
  const classes = useStyles()
  const onChange = date => {
    Date.parse(date) ? inputProps.onChange(date.toISOString()) : inputProps.onChange(null);
  };
  return (
    <>
      <KeyboardDatePicker
        {...inputProps}
        {...others}
        InputProps={{ classes: { root: classes.textField }, }}
        inputVariant="filled"
        keyboardIcon={<MyDateIcon />}
        format="MM/dd/yyyy"
        emptyLabel={others.emptyLabel}
        value={value ? new Date(value) : null}
        onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
        error={error && touched}
        helperText={error && touched == true ? error : null}
        FormHelperTextProps={{ classes: { root: classes.helperText } }}
        onChange={onChange}
      />
    </>
  );
};

