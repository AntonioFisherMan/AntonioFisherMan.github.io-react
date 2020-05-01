import React from 'react'
import { connect } from 'react-redux'
import { ReduxCheckoutForm } from './CheckoutForm'
import { addOrdersThunk, addOrders, addUnloginOrdersThunk } from '../../../redux/OrdersReducer'


class Checkout extends React.Component {
    onSubmit = (formData) => {
        let data;
        if (!this.props.auth.isAuth) {
            data = { items: this.props.items, formData }
            this.props.addUnloginOrdersThunk(data)
            this.props.history.push("/order")
        }
        else {
            data = { items: this.props.items, inform: formData, id: this.props.auth.user.id }
            this.props.addOrdersThunk(data)
        }

    }

    render() {
        return (

            <ReduxCheckoutForm initialValues={this.props.inform} onSubmit={this.onSubmit} errors={this.props.errors} />
        )
    }

}


let mapStateToProps = (state) => {
    return {
        errors: state.errors,
        items: state.card.items,
        auth: state.auth,
        inform:state.inform.inform
    }
}
export default connect(mapStateToProps, { addOrdersThunk, addUnloginOrdersThunk, addOrders })(Checkout)
