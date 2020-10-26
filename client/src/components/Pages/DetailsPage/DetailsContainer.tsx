import React from 'react'
import DetailsPage from './DetailsPage'
import { connect } from 'react-redux'
import { getGoodsThunkById, removeGood } from '../../../redux/CatalogReducer'
import { addToCart } from '../../../redux/CardReducer'
import { setItemOfReview } from '../../../redux/ReviewsReducer'
import { AppStateType } from '../../../redux/ReduxStore'
import { CardItemType, GoodType } from '../../../types/types'
import { RouteComponentProps } from 'react-router'


class DetailsContainer extends React.Component<PropsType> {
    refreshProfile() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.getGoodsThunkById(id)
        }

    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps: any) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.refreshProfile();
        }
    }
    render() {
        return (
            <DetailsPage {...this.props} />
        )
    }
}

type MapStateToProps = {
    goodItem: Array<GoodType> | null,
    items: Array<CardItemType>
}
type RouteProps = RouteComponentProps<{ id?: string }>
type MapDispatchToProps = {
    getGoodsThunkById: (id: string) => void
}
type PropsType = MapStateToProps & MapDispatchToProps & RouteProps

let mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        goodItem: state.goods.goodItem,
        items: state.card.items
    }
}

export default connect(mapStateToProps, { getGoodsThunkById, addToCart, removeGood, setItemOfReview })(DetailsContainer)

