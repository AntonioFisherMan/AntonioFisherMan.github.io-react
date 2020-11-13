import React from 'react'
import './Input.css'

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = error && touched
    return (
        <div className="formControl">
            <textarea {...input}{...props} />
            {hasError ? <span>{error}</span> : null}
        </div>
    )
}