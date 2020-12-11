import React from 'react'
import { connect } from 'react-redux'
import OrdersPage from './OrdersPage';
import { getOrders } from '../../redux/reducers/OrdersReducer'
import { compose } from 'redux';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { reviewsActions } from '../../redux/reducers/ReviewsReducer'
import { LoadingDataHOC } from '../../hoc/LoadingData';
import Preloader from '../../common/Preloader';

class OrdersPageContainer extends React.Component {
  componentDidMount() {
    this.props.getOrders(this.props.userId);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.orders.length !== this.props.orders.length) {
      this.props.getOrders(this.props.userId);
    }
  }
  render() {
    return (
      <>
        {this.props.loading ? <Preloader loading={this.props.loading} /> : <OrdersPage {...this.props} />}
      </>
    )
  }
}
let mapStateToProps = (state) => {
  return {
    orders: state.orders.orders,
    userId: state.auth.user.id
  }
}

export default compose(
  LoadingDataHOC,
  WithAuthRedirect,
  connect(mapStateToProps, { getOrders, ...reviewsActions })
)(OrdersPageContainer)

