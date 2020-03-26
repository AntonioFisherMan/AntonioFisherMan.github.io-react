import React from 'react'
import styles from './FeedbackPage.module.css'
import {Link} from 'react-router-dom'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'

const FeedbackPage=()=>{
    return(
        <div>
    <HeaderBottom/>
        <section className="bag__headline">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card__headline">
                            <p style={{marginTop: '35px !important'}}>Profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="feedbackBlock">
            <div className="container">
                <div className="returnBlock__inform">
                    <div>
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <Sidebar/>
                            </div>
                        </div>
                    </div>
                    <div className="feedbackBlock__list">
                    <div className="returnBlock__links">
                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                </div>
                                <div className="col-4">
                                    <p>Item</p>
                                </div>
                                <div className="col-5 d-flex justify-content-center">
                                    <p>Rate</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                        <div className="feedbackBlock__item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3">
                                        <img  className="feedbackBlock__itemImg" src="images/Mask-4.png" alt=""/>
                                    </div>
                                    <div className="col-5">
                                        <p className="bagCard__slogan">maxi DRESS</p>
                                        <div className="bagCard__list">
                                            <p>A perfect flirty number for Balls and Black Tie.</p>
                                        </div>
                                        <div className="bagCard__size d-flex">
                                            <p>Size: XS</p>
                                            <img  src="images/svg/Vector (11).svg" alt=""/>
                                        </div>
                                        <p className="bagCard__p">Rental period* : 7 days</p>
                                        <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                                        <p className="feedbackBlock__itemText">Show others how this outfit looks on you!
                                            <br/>
                                            Upload pictures here</p>


                                    </div>
                                    <div className="col-4">
                                        <div className="feedbackBlock__itemColumn2">
                                            <div className="stars">
                                                <i className="far fa-star stars__out">
                                                    <i className="fas fa-star stars__in" style={{width: '100%'}}></i>
                                                </i>
                                                <i className="far fa-star stars__out">
                                                    <i className="fas fa-star stars__in" style={{width: '100%'}}></i>
                                                </i>
                                                <i className="far fa-star stars__out">
                                                    <i className="fas fa-star stars__in" style={{width: '100%'}}></i>
                                                </i>
                                                <i className="far fa-star stars__out">
                                                    <i className="fas fa-star stars__in" style={{width: '100%'}}></i>
                                                </i>
                                                <i className="far fa-star stars__out">
                                                    <i className="fas fa-star stars__in" style={{width: '100%'}}></i>
                                                </i>
                                            </div>
                                            <div>
                                                <p className="feedbackBlock__itemGrey">Rate your rented outfit.<br/>
                                                    Let others know what you think!</p>
                                            </div>
                                            <p>Review</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-5">
                                <form action="" className="feedbackBlock__form">
                                    <div className="form-group">
                                        <input type="image" alt="" src="images/svg/Vector (25).svg" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="image" alt="" src="images/svg/Vector (25).svg" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="image" alt="" src="images/svg/Vector (25).svg" className="form-control"/>
                                    </div>
                                </form>
                            </div>
                            <div className="col-4 d-flex align-items flex-column">
                                <div className="feedbackBlock__form2">
                                    <textarea className="form-control" id="feedbackBlock__form2-textarea"/>
                                    <input className="ml-auto" type="submit" id="sign__formBtn" value="Send"/>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="row orders__item-active" >
                        <div className="col-3 returnBlock__item-active">
                            <p style={{minHeight:'250px !important'}}>Item</p>
                            <p style={{minHeight:'150px !important'}}>Rate</p>
                            
                        </div>
                        <div className="col-9  d-flex flex-column" style={{marginTop:'20px'}}>
                            <div className="d-flex" style={{minHeight:'250px !important'}}>
                                <div>
                                    <img  className="orders__photo" src="images/Mask-4.png" alt=""/>
                                </div>
                                <div>
                                    <p className="bagCard__slogan">maxi DRESS</p>
                                    <p>A perfect flirty number for Balls and Black Tie.</p>
                                    <div className="bagCard__size d-flex">
                                        <p>Size: XS</p>
                                        <img  src="images/svg/Vector (11).svg" alt=""/>
                                    </div>
                                    <p className="bagCard__p">Rental period* : 7 days</p>
                                    <p>Dates: Mar 17, 2020 - Mar 24, 2020 </p>
                                </div>
                            
                            </div>
                         
                                <div className="feedbackBlock__itemColumn2" style={{minHeight: '250px !important', display: 'flex', justifyVontent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                                    <div className="stars">
                                        <i className="far fa-star stars__out">
                                            <i className="fas fa-star stars__in" style={{width: '100%'}}></i>
                                        </i>
                                        <i className="far fa-star stars__out">
                                            <i className="fas fa-star stars__in" style={{width: '100%'}}></i>
                                        </i>
                                        <i className="far fa-star stars__out">
                                            <i className="fas fa-star stars__in" style={{width: '100%'}}></i>
                                        </i>
                                        <i className="far fa-star stars__out">
                                            <i className="fas fa-star stars__in" style={{width: '100%'}}></i>
                                        </i>
                                        <i className="far fa-star stars__out">
                                            <i className="fas fa-star stars__in" style={{width: '100%'}}></i>
                                        </i>
                                    </div>
                                    <div>
                                        <p className="feedbackBlock__itemGrey">Rate your rented outfit.<br/>
                                            Let others know what you think!</p>
                                    </div>
                                  
                                </div>

                         
                               
                            </div>
                     
                    </div>
                    <div className="row orders__item-active">
                    
                        <div className="col-12">
                            <form action="" style={{marginTop: '20px'}}>
                                <p style={{textAlign: 'center'}}>Review</p>
                                <div className="form-group">
                                    <input type="image" alt="" src="images/svg/Vector (25).svg" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input type="image" alt="" src="images/svg/Vector (25).svg" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input type="image" alt="" src="images/svg/Vector (25).svg" className="form-control"/>
                                </div>
                            </form>
                        </div>
                        <div className="col-12 d-flex align-items flex-column">
                            <div className="feedbackBlock__form2">
                                <textarea className="form-control" id="feedbackBlock__form2-textarea"/>
                                <input className="ml-auto" type="submit" id="sign__formBtn" value="Send"/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
        )
}

export default FeedbackPage