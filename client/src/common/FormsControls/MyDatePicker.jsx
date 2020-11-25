import React from 'react'
import { KeyboardDatePicker } from '@material-ui/pickers'
import { MyDateIcon } from '../../assets/icons/icons'
import { makeStyles } from '@material-ui/core'
import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"
import { colors } from '../../constants/colors'
import dayjs from 'dayjs'

const useStyles = makeStyles({
  textField: {
    width: 142,
    height: 45,
    background: "#F7F8FC",
    padding: 0,
  },
  icon: {
    padding: 0
  },
  helperText: {
    fontSize: 12,
    fontWeight: 600
  },
  '@media (max-width: 600px)': {
    textField: {
      width: 132,
      height: 45,
      background: "#F7F8FC",
      padding: 0,
    },
  },
})

const materialTheme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        border: '1px solid',
        borderColor: '#F7F8FC',
        padding: 0
      },
      input: {
        padding: 0,
        paddingLeft: 5
      }

    },
    MuiIconButton: {
      root: { padding: 0, paddingRight: 5 }
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: colors.PINK,
      },
    },
    MuiPickersDay: {
      current: {
        color: colors.PINK,
      },
      daySelected: {
        backgroundColor: colors.PINK,
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        color: "grey",
        fontSize: 12
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: colors.PINK,
      },
    },

  },
})

export const MyDatePicker = props => {
  const { meta: { error, touched }, input: { onBlur, value, ...inputProps }, ...others } = props
  const classes = useStyles()
  const onChange = date => {
    Date.parse(date) ? inputProps.onChange(dayjs(date).format('MMM D, YYYY')) : inputProps.onChange(null)
  }
  return (
    <>
      <ThemeProvider theme={materialTheme}>
        <KeyboardDatePicker
          {...inputProps}
          {...others}
          KeyboardButtonProps={{ classes: { root: classes.icon } }}
          InputProps={{ classes: { root: classes.textField }, }}
          inputVariant="outlined"
          keyboardIcon={<MyDateIcon />}
          format="MMM D, yyyy"
          emptyLabel={others.emptyLabel}
          value={value ? new Date(value) : null}
          onBlur={() => onBlur(value ? new Date(value).toISOString() : null)}
          error={error && touched}
          helperText={error && touched == true ? error : null}
          FormHelperTextProps={{ classes: { root: classes.helperText } }}
          onChange={onChange}

        />
      </ThemeProvider>
    </>
  )
}

