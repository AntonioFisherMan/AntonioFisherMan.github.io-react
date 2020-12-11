import React from 'react'
import { connect } from 'react-redux'
import CatalogPage from './CatalogPage'
import { compose } from 'redux'
import { getGoodsThunk, removeFilterThunk, getGoodsThunkById, catalogActions } from '../../redux/reducers/CatalogReducer'
import { getFilterBy, getTotalGoods } from '../../redux/selectors/CatalogSelector'
import { reset } from 'redux-form';
import { CardItemType, GoodType } from '../../types/types'
import { AppStateType } from '../../redux/ReduxStore'
import { LoadingDataHOC } from '../../hoc/LoadingData'


class CatalogPageContainer extends React.Component<any> {

  componentWillUnmount() {
    this.props.clearGoods()
  }
  componentDidMount() {
    const { pageNumber, pageSize } = this.props;
    this.props.getGoodsThunk(pageNumber, pageSize, this.props.filter);
  }
  componentDidUpdate(prevProps: any) {
    const { pageNumber, pageSize } = this.props;
    if (prevProps.filter !== this.props.filter) {
      this.props.getGoodsThunk(pageNumber, pageSize, this.props.filter);
    }
  }
  onSubmit = (formData: object) => {
    let data = []
    for (let [key, value] of Object.entries(formData)) {
      if (value === true) data.push(key)
    }
    this.props.changeFilter(data)
  }
  onPageChanged = (pageNumber: number) => {
    const { pageSize } = this.props;
    this.props.getGoodsThunk(pageNumber, pageSize, this.props.filter)
    this.props.changePageNumber(pageNumber)
  }
  changePageSize = (pageSize: number, pageNumber = 1) => {
    debugger
    this.props.getGoodsThunk(pageNumber, pageSize, this.props.filter)
  }
  changeFilter = (filter: Array<string>) => {
    this.props.reset('filter')
    this.props.getGoodsThunk(this.props.pageNumber, this.props.pageSize, filter)
  }
  render() {
    return (
      <>
        <CatalogPage  {...this.props} onSubmit={this.onSubmit} onPageChanged={this.onPageChanged} changeFilter={this.changeFilter} removeFilter={this.props.removeFilterThunk} changePageSize={this.changePageSize}
        />
      </>
    )
  }
}

type MapStateToPropsType = {
  goods: Array<GoodType>,
  filterBy: string,
  filter: Array<string>,
  items: Array<CardItemType>,
  pageSize: number,
  pageNumber: number,
  totalCount: number
}

type MapDispatchToProps = {
  getGoodsThunk: (pageNumber: number, pageSize: number, filter: Array<string>) => void,
  getGoodsThunkById: (id: any) => void,
  removeFilterThunk: (filter: string) => void,
  reset: (filter: string) => void,
  clearGoods: () => void,
  changePageNumber: (pageNumber: number) => void
}

export type CatalogPropsType = MapStateToPropsType & MapDispatchToProps

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    goods: getTotalGoods(state),
    filterBy: getFilterBy(state),
    filter: state.goods.filter,
    items: state.card.items,
    pageSize: state.goods.pageSize,
    pageNumber: state.goods.pageNumber,
    totalCount: state.goods.totalCount
  }
}


export default compose(
  LoadingDataHOC,
  connect(mapStateToProps, { getGoodsThunk, getGoodsThunkById, removeFilterThunk, reset, ...catalogActions }))(CatalogPageContainer)

