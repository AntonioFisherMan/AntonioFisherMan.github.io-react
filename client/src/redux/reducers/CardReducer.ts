import { CardItemType } from '../../types/types'

let initialState = {
    items: [] as Array<CardItemType>,
    isLoaded: false as boolean | false,
    totalPrice: 0 as number | null,
}

const CardReducer = (state = initialState, action: any): typeof initialState => {
    switch (action.type) {
        case 'CARD_ADD_ITEMS':
            return { ...state } // return { ...state, items: [...state.items, action.payload], isLoaded: true }
        case 'CARD_REMOVE_ITEMS':
            return { ...state, items: state.items.filter((i) => i._id !== action.itemId) }
        case 'REMOVE_CARD_ITEMS':
            return { ...state, items: [], totalPrice: null } //totalItemCount: null}
        case 'CHANGE_ITEMS_QUANTITY':
            return { ...state, items: state.items.filter((i) => (i._id === action.id ? i.quantity : action.quantity)) }
        case 'CARD_ADD_INSURANCE':
            const id = action.id
            return {
                ...state,
                items: state.items.map((item) => {
                    if (item._id === id) {
                        return {
                            ...item,
                            insurance: action.insurance,
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
                            insurance: action.insurance,
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
    removeProduct: (itemId: number) => ({ type: 'CARD_REMOVE_ITEMS', itemId } as const),
    changeQuantity: (id: number, quantity: number) => ({ type: 'CHANGE_ITEMS_QUANTITY', id, quantity } as const),
    addInsurance: (id: number, insurance: string) => ({ type: 'CARD_ADD_INSURANCE', id, insurance } as const),
    removeInsurance: (id: number, insurance: string) => ({ type: 'CARD_REMOVE_INSURANCE', id, insurance } as const),
}

export default CardReducer
