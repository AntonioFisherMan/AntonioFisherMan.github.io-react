import React from 'react'
import "./SignPage.css"
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import Button3 from '../../SiteButtons/Button3/Button3'
import SiteHeadline from '../../SiteHeadline/SiteHeadline'
import { Redirect } from 'react-router-dom'
import Login from '../../Forms/Login/Login'
import Register from '../../Forms/Register/Register'
import { connect } from 'react-redux'

import FacebookLogin from '../../Forms/FacebookGoogle/Facebook'
import GoogleLogin from '../../Forms/FacebookGoogle/Google'

class SignPage extends React.Component {
    render() {
        if (this.props.isAuth) {
            return <Redirect to="/" />
        }
        return (
            <>
                <HeaderBottom />
                <section className="signBlock">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <SiteHeadline text="Sign-In" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-7">
                                <Login />
                                <div className="signReturnBtn">
                                    <Button3 text="Return to cart" />
                                </div>
                            </div>

                            <div className="col-12 col-md-5">
                            <FacebookLogin/>
                              <GoogleLogin/>
                                <Register />
                                <div className="signReturnBtn-active">
                                    <Button3 link="/card" text="Return to cart" />
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </section>
            </>

        )
    }

}


function postData(type,userData){

}
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, null)(SignPage)
