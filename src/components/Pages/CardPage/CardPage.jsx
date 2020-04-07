import React from 'react'
import styles from './CardPage.module.css'
import { Link } from 'react-router-dom'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Button3 from '../../SiteButtons/Button3/Button3'
import Button1 from '../../SiteButtons/Button1/Button1'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
const CardPage = () => {
    return (
        <div>
            <HeaderBottom />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SiteHeadline text="Your bag" />
                    </div>
                </div>
            </div>


            <section className="bagLink">
                <div className="container">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-4 d-flex align-items">
                            <p>Item</p>
                        </div>
                        <div className="col-2 d-flex align-items">
                            <p className="ml-auto">Price</p>
                        </div>
                        <div className="col-3 d-flex justify-content-center">
                            <p>Price</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bagCard">
                <div className="container">
                    <div className="row bagCard__item">
                        <div className="col-12 col-sm-3">
                            <img className="bagCard__photo" src="images/Mask-3.png" alt="" />
                        </div>
                        <div className="col-9">
                            <p className="bagCard__slogan" style={{ fontSize: '10px !important' }}>maxi DRESS</p>
                            <div className="bagCard__list">
                                <p>A perfect flirty number for Balls and Black Tie.</p>
                                <div className="col-3 d-flex justify-content-end">
                                    <p className="bagCard__listPrice">€61.17</p>
                                </div>
                                <div className="col-3 d-flex justify-content-center">
                                    <p className="bagCard__listPrice">€61.17</p>
                                </div>

                                <img src="images/svg/Vector (14).svg" alt="" />
                            </div>
                            <div className="bagCard__size d-flex">
                                <p>Size: XS</p>
                                <img src="images/svg/Vector (11).svg" alt="" />
                            </div>
                            <p className="bagCard__p">Rental period* : 7 days</p>
                            <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                            <div className="bagCard__discount">
                                <div>
                                    <img src="images/svg/Vector (15).svg" alt="" />
                                </div>
                                <div>
                                    <p><span>Add </span>insurance for this item for €5</p>
                                    <p className="bagCard__grey">This will cover accidental damage (example: zip break) but not unrepairable damage</p>
                                </div>

                            </div>

                        </div>

                        <hr />
                    </div>
                    <div className="row orders__item-active" >
                        <div className="col-3 returnBlock__item-active">
                            <p style={{ minHeight: '230px !important' }}>Item</p>
                            <p style={{ minHeight: '150px !important' }}>Price</p>
                            <p style={{ minHeight: '100px !important' }}>Price</p>
                        </div>
                        <div className="col-9  d-flex flex-column" style={{ marginTop: '20px' }}>
                            <img className="orders__item-activeIcon ml-auto" src="images/svg/Vector (14).svg" alt="" />
                            <div className="d-flex" style={{ minHeight: '230px !important' }}>

                                <div>
                                    <img className="orders__photo" src="images/Mask-3.png" alt="" />

                                </div>
                                <div className="bagCard__TEXT">
                                    <p className="bagCard__slogan">maxi DRESS</p>
                                    <p>A perfect flirty number for Balls and Black Tie.</p>
                                    <div className="bagCard__size d-flex">
                                        <p>Size: XS</p>
                                        <img src="images/svg/Vector (11).svg" alt="" />
                                    </div>
                                    <p className="bagCard__p" >Rental period* : 7 days</p>
                                    <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                                </div>

                            </div>
                            <p className="bagCard__listPrice d-flex justify-content-center" style={{ minHeight: '150px !important', alignItems: 'center' }}>€61.17</p>
                            <p className="bagCard__listPrice " style={{ minHeight: '100px !important', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>€61.17</p>
                            <div className="bagCard__discount">
                                <div>
                                    <img src="images/svg/Vector (15).svg" alt="" />
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <p><span>Add </span>insurance for this item for €5</p>
                                    <p className="bagCard__grey" >This will cover accidental damage (example: zip break) but not unrepairable damage</p>
                                </div>

                            </div>

                        </div>

                    </div>
                    <hr />

                    <div className="bagCard__text">
                        <div className="row">
                            <div className="col-10">
                                <p>* Tip: Rent 2nd outfit now and keep both outfits for 14 days in total. Upgrade to 3rd outfit
                                and keep all 3 outfits for 21 days!
                                Wear all outfits for as many times as you want.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bagCard__inform">
                        <div className="row bagCard__informList">
                            <div className="col-12 col-md-3">
                                <Button3 link="/catalog" text="Rent more" />
                            </div>
                            <div className="col-12 col-md-9">
                                <div className="bagCard__informText2 d-flex">
                                    <h5>Subtotal: €61.17</h5>
                                    <Button1 text="order"/>
                                    <p>By proceeding you are agreeing to our <span>Terms & Conditions</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default CardPage