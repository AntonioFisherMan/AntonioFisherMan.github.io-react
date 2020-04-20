import React from 'react'

import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Checkout from '../../Forms/Checkout/Checkout'

const CheckoutPage=()=>{
    return(
        <div>
      <HeaderBottom/>
        <section className="checkoutBlock">
            <div className="container">
            <div className="row">
                    <div className="col-12">
                        <SiteHeadline text="Check Out"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-9">
                       <Checkout />
                    </div>
                </div>
            </div>
        </section>
    
        </div>
    )
}

export default CheckoutPage