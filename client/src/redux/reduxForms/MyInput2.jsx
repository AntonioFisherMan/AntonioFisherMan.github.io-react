import React from 'react'
import { TextField, withStyles, createStyles, Theme, WithStyles } from '@material-ui/core'



const stylesInput = (theme) => createStyles({
        textField: {
                width: '254',
                height: '45px',
                padding: 0,
                background: '#EFEFEF',
                borderBottom: "none",
                borderRadius: "30px",
                paddingLeft: "29px"
        },
        helperText: {
                fontSize: 12,
                fontWeight: 600
        },
        box: {
                display: "flex"
        }
})

export const MyInput2 = withStyles(stylesInput)((props) => {
        const { input, meta: { touched, error, invalid }, classes, ...custom } = props
        return (

                <TextField variant="filled"
                        InputProps={{
                                classes: { root: classes.textField }
                        }}
                        placeholder={custom.label}
                        FormHelperTextProps={{ classes: { root: classes.helperText } }}
                        error={touched && invalid | error}
                        helperText={touched && error}
                        {...input}{...custom}
                />
        )
})

