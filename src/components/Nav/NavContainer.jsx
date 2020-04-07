import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {logoutThunk} from '../../redux/AuthReducer'
import Nav from './Nav'



class NavContainer extends React.Component{
   
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


export default connect(mapStateToProps,{logoutThunk})(NavContainer)





