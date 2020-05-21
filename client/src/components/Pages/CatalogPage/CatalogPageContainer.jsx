import React from 'react'
import { connect } from 'react-redux'
import CatalogPage from './CatalogPage'
import { compose } from 'redux'
import { getGoodsThunk, changeSortBy,changeFilter, getGoodsThunkById, changePageNumber,ClearGoods} from '../../../redux/CatalogReducer'
import { setProduct } from '../../../redux/CardReducer'
import { IsPopUpHook } from '../../../hoc/IsPopUpHook'
import { isPopUp } from '../../../redux/AppReducer'
import { orderBy } from 'lodash'


class CatalogPageContainer extends React.Component {
  componentWillUnmount(){
    this.props.ClearGoods();
  }
  componentDidMount() {
    const { pageNumber, pageSize } = this.props;
    this.props.getGoodsThunk(pageNumber, pageSize);
  }
  
  onPageChanged = (pageNumber) => {
    const { pageSize } = this.props;
    debugger
    this.props.getGoodsThunk(pageNumber, pageSize)
    this.props.changePageNumber(pageNumber)
  }
  changePageSize = (pageSize, pageNumber = 1) => {
    debugger
    this.props.getGoodsThunk(pageNumber, pageSize)
  }
  render() {
    return (
      <>
        <CatalogPage  {...this.props} onPageChanged={this.onPageChanged} changeSortBy={this.props.changeSortBy} changeFilter={this.props.changeFilter}changePageSize={this.changePageSize}
        />
      </>
    )
  }
}
const sortBy = (goods, filterBy) => {
  switch (filterBy) {
    case 'Рекомендации':
      return goods;
    case 'От дорогим к дешевым':
      debugger
      return orderBy(goods, 'price', 'desc');
    case 'От дешевых к дорогим':
      return orderBy(goods, 'price', 'asc')
    default:
      return goods;
  }
}
let mapStateToProps = (state) => {
  return {
    goods:sortBy(state.goods.goods,state.goods.filterBy),
    token: state.auth.token,
    items: state.card.items,
    pageSize: state.goods.pageSize,
    pageNumber: state.goods.pageNumber,
    totalCount: state.goods.totalCount
  }
}

export default compose(
  IsPopUpHook,
  connect(mapStateToProps, { getGoodsThunk, getGoodsThunkById, changePageNumber, isPopUp, setProduct, changeSortBy,changeFilter,ClearGoods })
)(CatalogPageContainer)

