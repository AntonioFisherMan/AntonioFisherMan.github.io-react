import React from 'react'
import './OrdersPage.css'
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import MyButton from '../../components/SiteButton/MyButton/MyButton'
import { Link } from 'react-router-dom'
import { SiteMessage } from '../../components/common/ServerMessages/SiteMessage'


const OrdersPage = (props) => {
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
                        {props.orders.length ? <div >
                            <h3>Заказов: {props.orders.length}</h3>
                            <div className="returnLinks">
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
                            {props.orders.map(order => <div className="order" key={order._id}>

                                <h6 style={{ color: 'pink' }}>Номер заказа:{order._id}</h6>


                                {order.items.map(item => <div key={item._id}>
                                    <div className="orders__item">
                                        <div className="row">
                                            <div className="col-3 col-lg-3">
                                                <img className="orders__photo" src={item.photo} alt="" />
                                            </div>
                                            <div className="col-4 col-lg-6">
                                                <p className="bagCard__slogan">{item.style} DRESS</p>
                                                <p>{item.text}</p>
                                                <div className="bagCard__size d-flex">
                                                    <p>Size: {item.size}</p>
                                                    <img src="images/svg/Vector (11).svg" alt="" />
                                                </div>
                                                <p className="bagCard__p">Rental period* : 7 days</p>
                                                <p>Dates: {item.startDate}-{item.endDate} </p>
                                            </div>
                                            <div className="col-5 col-lg-3">
                                                <div className="orders__price ">
                                                    <div className="col-6 d-flex align-items justify-content-center">
                                                        <p className="bagCard__listPrice ">€{item.price}</p>
                                                    </div>
                                                    <div className="col-5 d-flex align-items">
                                                        <p className="bagCard__listPrice ml-auto">{item.quantity}</p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <Link style={{ marginTop: '10px', width: '150px', height: '30px' }} className="buttonBlock" to={`/feedback/${item._id}`} onClick={() => props.setItemOfReview(item)}>Write a Review</Link>

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
                                </div>)}</div>)}
                        </div> : <SiteMessage text="У вас еще не было заказов" />}
                    </div>
                    <div className="row">

                        <div className="returnLink">
                            <div className="col-12">
                                <MyButton href="/catalog" text="Return to catalogue" variant="text" />
                            </div>
                        </div>
                    </div>


                </div>
            </section>

        </>
    )
}


export default OrdersPage