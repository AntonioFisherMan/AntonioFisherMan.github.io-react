import React from 'react'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import CheckoutForm from '../../components/Forms/Checkout/CheckoutForm'
import { reduxForm } from 'redux-form'


export const CheckoutPage = (props) => {
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
                            <ReduxCheckoutForm onSubmit={props.onSubmit} btn="continue" initialValues={props.userInform} />
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


