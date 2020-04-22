import React from 'react'
import {connect} from 'react-redux'
import CatalogPage from './CatalogPage'
import  {WithAuthRedirect}  from '../../../hoc/WithAuthRedirect'
import { compose } from 'redux'
import {getGoodsThunk} from '../../../redux/CatalogReducer'
import {IsPopUpHook } from '../../../hoc/IsPopUpHook'
import {isPopUp} from '../../../redux/AppReducer'



class CatalogPageContainer extends React.Component{
  componentDidMount(){
    this.props.getGoodsThunk();
  }
  render(){
      return(
        <>
        <CatalogPage  {...this.props}
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
  IsPopUpHook,
  connect(mapStateToProps,{getGoodsThunk,isPopUp})
)(CatalogPageContainer)

