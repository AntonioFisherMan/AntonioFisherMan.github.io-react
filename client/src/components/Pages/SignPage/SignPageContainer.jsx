import React from 'react'
import SignPage from './SignPage'
import {connect} from 'react-redux'
import {loginThunk,getCaptchaUrlThunk} from '../../../redux/AuthReducer'
class SignPageContainer extends React.Component{
render(){
    return(
        <SignPage captchaUrl={this.props.captchaUrl}login={this.props.loginThunk} isAuth={this.props.isAuth}/>
    )
}
}

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth,
    captchaUrl:state.auth.captchaUrl
})
export default connect(mapStateToProps,{loginThunk,getCaptchaUrlThunk})(SignPageContainer)