import React from 'react'
import FeedbackPage from './FeedbackPage'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect'
import { setReviews, reviewsActions } from '../../redux/reducers/ReviewsReducer'
import { LoadingDataHOC } from '../../hoc/LoaingData'

class FeedbackContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsId: this.props.match.params.id,
            rating: 0
        }

    }

    handleRating = (rating) => {
        this.setState({ rating: rating })
    }
    removeItem = () => {
        this.props.clearReview()
    }
    onSubmit = (data) => {
        let formData = new FormData();
        if (data.images) {
            for (var i = 0; i < data.images.length; i++) {
                formData.append("file", data.images[i])
            }
        }
        formData.append("reviewText", data.feedbackTextarea)
        this.props.setReviews(formData, this.state.goodsId, this.state.rating);
    }

    render() {

        return (
            <FeedbackPage {...this.props} onSubmit={this.onSubmit} removeItem={this.removeItem} goodsId={this.state.goodsId} handleRating={this.handleRating} loading={this.props.loading} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        review: state.reviews.reviews
    }
}
export default compose(WithAuthRedirect, LoadingDataHOC, connect(mapStateToProps, { setReviews, ...reviewsActions }))(FeedbackContainer)