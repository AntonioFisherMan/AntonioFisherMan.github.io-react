import React from 'react'
import './DetailsPage.css'
import { Link } from 'react-router-dom'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Slider2 from '../../Slider/Slider2'
import Button2 from '../../SiteButtons/Button2/Button2'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Button1 from '../../SiteButtons/Button1/Button1'
const DetailsPage = () => {
    return (
        <div>
            <HeaderBottom />
            <section className="detailsBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SiteHeadline text="Sussex Copper Foil Maxi dress" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2 col-sm-12 col-lg-2">
                            <div id="multiCarousel_3" className="carousel slide w-100" data-ride="carousel">
                                <div className="carousel-inner-2 w-100" role="listbox">
                                    <div className="carousel-item active">

                                        <img className="carousel__img" src="images/photo4.png" alt="" />

                                    </div>
                                    <div className="carousel-item">

                                        <img className="carousel__img" src="images/photo2.png" alt="" />

                                    </div>
                                    <div className=" carousel-item ">

                                        <img className="carousel__img" src="images/photo5.png" alt="" />
                                    </div>
                                    <div className="carousel-item ">
                                        <img className="carousel__img" src="images/photo6.png" alt="" />
                                    </div>
                                    <div className="carousel-item ">

                                        <img className="carousel__img" src="images/photo5.png" alt="" />
                                    </div>
                                    <div className="carousel-item">

                                        <img className="carousel__img" src="images/photo4.png" alt="" />

                                    </div>
                                    <div className="carousel-item ">
                                        <img className="carousel__img" src="images/photo2.png" alt="" />
                                    </div>
                                </div>
                                <Link id="arrow-prev1" href="#multiCarousel_3" role="button" data-slide="prev">
                                    <div className="arrow-1">
                                        <i className="fas fa-chevron-up" aria-hidden="true"></i>
                                        <span className="sr-only">Предыдущий</span>
                                    </div>
                                </Link>
                                <Link id="arrow-next1" href="#multiCarousel_3" role="button"
                                    data-slide="next">
                                    <div className="arrow-1">
                                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                                        <span className="sr-only">Cледующий</span>
                                    </div>
                                </Link>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4 col-lg-4 d-flex justify-content-center">
                            <img className="detailsPhoto" src="images/photo1.png" alt="" />
                        </div>
                        <div className="col-12 col-sm-8 col-lg-4">
                            <div className="detailsInform">
                                <div className="detailsInformList">
                                    <p className="detailsListSlogan" >maxi DRESS</p>
                                    <p className="detailsListText">A perfect flirty number for Balls and Black Tie.</p>
                                    <div className="detailsListStars">
                                        <div className="stars" >
                                            <i className="far fa-star ">
                                                <i className="fas fa-star " ></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                        </div>
                                        <p>5 Reviews</p>
                                    </div>

                                    <p className="detailsItem-price-line">€65.55</p>
                                    <p className="detailsItem-price">€61.17</p>
                                    <hr />
                                </div>
                                <div className="detailsInformList">
                                    <h6>Step 1.</h6>
                                    <div className="dropdown show d-flex align-items-center">
                                        <Link className="btn dropdown-toggle detailsBtn" href="#" role="button" id="dropdownMenuLink"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choose your size
                                </Link>

                                        <div className="d-flex detailsSize">
                                            <img src="images/svg/Vector (11).svg" alt="" />
                                            <p >size guide</p>
                                        </div>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <Link className="dropdown-item" href="#">Action</Link>
                                            <Link className="dropdown-item" href="#">Another action</Link>
                                            <Link className="dropdown-item" href="#">Something else here</Link>
                                        </div>
                                    </div>
                                    <p className="detailsInformListRental">Rental Period *</p>
                                    <div className="detailsInformListRentalBlock">
                                        <img src="images/svg/Vector (12).svg" alt="" />
                                        <p>7 day rental</p>
                                    </div>
                                </div>
                                <div className="detailsInformList">
                                    <h6>Step 2.</h6>
                                    <div className="detailsInformListDate">
                                        <div>
                                            <p>Delivery Date</p>
                                            <input type="date" className="form-control" placeholder="Select date" />
                                        </div>
                                        <div>
                                            <p>Delivery Date</p>
                                            <input type="date" placeholder="s" />
                                        </div>
                                    </div>


                                    <p className="detailsInformListDateTextarea">* Tip: Rent 2nd outfit now and keep both outfits for 14 days in total.
                                    Upgrade to 3rd outfit and keep all 3
                                outfits for 21 days! Wear all outfits for as many times as you want.</p>
                                    <Button1 text="add to cart" />
                                </div>
                                <div className="detailsInformList">
                                    <p className="detailsInformListTextarea ">
                                        Gorgeous Finders Keepers red ruffle midi dress - is guaranteed to turn heads at any occasion. Uber flattering fit with adjustable tie back and beautiful ruffle detail.<br /><br />

                                Remember all our outfits are available to rent from 4 to 16 days and you don't have to worry about the cleaning - we do that for you!<br /><br />

                                Click here to browse other Midi Dresses.<br /><br />

                                Renting with Hirestreet is easy‚ Simply choose your outfit, select your rental period and checkout to reserve your item. Once you have received your outfit, wear & share your look as much as you like until your return date.
                            </p>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="styleBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <SiteHeadline text="Recommended For You" />
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="styleBtn">
                                <Button2 text="ALL CATALOG" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Slider2 id="multiCarousel2" a="#multiCarousel2" />
                    </div>

                    <div className="row">
                        <div className="col-12 btnWidth">
                            <Button2 text="All CATALOG" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="reviewBlock">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <SiteHeadline text="Reviews" />
                        </div>
                        <div className="col-6">
                            <div className="styleBtn">
                                <Button2 to="/feedback"text="Write a Review" />
                            </div>
                        </div>
                    </div>

                    <div className="reviewItem">
                        <div className="row">
                            <div className="col-12 col-sm-12  col-lg-3 ">
                                <div className="reviewInform">
                                    <div className="reviewImg">
                                        <img src="images/svg/Vectorrr.png" alt="" />
                                    </div>
                                    <div className="reviewText">
                                        <h5>Alice</h5>
                                        <p>Luxemburg</p>
                                        <div className="stars">
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-9">
                                <div className="reviewCard">
                                    <ul className="reviewList">
                                        <li>Your height (in feet)?  5.7</li>
                                        <li>About the fit True to size</li>
                                        <li>About your curves  Curvey</li>
                                    </ul>
                                    <p><span>Wedding guest dress</span> So many compliments and the material was amazing quality, highly recommend.</p>
                                </div>
                            </div>

                        </div>
                        <hr />
                    </div>
                    <div className="reviewItem">
                        <div className="row">
                            <div className="col-12 col-sm-12  col-lg-3 ">
                                <div className="reviewInform ">
                                    <div className="reviewImg">
                                        <img src="images/svg/Vectorrr.png" alt="" />
                                    </div>
                                    <div className="reviewText">
                                        <h5>Alice</h5>
                                        <p>Luxemburg</p>
                                        <div className="stars">
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                            <i className="far fa-star ">
                                                <i className="fas fa-star "></i>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-9">
                                <div className="reviewCard">
                                    <ul className="reviewList">
                                        <li>Your height (in feet)?  5.7</li>
                                        <li>About the fit True to size</li>
                                        <li>About your curves  Curvey</li>
                                    </ul>
                                    <p><span>Wedding guest dress</span> So many compliments and the material was amazing quality, highly recommend.</p>
                                </div>
                            </div>

                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="stars" id="stars">
                                <i className="far fa-star ">
                                    <i className="fas fa-star "></i>
                                </i>
                                <i className="far fa-star ">
                                    <i className="fas fa-star "></i>
                                </i>
                                <i className="far fa-star ">
                                    <i className="fas fa-star "></i>
                                </i>
                                <i className="far fa-star ">
                                    <i className="fas fa-star "></i>
                                </i>
                                <i className="far fa-star ">
                                    <i className="fas fa-star "></i>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default DetailsPage