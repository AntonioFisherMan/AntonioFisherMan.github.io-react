import React from 'react'
import { ReduxRegisterForm } from './RegisterForm'
import {register} from '../.././../redux/AuthReducer'
import {connect} from 'react-redux'


class Register extends React.Component{
    onSubmit = (formData) => {
       this.props.register( formData.registerName,formData.registerEmail, formData.registerPassword)
    }
 render(){
     return(
         <ReduxRegisterForm onSubmit={this.onSubmit} errors={this.props.errors} />
     )
 }
}


let mapStateToProps=(state)=>{
    debugger
    return{
        errors:state.errors
    }
}
export default connect(mapStateToProps,{register})(Register)
