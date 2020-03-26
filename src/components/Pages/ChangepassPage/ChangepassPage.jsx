import React from 'react'
import styles from './ChangepassPage.module.css'
import {Link} from 'react-router-dom'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'

const ChangepassPage=()=>{
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

        <section className="changePass">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-2 col-md-3"></div>
                    <div className="col-12  col-md-5 ">
                        <form className="changePass__form">
                            <h5 className="changePass__headline">Change Password</h5>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your old password"
                                    required autofocus/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Your new password"
                                    required/>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Repeat new password"
                                    required/>
                            </div>
                            <div className="changePass__formBtn">
                                <input type="submit"  id="sign__formBtn" value="SAVE" style={{width: '227px', marginTop: '45px'}}/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex form__returnText" style={{marginTop: '51px', marginBottom: '52px'}}>
                            <i className="carousel-control-prev-icon fas fa-chevron-left"  aria-hidden="true"></i>
                            <p >Return to cart</p>
                        </div>
                    </div>
                </div>
</div>
</section>

        </div>
    )
}

export default ChangepassPage
