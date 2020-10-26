import React from 'react'
import CardPage from './CardPage'
import { connect } from 'react-redux'
import { removeProduct, changeQuantity, addInsurance, removeInsurance } from '../../../redux/CardReducer'

import { getCardItems, getTotalPrice } from '../../../redux/CardSelector'
import { AppStateType } from '../../../redux/ReduxStore'
import { CardItemType } from '../../../types/types'

type MapStateToPropsType = {
    items: Array<CardItemType>
    totalPrice: number
    isLoaded: boolean
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        items: getCardItems(state),
        totalPrice: getTotalPrice(state),
        isLoaded: state.card.isLoaded
    }
}
export default connect(mapStateToProps, { changeQuantity, addInsurance, removeInsurance, removeProduct })(CardPage)