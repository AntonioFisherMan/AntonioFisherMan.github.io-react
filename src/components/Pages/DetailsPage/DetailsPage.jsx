import React from 'react'
import styles from './DetailsPage.module.css'
import {Link} from 'react-router-dom'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Slider2 from '../../Slider/Slider2'

const DetailsPage=()=>{
    return(
        <div>
 <HeaderBottom/>
        <section className="cardBlock">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card__headline">
                            <p>Sussex Copper Foil Maxi dress</p>
                        </div>
                    </div>    
                </div>
                <div className="row">
                    <div className="col-2 col-sm-12 col-lg-2">
                    <div id="multiCarousel_3" className="carousel slide w-100" data-ride="carousel">
                <div className="carousel-inner-2 w-100" role="listbox">
                    <div className="carousel-item active">
            
                            <img className="carousel__img" src="images/photo4.png" alt=""/>
                        
                    </div>
                    <div className="carousel-item">
                      
                            <img className="carousel__img" src="images/photo2.png" alt=""/>
                     
                    </div>
                    <div className=" carousel-item ">
                     
                            <img className="carousel__img" src="images/photo5.png" alt=""/>
                    </div>
                    <div className="carousel-item ">
                            <img className="carousel__img" src="images/photo6.png" alt=""/>
                    </div>
                    <div className="carousel-item ">
        
                            <img className="carousel__img" src="images/photo5.png" alt=""/>
                    </div>
                    <div className="carousel-item">
              
                            <img className="carousel__img" src="images/photo4.png" alt=""/>
                      
                    </div>
                    <div className="carousel-item ">
                            <img className="carousel__img"src="images/photo2.png" alt=""/>
                    </div>
                </div>
                <Link  id="arrow-prev1" href="#multiCarousel_3" role="button" data-slide="prev">
                    <div className="arrow-1">
                        <i className="fas fa-chevron-up" aria-hidden="true"></i>
                        <span className="sr-only">Предыдущий</span>
                    </div>
                </Link>
                <Link  id="arrow-next1" href="#multiCarousel_3" role="button"
                    data-slide="next">
                    <div className="arrow-1">
                        <i className="fas fa-chevron-down" aria-hidden="true"></i>
                        <span className="sr-only">Cледующий</span>
                    </div>
                </Link>
            </div>
              
                </div>
                 <div className="col-12 col-sm-4 col-lg-4 d-flex justify-content-center">
                     <img className="cardBlock__photo" src="images/photo1.png" alt=""/>
                 </div>
                <div className="col-12 col-sm-8 col-lg-4">
                    <div className="cardBlock__inform">
                          <div className="cardBlock__informList">
                              <p className="cardBlock__informList-slogan" >maxi DRESS</p>
                              <p className="cardBlock__informList-text">A perfect flirty number for Balls and Black Tie.</p>
                              <div className="cardBlock__infromList-stars">
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
                              
                              <p className="cardBlock__informList-price-line">€65.55</p>
                              <p className="cardBlock__informList-price">€61.17</p>
                              <hr/>
                          </div>
                          <div className="cardBlock__informList">
                            <h6>Step 1.</h6>
                            <div className="dropdown show d-flex align-items-center">
                                <Link className="btn dropdown-toggle cardBlock__btn" href="#" role="button" id="dropdownMenuLink"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Choose your size
                                </Link>
                               
                                <div className="d-flex cardBlock__size">
                                    <img src="images/svg/Vector (11).svg" alt=""/>
                                    <p >size guide</p>
                                </div>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <Link className="dropdown-item" href="#">Action</Link>
                                    <Link className="dropdown-item" href="#">Another action</Link>
                                    <Link className="dropdown-item" href="#">Something else here</Link>
                                </div>
                            </div>
                            <p className="cardBlock__informList-rental">Rental Period *</p>
                            <div className="cardBlock__informList-rentalBlock">
                                <img src="images/svg/Vector (12).svg" alt=""/>
                                <p>7 day rental</p>
                            </div>
                        </div>
                        <div className="cardBlock__informList">
                            <h6>Step 2.</h6>
                            <div className="cardBlock__informList-date">
                                <div>
                                    <p>Delivery Date</p>
                                    <input type="date" className="form-control" placeholder="Select date"/>
                                </div>
                                <div>
                                    <p>Delivery Date</p>
                                    <input type="date" placeholder="s"/>
                                </div>
                            </div>
                            
                            
                            <p className="cardBlock__informList-textarea">* Tip: Rent 2nd outfit now and keep both outfits for 14 days in total. 
                                Upgrade to 3rd outfit and keep all 3
                                outfits for 21 days! Wear all outfits for as many times as you want.</p>
                                <div className="cardBlock__button">
                                    <button>ADD TO CART</button>
                                </div>
                        </div>
                        <div className="cardBlock__informList">
                            
                            <p className="cardBlock__informList-textarea">
                                Gorgeous Finders Keepers red ruffle midi dress - is guaranteed to turn heads at any occasion. Uber flattering fit with adjustable tie back and beautiful ruffle detail.<br></br>

                                Remember all our outfits are available to rent from 4 to 16 days and you don't have to worry about the cleaning - we do that for you!<br></br>
                                
                                Click here to browse other Midi Dresses.<br></br>
                                
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
                    <div className="card__headline">
                        <p>Recommended For You</p>
                    </div>
                </div>
                <div className="col-6 ">
                    <div className="style__button ml-auto">
                        <button>All CATALOG</button>
                    </div>
                </div>
            </div>
            <div className="row">
           <Slider2 id="multiCarousel2" a="#multiCarousel2"/>/>
            </div>
                       
            <div className="row">
                <div className="col-12">
                    <div className="style__button mx-auto" style={{width:'100%'}}>
                        <button>All CATALOG</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
   <section className="reviewBlock">
    <div className="container">
    <div className="row">
        <div className="col-6">
            <div className="card__headline">
                <p>Reviews</p>
            </div>
        </div>
        <div className="col-6">
            <div className="card__button ml-auto">
                <button>Write a Review</button>
            </div>
        </div>
    </div>
   
        <div className="reviewBlock__item">
            <div className="row">
                <div className="col-12 col-sm-12  col-lg-3 ">
                 <div className="review__itemInform">
                    <div className="review__itemImg">
                        <img src="images/svg/Vectorrr.png" alt=""/>
                     </div>
                    <div className="review__itemText">
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
                 <div className="review__itemCard">
                     <ul className="review__itemList">
                         <li>Your height (in feet)?  5.7</li>
                         <li>About the fit True to size</li>
                         <li>About your curves  Curvey</li>
                     </ul>
                    <p><span>Wedding guest dress</span> So many compliments and the material was amazing quality, highly recommend.</p>
                 </div>
                </div> 
           
           </div>
           <hr/>
           </div>
           <div className="reviewBlock__item">
            <div className="row">
                <div className="col-12 col-sm-12  col-lg-3 ">
                 <div className="review__itemInform ">
                    <div className="review__itemImg">
                        <img src="images/svg/Vectorrr.png" alt=""/>
                     </div>
                    <div className="review__itemText">
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
                 <div className="review__itemCard">
                     <ul className="review__itemList">
                         <li>Your height (in feet)?  5.7</li>
                         <li>About the fit True to size</li>
                         <li>About your curves  Curvey</li>
                     </ul>
                    <p><span>Wedding guest dress</span> So many compliments and the material was amazing quality, highly recommend.</p>
                 </div>
                </div> 
           
           </div>
           <hr/>
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