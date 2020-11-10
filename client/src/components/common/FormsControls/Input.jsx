import React, { useState } from 'react'
import { TextField, Box, makeStyles, InputLabel, OutlinedInput, FormControl, InputAdornment, IconButton, createStyles, withStyles } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

export const stylesInput =makeStyles((theme)  => createStyles({
    textField: {
        width: '390px',
        height: '45px',
        padding: 0,
        background: '#F7F8FC',
        borderColor: '#E9ECF0',

    },
    helperText: {
        fontSize: 12,
        fontWeight: 600
    },
    label: {
        color: theme.palette.default.dark
    }
}))

const MyTextField = withStyles({
    root: {
        '& input:valid ': {
            borderColor: 'green',
            borderWidth: 1,
        },
        '& input:error + fieldset': {
            borderColor: 'red',
            borderWidth: 1,
        },
    },
})(TextField);



export const Input = withStyles(stylesInput)((props) => {
    const { input, meta: { touched, error, invalid }, classes, ...custom } = props
    const [showPass, setShowPass] = useState(false)
    const isPass = custom.type === 'password'

    const handleShowPass = () => {
        setShowPass(!showPass)
    }


    return (
        <>
            <MyTextField
                InputProps={{
                    classes: { root: classes.textField },
                    endAdornment: isPass ? <IconButton
                        color={showPass ? "primary" : "default"}
                        aria-label="toggle password visibility"
                        onClick={handleShowPass}
                        onMouseDown={handleShowPass}
                    >
                        {showPass ? <Visibility /> : <VisibilityOff />}
                    </IconButton> : null
                }}
                InputLabelProps={{ classes: { root: classes.label } }}
                id="outlined-basic"
                variant="outlined"
                label={custom.label}
                placeholder={custom.label}
                error={touched && invalid|error}
                type={isPass ? showPass ? 'text' : 'password' : custom.type}
                helperText={touched && error}
                FormHelperTextProps={{ classes: { root: classes.helperText } }}
                {...input}
            />
        </>

    )
})


