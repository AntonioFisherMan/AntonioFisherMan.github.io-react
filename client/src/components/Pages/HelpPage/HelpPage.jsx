import React from 'react'
import  './HelpPage.css'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import Button1 from '../../SiteButtons/Button1/Button1'
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
                    <div className="col-12 col-md-7 helpInform">
                        <p className="helpText">Your question</p>
                        <textarea className="form-control" placeholder="text..."/>
                        <Button1 text="Send"/>
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