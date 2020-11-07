import React from 'react'
import FeedbackPage from './FeedbackPage'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect'
import { setReviews, reviewsActions } from '../../../redux/reducers/ReviewsReducer'
import { ServerMessageData } from '../../../hoc/ServerMessageData'

class FeedbackContainer extends React.Component {

    render() {
        return (
            <FeedbackPage {...this.props} />
        )
    }
}
let mapStateToProps = (state) => {
    return {
        review: state.reviews.reviews
    }
}
export default compose(WithAuthRedirect, ServerMessageData, connect(mapStateToProps, { setReviews, ...reviewsActions }))(FeedbackContainer)