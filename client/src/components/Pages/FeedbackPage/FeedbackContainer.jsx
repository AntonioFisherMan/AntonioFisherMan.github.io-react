import React from 'react'
import FeedbackPage from './FeedbackPage'
import { connect } from 'react-redux'
import {setReviewsThunk} from '../../../redux/ReviewsReducer'

class FeedbackContainer extends React.Component{
    render(){
        return(
            <FeedbackPage {...this.props} setReviews={this.props.setReviewsThunk}/>
        )
    }
}
let mapStateToProps=(state)=>{
    return{
        reviews:state.reviews.reviews
    }
}
export default connect(mapStateToProps,{setReviewsThunk})(FeedbackContainer)