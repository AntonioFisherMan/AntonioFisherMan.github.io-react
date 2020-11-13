import React from 'react'
import { connect } from 'react-redux'
import { addOrdersThunk, ordersActions, addUnloginOrdersThunk } from '../../redux/reducers/OrdersReducer'
import { getInform } from '../../redux/reducers/InformReducer'
import { CheckoutPage } from './CheckoutPage'

class Checkout extends React.Component {
        onSubmit = (formData) => {
                let data;
                if (!this.props.auth.isAuth) {
                        data = { items: this.props.items, formData }
                        this.props.addUnloginOrdersThunk(data)
                        this.props.history.push("/order")
                }
                else {
                        data = { items: this.props.items, inform: formData, id: this.props.auth.userId }
                        this.props.addOrdersThunk(data)
                }
        }

        render() {
                return (
                        <CheckoutPage initialValues={this.props.userInform} onSubmit={this.onSubmit} {...this.props} />

                )
        }

}


let mapStateToProps = (state) => {
        return {
                errors: state.errors,
                items: state.card.items,
                auth: state.auth,
                userInform: state.auth.userInform
        }
}
export default connect(mapStateToProps, { addOrdersThunk, addUnloginOrdersThunk, ...ordersActions, getInform })(Checkout)