import React from 'react'
import CardPage from './CardPage'
import { connect } from 'react-redux'
import { removeProduct } from '../../../redux/CardReducer'
import { uniqBy } from 'lodash'



let mapStateToProps = (state) => {
    debugger
    return {
        items: uniqBy(state.card.items, i => i._id),
        isLoaded: state.card.isLoaded,
        totalPrice: state.card.items.reduce((total, item) => total + item.price, 0),
        data: state.card.data
    }
}
export default connect(mapStateToProps, { removeProduct })(CardPage)