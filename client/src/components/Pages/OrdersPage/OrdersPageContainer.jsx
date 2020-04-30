import React from 'react'
import {connect} from 'react-redux'
import OrdersPage from './OrdersPage';
import {getOrders} from '../../../redux/OrdersReducer'


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
    debugger
    return{
     orders:state.orders.orders,
     userId:state.auth.userId
    }
}


  export default connect(mapStateToProps,{getOrders})(OrdersPageContainer)


