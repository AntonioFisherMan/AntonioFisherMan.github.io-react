import React from 'react'
import GoogleLoginBtn from 'react-google-login'
import './FacebookGoogle.css'
import { googleAuth } from '../../../redux/reducers/AuthReducer'
import { connect } from 'react-redux'
import { Box } from '@material-ui/core'

const GoogleLogin = (props) => {

    const responseGoogle = (response) => {
        if (!response.error) {
            props.googleAuth(response.tokenId)
        }

    }

    return (
        <GoogleLoginBtn
            clientId="2922402030-v5835l3tj0fftegkba8bs7425le4of8h.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={(res) => responseGoogle(res)}
            onFailure={(res) => responseGoogle(res)}
            render={renderProps => (
                <Box className="googleIconBlock">
                    <img src="images/svg/Vector (23).svg" onClick={renderProps.onClick} disabled={renderProps.disabled} alt="" className="googleIcon" />
                </Box>
            )}
        />
    )

}

export default connect(null, { googleAuth })(GoogleLogin)