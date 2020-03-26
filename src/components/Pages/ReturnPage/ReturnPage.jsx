import React from 'react'
import styles from './ReturnPage.module.css'
import {Link} from 'react-router-dom'
import Sidebar from '../../Sidebar/Sidebar'

const ReturnPage=()=>{
    return(
        <div>
<section className="link__block">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ul className="link__inform">
                            <li><Link>Home / </Link></li>
                            <li><Link> All our products / </Link></li>
                            <li><Link> Maxi dress / </Link></li>
                            <li><Link> Sussex Copper Fait Maxi dress</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
 </section>
        <section className="bag__headline">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card__headline">
                            <p style={{marginTop: '35px !important'}}>My returns</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="returnBlock">
            <div className="container">
                <div className="returnBlock__inform">
                    <div>
                        <div className="row">
                            <div className="col-12 col-lg-2">
                                <Sidebar/>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="row">
                            <div className="col-12 col-lg-10">
                                <div className="returnBlock__text">
                                    <p><span> Return is included in your order!</span> <br/>
                                        In your box you will find a pre-payed return label that you need to place on
                                        your box
                                        and drop off at the nearest post office.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="returnBlock__links">
                            <div className="container">
                                <div className="row  d-flex align-items ">
                                    <div className="col-4">
                                        <p>Item</p>
                                    </div>
                                    <div className="col-2 ">
                                        <p>Order NO.</p>
                                    </div>
                                    <div className="col-2">
                                        <p>Returns NO.</p>
                                    </div>
                                    <div className="col-4 d-flex justify-content-center">Status</div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="returnBlock__item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <p className="bagCard__slogan">maxi DRESS</p>
                                        <div className="bagCard__list">
                                            <p>A perfect flirty number for Balls and Black Tie.</p>
                                        </div>
                                        <div className="bagCard__size d-flex">
                                            <p>Size: XS</p>
                                            <img src="images/svg/Vector (11).svg" alt=""/>
                                        </div>
                                        <p className="bagCard__p">Rental period* : 7 days</p>
                                        <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                                    </div>
                                    <div className="col-2">
                                          <p style={{fontSize: '12px'}}>4146567738</p>
                                    </div>
                                    <div className="col-3">
                                          <p style={{fontSize: '12px'}}>9tmlAIDfmx8B</p>
                                    </div>
                                    <div className="col-3">
                                        <div className="returnBlock__item-column">
                                            <img src="images/svg/Vector (24).svg" alt=""/>
                                          <p style={{fontSize: '12px'}}>Return received on Mar 17, 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>



                    <div className="row">
                        <div className="col-3 returnBlock__item-active">
                            <p>Item</p>
                            <p>Order NO.</p>
                            <p>Returns NO.</p>
                            <p>Status</p>
                        </div>
                        <div className="col-9 col-lg-4 returnBlock__inform-active">
                            <div className="returnBlock__informItem-active">

                                <p className="bagCard__slogan">maxi DRESS</p>
                                <div className="bagCard__list">
                                    <p>A perfect flirty number for Balls and Black Tie.</p>
                                </div>
                                <div className="bagCard__size d-flex">
                                    <p>Size: XS</p>
                                    <img src="images/svg/Vector (11).svg" alt=""/>
                                </div>
                                <p className="bagCard__p">Rental period* : 7 days</p>
                                <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                            </div>


                              <p>4146567738</p>


                              <p>9tmlAIDfmx8B</p>


                            <div className="returnBlock__item-column">
                                <img src="images/svg/Vector (24).svg" alt=""/>
                                  <p>Return received on Mar 17, 2020</p>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 returnBlock__item-active">
                            <p>Item</p>
                            <p>Order NO.</p>
                            <p>Returns NO.</p>
                            <p>Status</p>
                        </div>
                        <div className="col-9 col-lg-4 returnBlock__inform-active">
                            <div className="returnBlock__informItem-active">

                                <p className="bagCard__slogan">maxi DRESS</p>
                                <div className="bagCard__list">
                                    <p>A perfect flirty number for Balls and Black Tie.</p>
                                </div>
                                <div className="bagCard__size d-flex">
                                    <p>Size: XS</p>
                                    <img src="images/svg/Vector (11).svg" alt=""/>
                                </div>
                                <p className="bagCard__p">Rental period* : 7 days</p>
                                <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                            </div>


                              <p>4146567738</p>


                              <p>9tmlAIDfmx8B</p>


                            <div className="returnBlock__item-column">
                                <img src="images/svg/Vector (24).svg" alt=""/>
                                  <p>Return received on Mar 17, 2020</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
           
            <div className="row">
                <div className="container">
                    <div className="col-12">
                        <div className="d-flex orders__return">
                            <i className="carousel-control-prev-icon fas fa-chevron-left" aria-hidden="true"></i>
                            <p>Return to catalogue</p>
                        </div>
                    </div>  
                </div>
               

                </div>
        </section>
    </div>
    )
}

export default ReturnPage