import { CardItemType } from '../../types/types'

let initialState = {
    items: [] as Array<CardItemType>,
    isLoaded: false as boolean | false,
    totalPrice: 0 as number | null,
}

const CardReducer = (state = initialState, action: any): typeof initialState => {
    switch (action.type) {
        case 'CARD_ADD_ITEMS':
            return { ...state, items: [...state.items, action.payload], isLoaded: true }
        case 'CARD_REMOVE_ITEMS':
            return { ...state, items: state.items.filter((i) => i._id !== action.itemId) }
        case 'REMOVE_CARD_ITEMS':
            return { ...state, items: [], totalPrice: null }
        case 'CHANGE_ITEMS_QUANTITY':
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item._id === action.id) {
                        return {
                            ...item,
                            quantity: action.quantity,
                        }
                    }
                    return item
                }),
            }
        case 'CARD_ADD_INSURANCE':
            const id = action.id
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item._id === id) {
                        return {
                            ...item,
                            isInsurance: action.isInsurance,
                            price: item.price + 5,
                        }
                    }
                    return item
                }),
            }
        case 'CARD_REMOVE_INSURANCE':
            const removeId = action.id
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item._id === removeId) {
                        return {
                            ...item,
                            isInsurance: action.isInsurance,
                            price: item.price - 5,
                        }
                    }
                    return item
                }),
            }
        default:
            return state
    }
}

export const cardActions = {
    addToCart: (payload: object) => ({ type: 'CARD_ADD_ITEMS', payload } as const),
    clearCardItems: () => ({ type: 'REMOVE_CARD_ITEMS' } as const),
    removeProduct: (itemId: string) => ({ type: 'CARD_REMOVE_ITEMS', itemId } as const),
    changeQuantity: (id: string, quantity: number) => ({ type: 'CHANGE_ITEMS_QUANTITY', id, quantity } as const),
    addInsurance: (id: string, isInsurance: boolean) => ({ type: 'CARD_ADD_INSURANCE', id, isInsurance } as const),
    removeInsurance: (id: string, isInsurance: boolean) => ({ type: 'CARD_REMOVE_INSURANCE', id, isInsurance } as const),
}

export default CardReducer
