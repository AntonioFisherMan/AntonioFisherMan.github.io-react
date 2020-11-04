import React from 'react'
import { Field, WrappedFieldProps } from "redux-form";
import { FieldValidatorType } from '../../../utils/Validators/validators';

export function createField<FormKeysType extends string>(placeholder: string | undefined,
        name: FormKeysType, validators: Array<FieldValidatorType>,
        component: React.FC<WrappedFieldProps>, className: string, type?: string, required?: boolean, id?: string, props = {}, text = "",) {
        return <div>
                <Field placeholder={placeholder} name={name}
                        validate={validators} component={component}
                        className={className} type={type}
                        {...props} id={id} required={required}
                />
                {text}
        </div>
}