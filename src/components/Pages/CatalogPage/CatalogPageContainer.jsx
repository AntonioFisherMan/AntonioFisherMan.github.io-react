import React from 'react'
import {connect} from 'react-redux'
import CatalogPage from './CatalogPage'
import {} from '../../../redux/UsersReducer'
import Preloader from '../../common/Preloader'
import  {WithAuthRedirect}  from '../../../hoc/WithAuthRedirect'
import { compose } from 'redux'



class CatalogPageContainer extends React.Component{
  
  render(){
      return(
        <>
        <CatalogPage {...this.props}
        />
        </>
      )
  }
}
let mapStateToProps=(state)=>{
    return{
     goods:state.goods.goods,
    }
}


export default  compose(
  WithAuthRedirect,
  connect(mapStateToProps)
)(CatalogPageContainer)

