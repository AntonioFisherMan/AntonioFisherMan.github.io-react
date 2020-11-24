export type GoodType = {
    _id: string
    photos: PhotosType
    style: string
    text: string
    salePrice: number
    price: number
}
export type ProductType = {
    good: GoodType
    review?: ReviewType
    reviewQuantity?: number
}
export type ReviewType = {
    photo: string
    _id: string
    rating: number
    name: string
    reviewText: string
}
type PhotosType = {
    small: Array<string>
    large: string
    middle: string
}
export type CardItemType = {
    _id: string
    quantity: number | 0
    price: number | 0
    startDate: Date
    endDate: Date
    photo: string
    size: string
    isInsurance: boolean
}
export type UserType = {
    _id: string
    name: string
    email: string
}
export type TypographyType = {
    text: string | undefined | number
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify' | undefined
    propsClasses?: any
}

export type SiteMessageType = {
    message: string
    status?: number
    id?: string
    open: boolean
}
