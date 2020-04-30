import React from 'react'
import {connect} from 'react-redux'
import CatalogPage from './CatalogPage'
import  {WithAuthRedirect}  from '../../../hoc/WithAuthRedirect'
import { compose } from 'redux'
import {getGoodsThunk,getGoodsThunkById} from '../../../redux/CatalogReducer'
import {setProduct} from '../../../redux/CardReducer'
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
     token:state.auth.token,
     items:state.card.items
    }
}

export default  compose(
  IsPopUpHook,
  connect(mapStateToProps,{getGoodsThunk,getGoodsThunkById,isPopUp,setProduct})
)(CatalogPageContainer)

