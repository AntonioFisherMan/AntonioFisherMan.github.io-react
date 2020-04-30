import React from 'react'
import './OrdersPage.css'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Button3 from '../../SiteButtons/Button3/Button3'
import Button1 from '../../SiteButtons/Button1/Button1'


const OrdersPage = (props) => {
    debugger
    return (
        <>
            <HeaderBottom />
            <section className="orders">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SiteHeadline text="Profile" />
                        </div>
                    </div>
                    <div className="ordersBlock">

                            <div className="row">
                                <div className="col-12 col-lg-2">
                                    <Sidebar />
                                </div>
                            </div>
                        

                        {props.orders.length?<div>
                            <div className="returnBlock__links">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-2"></div>
                                        <div className="col-4 ">
                                            <p>Item</p>
                                        </div>
                                        <div className="col-3 d-flex align-items">
                                            <p className="ml-auto">Rental</p>
                                        </div>
                                        <div className="col-3 d-flex align-items">
                                            <p className="ml-auto">Purchase</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {props.orders.map(order => <div key={order._id}>
                                <div className="orders__item">
                                <div className="row">
                                        <div className="col-12"><h2>Номер заказа: {order._id}</h2></div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3 col-lg-2">
                                            <img className="orders__photo" src={order.items.img} alt="" />
                                        </div>
                                        <div className="col-4 col-lg-5">
                                            <p className="bagCard__slogan">{order.slogan}</p>
                                            <p>{order.text}</p>
                                            <div className="bagCard__size d-flex">
                                                <p>Size: XS</p>
                                                <img src="images/svg/Vector (11).svg" alt="" />
                                            </div>
                                            <p className="bagCard__p">Rental period* : 7 days</p>
                                            <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                                        </div>
                                        <div className="col-5 col-lg-5">
                                            <div className="orders__price ">
                                                <div className="col-6 d-flex align-items justify-content-center">
                                                    <p className="bagCard__listPrice ">€{order.price}</p>
                                                </div>
                                                <div className="col-5 d-flex align-items">
                                                    <p className="bagCard__listPrice ml-auto">€61.17</p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                  
                                </div>
                                <div className="row orders__item-active" >
                                    <div className="col-3 returnBlock__item-active">
                                        <p style={{ minHeight: '230px !important' }}>Item</p>
                                        <p style={{ minHeight: '150px !important' }}>Rental</p>
                                        <p style={{ minHeight: '100px !important' }}>Purchase</p>
                                    </div>
                                    <div className="col-9  d-flex flex-column" style={{ marginTop: '20px' }}>
                                        <div className="d-flex" style={{ minHeight: '230px !important' }}>
                                            <div>
                                                <img className="orders__photo" src="images/Mask-4.png" alt="" />
                                            </div>
                                            <div>
                                                <p className="bagCard__slogan">maxi DRESS</p>
                                                <p>A perfect flirty number for Balls and Black Tie.</p>
                                                <div className="bagCard__size d-flex">
                                                    <p>Size: XS</p>
                                                    <img src="images/svg/Vector (11).svg" alt="" />
                                                </div>
                                                <p className="bagCard__p">Rental period* : 7 days</p>
                                                <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                                            </div>

                                        </div>
                                        <p className="bagCard__listPrice d-flex justify-content-center" style={{ minHeight: '150px !important', alignItems: 'center' }}>€61.17</p>

                                        <div className="d-flex  flex-column align-items-center">
                                            <p className="bagCard__listPrice " style={{ minHeight: '100px !important', display: 'flex', alignItems: 'center' }}>€61.17</p>
                                            <button className="style__btn" style={{ margin: '0' }}>BUY</button>
                                            <p style={{ textAlign: 'center', marginTop: '10px !important' }}>Buy that dress that you are renting at a reduced price</p>
                                        </div>

                                    </div>

                                </div>
                            </div>)}
                        </div>:<div className="row d-flex justify-content-center align-items-center"style={{color:'#E77E83'}}>
                            <div className="col-12">
                            <h4 className="d-flex flex-column justify-content-center align-items-center">У вас еще не было заказов<br/><i class="fab fa-linux"></i></h4></div>
                            </div>  }
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Button3 link="/catalog" text="Return to catalogue" />
                        </div>
                    </div>


                </div>
            </section>

        </>
    )
}

export default OrdersPage