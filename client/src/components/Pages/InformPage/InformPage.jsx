import React from 'react'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Checkout from '../../Forms/Checkout/Checkout'

const InformPage=()=>{
    return(
        <div>
       <HeaderBottom/>
        <section className="checkoutBlock">
            <div className="container">
            <div className="row">
                    <div className="col-12">
                        <SiteHeadline text="My information"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-3">
                        <Sidebar/>  
                    </div>
                 <div className="col-1"></div>
             
                    <div className="col-12 col-md-8">
                      <Checkout/>
                    </div>
                </div>
            </div>
        </section>

        </div>
    )
}

export default InformPage