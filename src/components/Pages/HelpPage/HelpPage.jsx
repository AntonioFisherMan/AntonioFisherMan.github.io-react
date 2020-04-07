import React from 'react'
import styles from './HelpPage.module.css'
import {Link} from 'react-router-dom'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Button3 from '../../SiteButtons/Button3/Button3'

const HelpPage=()=>{
    return(
        <div>
        <HeaderBottom/>
        
               
           
        <section className="helpBlock">
            <div className="container">
            <div className="row">
                    <div className="col-12">
                       <SiteHeadline text="Help & Contact"/>
                    </div>
                </div>
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
                     <Button3 link="/catalog" text="Return to catalogue"/>
                    </div>
                </div>
            </div>
           
        </section>
        </div>
    )
}

export default HelpPage