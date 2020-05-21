import React from 'react'

export const File=({ input,name, type, meta: { touched, error, warning } }) => {
    delete input.value
    return (
        <div>
            <label htmlFor={input.name}>
                <input {...input} type={type} name={name} multiple/>
            </label>
        </div>
    )
}