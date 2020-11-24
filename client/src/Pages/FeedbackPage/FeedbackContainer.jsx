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
            rating: 0,
            files: []
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
        for (var i = 0; i < this.state.files.length; i++) {
            formData.append("file", this.state.files[i])
        }
        formData.append('rating', this.state.rating)
        formData.append('text', data.feedbackTextarea)
        this.props.setReviews(formData, this.state.goodsId)
    }
    onSaveFiles = (files) => {


        this.setState({ files: files })
    }

    render() {

        return (
            <FeedbackPage {...this.props} onSubmit={this.onSubmit} removeItem={this.removeItem} goodsId={this.state.goodsId} handleRating={this.handleRating} loading={this.props.loading} onSaveFiles={this.onSaveFiles} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        review: state.reviews.reviews
    }
}
export default compose(WithAuthRedirect, LoadingDataHOC, connect(mapStateToProps, { setReviews, ...reviewsActions }))(FeedbackContainer)