import React from 'react'
import DetailsPage from './DetailsPage'
import { connect } from 'react-redux'
import { getGoodsThunkById } from '../../redux/reducers/CatalogReducer'
import { cardActions } from '../../redux/reducers/CardReducer'
import { reviewsActions } from '../../redux/reducers/ReviewsReducer'
import { AppStateType } from '../../redux/ReduxStore'
import { CardItemType, ProductType } from '../../types/types'
import { RouteComponentProps } from 'react-router'
import { compose } from 'redux'
import { LoadingDataHOC } from '../../hoc/LoaingData'


class DetailsContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.refreshProfile();
        }
    }
    refreshProfile() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.getGoodsThunkById(id)
        }
    }
    onSubmit = (payload: any) => {
        const { size, startDate, endDate } = payload
        const cardItems = this.props.items
        const { good } = this.props.goodItem[0]
        const { price, photos, _id, style } = good
        const photo = photos.middle
        var data = { photo, price, _id, style }
        var inCard = false
        if (cardItems.length > 0) {
            for (var i = 0; i < cardItems.length; i++) {
                if (cardItems[i]._id.includes(_id)) {
                    cardItems[i].quantity++
                    inCard = true
                    break
                }
            }
            if (inCard == false) {
                this.props.addToCart(Object.assign({ size, startDate, endDate, quantity: 1 }, data))
            }
        } else {
            this.props.addToCart(Object.assign({ size, startDate, endDate, quantity: 1 }, data))
        }
    }


    render() {
        return (
            <DetailsPage {...this.props} onSubmit={this.onSubmit} />
        )
    }
}

type MapStateToProps = {
    goodItem: Array<ProductType>,
    items: Array<CardItemType>,
}
type RouteProps = RouteComponentProps<{ id?: string }>
type MapDispatchToProps = {
    getGoodsThunkById: (id: string) => void,
    addToCart: (object: object) => void,
    setItemOfReview: (item: object) => void

}
type PropsType = MapStateToProps & MapDispatchToProps & RouteProps & HOCTYPE
type HOCTYPE = {
    loading: boolean
}
let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        goodItem: state.goods.goodItem,
        items: state.card.items
    }
}

export default compose(
    connect(mapStateToProps, { getGoodsThunkById, ...cardActions, ...reviewsActions }),
    LoadingDataHOC)(DetailsContainer)


