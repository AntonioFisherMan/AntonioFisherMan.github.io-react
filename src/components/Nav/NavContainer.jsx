import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {SetAuthUserData} from '../Redux/AuthReducer'
import Nav from './Nav'


class NavContainer extends React.Component{
    componentDidMount(){
     axios.get("https://social-network.samuraijs.com/api/1.1/auth/me",{
         withCredentials:true
     })
     .then(response=>{
         debugger
         if(response.data.resultCode===0){
              this.props.SetAuthUserData(response.data.data);
         }
         else{
             alert(response.data.messages)
         }
         
     })
    }
  render(){
      return(
         <Nav {...this.props}/>
      )
  }
}

let mapStateToProps = (state) => {  
    return {
       isAuth:state.auth.isAuth,
       login:state.auth.login
    }
}
export default connect(mapStateToProps,{SetAuthUserData})(NavContainer)





