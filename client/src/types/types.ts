export type GoodType = {
    _id: string
    photos: PhotosType
    style: string
    text: string
    reviews: Array<ReviewType>
    goodReviewsQuantity: number | 0
    salePrice: number
    price: number
}
type ReviewType = {}
type PhotosType = {
    small: Array<string>
    large: string
    middle: string
}
export type CardItemType = {
    _id: string | null | number
    quantity: number | 0
    price: number | 0
}
export type UserType = {
    _id: string
    name: string
    email: string
}
