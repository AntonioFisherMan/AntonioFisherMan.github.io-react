import React from 'react'
import { ReduxLoginForm } from './LoginForm'
import {login} from '../.././../redux/AuthReducer'
import {connect} from 'react-redux'


class Login extends React.Component{
    onSubmit = (formData) => {
       this.props.login( formData.email, formData.password)
    }
 render(){
     return(
         <ReduxLoginForm onSubmit={this.onSubmit} errors={this.props.errors} />
     )
 }
}


let mapStateToProps=(state)=>{
    debugger
    return{
        errors:state.errors
    }
}
export default connect(mapStateToProps,{login})(Login)
