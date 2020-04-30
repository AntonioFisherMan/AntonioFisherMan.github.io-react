import React from 'react'
import DetailsPage from './DetailsPage'
import { connect } from 'react-redux'
import { getReviews } from '../../../redux/ReviewsReducer'
import { getGoodsThunkById,removeGood } from '../../../redux/CatalogReducer'
import { setProduct } from '../../../redux/CardReducer'

class DetailsContainer extends React.Component {
    refreshProfile() {
        const id = this.props.match.params.id;
        if (id) {
            this.props.getGoodsThunkById(id)
            this.props.getReviews();
        }
    
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id != prevProps.match.params.id) {
            this.refreshProfile();
        }
    }
    render() {
        return (
            <DetailsPage {...this.props} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        reviews: state.reviews.reviews,
        goodItem: state.goods.goodItem
    }
}
export default connect(mapStateToProps, { getReviews, getGoodsThunkById, setProduct ,removeGood})(DetailsContainer)