export type FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value: string) => {
    if (!value) return 'Field is required'
}
export const MaxLength = (maxLength: number): FieldValidatorType => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength}`
}
export const MinLength = (minLength: number): FieldValidatorType => (value) => {
    if (value.length < minLength) return `Min length is: ${minLength}`
}
