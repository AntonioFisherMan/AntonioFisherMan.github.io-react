import React from 'react'
import FacebookLoginBtn from 'react-facebook-login'
import './FacebookGoogle.css'
import { connect } from 'react-redux'
import { facebookAuth } from '../../../redux/reducers/AuthReducer'

class FacebookLogin extends React.Component {
    responseFacebook = (response) => {
        this.props.facebookAuth(response.accessToken, response.userID)
    }
    render() {

        return (
            <FacebookLoginBtn
                appId="168317654422864"
                callback={this.responseFacebook}
                cssClass="form-control facebookBtn"
                icon="fab fa-facebook-square facebookIcon"
                textButton=""
            />
        )
    }
}


export default connect(null, { facebookAuth })(FacebookLogin)

