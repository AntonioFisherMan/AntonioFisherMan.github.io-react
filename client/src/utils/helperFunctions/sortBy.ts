import { orderBy } from 'lodash'
import { GoodType } from '../../types/types'

export const sortBy = (goods: Array<GoodType>, filterBy: string) => {
    switch (filterBy) {
        case 'Рекомендации':
            return goods
        case 'От дорогим к дешевым':
            return orderBy(goods, 'price', 'desc')
        case 'От дешевых к дорогим':
            return orderBy(goods, 'price', 'asc')
        default:
            return goods
    }
}
