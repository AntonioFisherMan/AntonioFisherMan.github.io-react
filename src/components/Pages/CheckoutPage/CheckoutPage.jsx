import React from 'react'
import styles from './CheckoutPage.module.css'
import {Link} from 'react-router-dom'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Button3 from '../../SiteButtons/Button3/Button3'

const CheckoutPage=()=>{
    return(
        <div>
      <HeaderBottom/>
         

        <section className="checkout">
            <div className="container">
            <div className="row">
                    <div className="col-12">
                        <SiteHeadline text="Check Out"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <form className="checkout__form">
                            <div className="form-row">
                                <h5 className="form__h">Shipping address</h5>
                            </div>
                            <div className="form-row" >
                              <div className="form-group col-12 col-md-6" id="m">
                                <input type="text" className="form-control" placeholder="First name"/>
                              </div>
                              <div className="form-group col-md-6">
                                <input type="text" className="form-control"  placeholder="Last name"/>
                              </div>
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control"  placeholder="Address"/>
                            </div>
                            <div className="form-group">
                              <input type="text" className="form-control" placeholder="Apartment, suite, etc"/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="City"/>
                              </div>
                            <div className="form-row" >
                              <div className="form-group col-md-6" id="m">
                                <select className="form-control">
                                  <option selected>Country</option>
                                  <option>Ukraine</option>
                                  <option>Russia</option>
                                </select>
                              </div>
                              <div className="form-group col-md-6">
                                <input type="text" className="form-control" placeholder="Post code" id="inputZip"/>
                              </div>
                            </div>
                            <div className="form-group ">
                                <input type="text" className="form-control"  placeholder="Phone"/>
                              </div>
                              <div className="form-row">
                                <h5 className="form__h">Billing Address</h5>
                            </div>
                            <div className="form-group">
                              <div className="form-check">
                                <label><input type="checkbox" className="form-check-label checkbox"/><span className="fake"></span><span id="check__text">same as Shipping Address</span></label>                        
                              </div>
                            </div>
                            <div className="form-row">
                                <div className="col-12 d-flex align-items-center">
                                    <Button3 link="/catalog"text="Return to catalogue"/>
                                </div>
                                <div className="col-12 d-flex align-items-center justify-content-end">
                                    <button type="submit" className="form__btn ">Continue</button>
                                </div>
                            </div>
                            
                          </form>
                    </div>
                </div>
            </div>
        </section>
    
        </div>
    )
}

export default CheckoutPage