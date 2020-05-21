import React from 'react'
import {connect} from 'react-redux'
import OrdersPage from './OrdersPage';
import {getOrders} from '../../../redux/OrdersReducer'
import { compose } from 'redux';
import { WithAuthRedirect } from '../../../hoc/WithAuthRedirect';
import {setItemOfReview} from '../../../redux/ReviewsReducer'

class OrdersPageContainer extends React.Component{
  componentDidMount(){
      this.props.getOrders(this.props.userId);
  }
  
  render(){
      return(
        <>
        <OrdersPage {...this.props} 
        />
        </>
      )
  }
}
let mapStateToProps=(state)=>{
    return{
     orders:state.orders.orders,
     userId:state.auth.user.id
    }
}

export default compose(
  WithAuthRedirect,
  connect(mapStateToProps,{getOrders,setItemOfReview})
)(OrdersPageContainer)

