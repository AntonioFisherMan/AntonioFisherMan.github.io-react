import React from 'react'
import SignPage from './SignPage'
import {connect} from 'react-redux'
import {loginThunk} from '../../../redux/AuthReducer'
class SignPageContainer extends React.Component{
render(){
    return(
        <SignPage login={this.props.loginThunk} isAuth={this.props.isAuth}/>
    )
}
}

const mapStateToProps=(state)=>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{loginThunk})(SignPageContainer)