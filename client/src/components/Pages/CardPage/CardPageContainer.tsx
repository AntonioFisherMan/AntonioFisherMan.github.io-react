import React from 'react'
import CardPage from './CardPage'
import { connect } from 'react-redux'
import { cardActions } from '../../../redux/reducers/CardReducer'

import { getCardItems, getTotalPrice } from '../../../redux/selectors/CardSelector'
import { AppStateType } from '../../../redux/ReduxStore'
import { CardItemType } from '../../../types/types'


class CarpPageContainer extends React.Component<ComponentType> {
    render() {
        return <CardPage {...this.props} />
    }
}
type PropsType = {
    items: Array<CardItemType>
    totalPrice: number
    isLoaded: boolean
}
type DispatchType = {
    changeQuantity: (id: string, quantity: number) => void,
    removeProduct: (id: string) => void,
    addInsurance: (id: string, isInsurance: boolean) => void,
    removeInsurance: (id: string, isInsurance: boolean) => void
}
type ComponentType = PropsType & DispatchType


let mapStateToProps = (state: AppStateType) => {
    return {
        items: getCardItems(state),
        totalPrice: getTotalPrice(state),
        isLoaded: state.card.isLoaded
    }
}
export default connect(mapStateToProps, { ...cardActions })(CarpPageContainer)