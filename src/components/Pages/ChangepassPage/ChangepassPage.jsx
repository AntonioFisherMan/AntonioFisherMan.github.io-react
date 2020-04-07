import React from 'react'
import styles from './ChangepassPage.module.css'
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Sidebar from '../../Sidebar/Sidebar'
import Button3 from '../../SiteButtons/Button3/Button3'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
const ChangepassPage=()=>{
    return(
        <div>
       <HeaderBottom/>
      
               
          

        <section className="changePass">
            <div className="container">
            <div className="row">
                    <div className="col-12">
                        <SiteHeadline text="Profile"/>
                    </div>
                </div>
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
                    <div className="col-12 linkBtn">
                        <Button3 link="/catalog"text="Return to catalogue"/>
                    </div>
                </div>
</div>
</section>

        </div>
    )
}

export default ChangepassPage
