import React from 'react'
import styles from './HelpPage.module.css'
import {Link} from 'react-router-dom'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'

const HelpPage=()=>{
    return(
        <div>
        <HeaderBottom/>
        <section className="bag__headline">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card__headline">
                            <p style={{marginTop: '35px !important'}}>Help & Contact</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="helpBlock">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-12 col-md-7">
                        <p className="helpBlock__text">Your question</p>
                        <textarea className="form-control" placeholder="text..."/>
                        <input type="submit" id="sign__formBtn" value="Send" style={{marginTop:'50px'}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                      <div className="d-flex orders__return" style={{marginTop:'51px' ,width:'227px'}}>
                          <i className="carousel-control-prev-icon fas fa-chevron-left"  aria-hidden="true"></i>
                          <p>Return to catalogue</p>
                      </div>   
                    </div>
                </div>
            </div>
           
        </section>
        </div>
    )
}

export default HelpPage