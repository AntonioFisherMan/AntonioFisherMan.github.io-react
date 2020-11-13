import React from 'react'
import "./SignPage.css"
import HeaderBottom from '../../components/HeaderBottom/HeaderBottom'
import MyButton from '../../components/SiteButton/MyButton'
import { SiteHeadline } from '../../components/Typography/SiteHeadline'
import { Redirect } from 'react-router-dom'
import Login from '../../components/Forms/Login/Login'
import Register from '../../components/Forms/Register/Register'
import { connect } from 'react-redux'

import FacebookLogin from '../../components/Forms/FacebookGoogle/Facebook'
import GoogleLogin from '../../components/Forms/FacebookGoogle/Google'
import { H6 } from '../../components/Typography/H6'

class SignPage extends React.Component {
    render() {
        if (this.props.isAuth) {
            return <Redirect to="/orders" />
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

                                <H6 text="Not a member? Sign Up" />
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
