import { testAPI } from "../api/api";

const GET_GOODS_AC = "GET_GOODS_AC";
const GET_GOODBYID_AC = "GET_GOODBYID_AC";
const REMOVE_GOODBYID_AC = "REMOVE_GOODBYID_AC";
const CHANGE_PAGE_SIZE_GOODS = "CHANGE_PAGE_SIZE_GOODS";
const CHANGE_PAGE_NUMBER_GOODS = "CHANGE_PAGE_NUMBER_GOODS";
const CHANGE_SORT_BY="CHANGE_SORT_BY";
const CHANGE_FILTER="CHANGE_FILTER";
const ClEAR_GOODS_AC="ClEAR_GOODS_AC"

let initialState = {
  goods: [],
  filterBy:'Рекомендации',
  pageSize: 3,
  totalCount: 0,
  pageNumber: 1,
  goodItem: [],
};

const CatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS_AC:
      return { ...state, goods: [...action.dataGoods.goods], totalCount: action.dataGoods.totalCount };
    case GET_GOODBYID_AC:
      return { ...state, goodItem: [action.goodItem] };
    case REMOVE_GOODBYID_AC:
      return { ...state, goodItem: null }
      case ClEAR_GOODS_AC:
        return initialState
    case CHANGE_PAGE_SIZE_GOODS:
      return { ...state, pageSize: action.pageSize }
    case CHANGE_PAGE_NUMBER_GOODS:
      return { ...state, pageNumber: action.pageNumber }
    case CHANGE_SORT_BY:
      return{...state,filterBy:action.filterBy}
    case CHANGE_FILTER:
      debugger
      return{...state,goods:state.goods.filter(g=>g.style==action.data.style&&g.color==action.data.color&&g.size==action.data.size)}
    default:
      return state;
  }
};

export const ClearGoods=()=>({type:ClEAR_GOODS_AC})
export const changePageSize = (pageSize) => ({ type: CHANGE_PAGE_SIZE_GOODS, pageSize })
export const changePageNumber = (pageNumber) => ({type:CHANGE_PAGE_NUMBER_GOODS, pageNumber })
export const changeSortBy=(filterBy)=>({type:CHANGE_SORT_BY,filterBy});
export const changeFilter=(data)=>({type:CHANGE_FILTER, data})


 const getGoods = (dataGoods) => ({ type: GET_GOODS_AC, dataGoods });
const getGood = (goodItem) => ({ type: GET_GOODBYID_AC, goodItem });
export const removeGood = () => ({type: REMOVE_GOODBYID_AC});


export const getGoodsThunk = (pageNumber, pageSize) => async (dispatch) => {
  let response = await testAPI.getGoods(pageNumber, pageSize);
  dispatch(changePageNumber(pageNumber))
  dispatch(changePageSize(pageSize))
  dispatch(getGoods(response));
};
export const getGoodsForSlider= () => async (dispatch) => {
  let response = await testAPI.getGoods()
  dispatch(getGoods(response));
};
export const getGoodsThunkById = (id) => async (dispatch) => {
  let response = await testAPI.getGood(id);
  var data = response.data.data.good;
  data.reviews = response.data.data.review;
  dispatch(getGood(data));
};


export default CatalogReducer;
