import React, { useEffect } from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import { connect } from 'react-redux'
import { getInform, updateInform } from '../../redux/reducers/InformReducer'
import { CheckoutForm } from '../../components/Forms/Checkout/CheckoutForm'
import { reduxForm } from 'redux-form'


export const CheckoutPage = (props) => {
    useEffect(() => {
        props.getInform()
    })
    const onSubmit = (data) => {
        let inform = { data }
        props.updateInform(inform)
    }
    return (
        <div>
            <HeaderBottom />
            <section className="checkoutBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SiteHeadline text="Check Out" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <ReduxCheckoutForm onSubmit={onSubmit} />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}


const ReduxCheckoutForm = reduxForm({
    form: 'inform'
})(CheckoutForm)

let mapStateToProps = (state) => {
    return {
        userInform: state.inform.inform
    }
}


export default connect(mapStateToProps, { getInform, updateInform })(CheckoutPage)
