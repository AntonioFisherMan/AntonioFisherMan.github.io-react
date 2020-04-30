import React from 'react'

export const File=({ input, type, meta: { touched, error, warning } }) => {
    delete input.value
    return (
        <div>
            <label htmlFor={input.name}>
                <input {...input} type={type} />
            </label>
        </div>
    )
}