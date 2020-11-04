import React from 'react'
import { WrappedFieldProps } from 'redux-form'
import './Input.css'

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta: { touched, error } } = props
    const hasError = error && touched
    return (
        <div className="formControl">
            <input className={hasError ? "error" : ""} {...input} {...props} />
            {hasError ? <span>{error}</span> : null}
        </div>
    )
}

