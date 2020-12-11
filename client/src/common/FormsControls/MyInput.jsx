import React, { useState } from 'react'
import { TextField, IconButton, createStyles, withStyles, Box } from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'


const stylesInput = theme => createStyles({
    textField: {
        height: 45,
        background: '#F7F8FC',
        border: '1px solid #E9ECF0',

    },
    helperText: {
        fontSize: 12,
        fontWeight: 600
    },
    label: {
        color: "#111111"
    },
    margin: {
        marginBottom: 30,
    }
})




export const MyInput = withStyles(stylesInput)((props) => {
    const { input, meta: { touched, error, invalid }, classes, ...custom } = props
    const [showPass, setShowPass] = useState(false)
    const isPass = custom.type === 'password'

    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    return (
        <Box className={custom.propsClasses ? custom.propsClasses : classes.margin}>
            <TextField
                fullWidth={custom.fullWidth ? true : false}
                InputProps={{
                    classes: { root: custom.propsClasses ? custom.propsClasses && classes.textField : classes.textField },
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
                error={touched && invalid | error}
                type={isPass ? showPass ? 'text' : 'password' : custom.type}
                helperText={touched && error}
                FormHelperTextProps={{ classes: { root: classes.helperText } }}
                {...input}
            />
        </Box>

    )
})
