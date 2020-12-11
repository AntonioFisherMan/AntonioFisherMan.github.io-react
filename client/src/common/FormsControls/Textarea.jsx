import React from 'react'
import './Input.css'
import { TextareaAutosize, Typography } from '@material-ui/core'
export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = error && touched
    return (
        <>
            <TextareaAutosize
                {...input}{...props}
                className={props.classes}
                placeholder={props.placeholder}
                defaultValue={props.placeholder}
                rows={props.rows}
            />
            {hasError ? <Typography color="error">{error}</Typography> : null}
        </>
    )
}