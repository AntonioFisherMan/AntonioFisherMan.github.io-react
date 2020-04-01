import React from 'react'
import styles from './SignPage.module.css'
import {Link} from 'react-router-dom'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'

const SignPage=(props)=>{
    return(
        <div>
   <HeaderBottom/>
    <section className="bag__headline">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card__headline">
                        <p style={{marginTop: '35px !important'}}>Sign-In</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="signBlock">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-7">
                    <form className="sign__form">
                        <h5 className="sign__formHeadline">log-in</h5>
                        <div className="form-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email adress"
                                required autofocus/>
                        </div>
                        <div>
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                                required/>
                        </div>
                      
                            <div className="custom-control custom-checkbox d-flex ">
                                <label className="d-flex align-items-center"><input type="checkbox" className="checkbox"/><span className="fake fake__sign" ></span><span className="check__text span">Remember Me<span>(Privacy
                                    Policy)</span></span></label>
                                <Link className="forgot__pass" to="/changepass">forgot password</Link>
                            </div>
                           
                    
                       
                    </form>
                    <div className="signBlock__return-btn">
                        <div className="d-flex form__returnText">
                            <i className="carousel-control-prev-icon fas fa-chevron-left"  aria-hidden="true"></i>
                            <Link to="/card">Return to cart</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="col-12 col-md-5">
                    <form className="sign__form ">
                        <h5 className="sign__formHeadline">Not a member? Sign Up</h5>
                        <div className="form-group">
                           
                                <input type="image" alt="" src="images/svg/Vector (22).svg" className="form-control " value="adas"placeholder="Facebook"
                               autofocus/>
                           
                            
                        </div>
                        <div>
                            <input type="image" alt="" src="images/svg/Vector (23).svg" className="form-control " value="adsa"placeholder="Google"/>
                        </div>
                       <div className="sign__formPopUpBlock">
                        <hr/>
                        <div className="sign__formPopUp">
                            <p>Or</p>
                        </div>
                        <hr/>
                       </div>
                        
                        <div className="form-group">
                            <input type="email" id="inputEmail" className="form-control" placeholder="Email"
                                required autofocus/>
                        </div>
                        <p className="sign__formGrey">By joining I agree to receive emails from DressItBox</p>
                        <input type="submit"  id="sign__formBtn" value="register"/>
                    </form>
                    <div className="signBlock__return-btn-active">
                        <div className="d-flex form__returnText">
                            <i className="carousel-control-prev-icon fas fa-chevron-left"  aria-hidden="true"></i>
                            <Link to="/card">Return to cart</Link>
                        </div>
                      
                    </div>
                  
                </div>
            </div>
        </div>
    </section>
        </div>
     
    )
}

export default SignPage