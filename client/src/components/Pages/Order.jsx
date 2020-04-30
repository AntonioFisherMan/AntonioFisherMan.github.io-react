import React from 'react'
import { connect } from 'react-redux'

const Order=(props)=>{
   return(
       <h1>props.order</h1>
   )
}

let mapDispatchToProps=(state)=>{
    return{
        order:state.orders.unloginOrder
    }
}
export default connect(mapDispatchToProps,{})(Order)