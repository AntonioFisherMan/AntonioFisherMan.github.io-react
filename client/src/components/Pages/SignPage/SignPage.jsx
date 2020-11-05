import React from 'react'
import "./SignPage.css"
import HeaderBottom from '../../HeaderBottom/HeaderBottom'
import MyButton from '../../SiteButton/MyButton'
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
                                    <MyButton href="/card" variant="text" text="Return to cart" />
                                </div>
                            </div>

                            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center flex-column" >
                                <h5 className="signHeadline">Not a member? Sign Up</h5>
                                <FacebookLogin />
                                <GoogleLogin />
                                <Register />
                                <div className="signReturnBtn-active">
                                    <div className="returnLink">
                                        <MyButton href="/card" text="Return to cart" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        )
    }

}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps, null)(SignPage)
