import React from 'react'
import {connect} from 'react-redux'
import { ReduxCheckoutForm } from './CheckoutForm'
import {addOrdersThunk,addOrders} from '../../../redux/OrdersReducer'


class Checkout extends React.Component{
    onSubmit = (formData) => {
        debugger
        let data;
        if(!this.props.auth.isAuth){
           data=this.props.items['inform']=formData;
            this.props.addOrders(data)
            alert("Hello user")
            this.props.history.push("/order")
        }
        else{
            debugger
            data={items:this.props.items,inform:formData,id:this.props.auth.user.id}
            alert("Hello anton")
            this.props.addOrdersThunk(data)
        }
       
     }
   
 render(){
     return(
         <ReduxCheckoutForm onSubmit={this.onSubmit} errors={this.props.errors}/>
     )
 }

}


let mapStateToProps=(state)=>{
    debugger
    return{
        errors:state.errors,
        items:state.card.items,
        auth:state.auth
    }
}
export default connect(mapStateToProps,{addOrdersThunk,addOrders})(Checkout)
