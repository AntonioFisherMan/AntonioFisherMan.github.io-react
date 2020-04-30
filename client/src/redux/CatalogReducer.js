import { testAPI } from "../api/api";

const GET_GOODS_AC = "GET_GOODS_AC";
const GET_GOODBYID_AC = "GET_GOODBYID_AC";
const REMOVE_GOODBYID_AC="REMOVE_GOODBYID_AC"
let initialState = {
  goods: [],
  goodItem:[],
};

const CatalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GOODS_AC:
      debugger
      return { ...state, goods: [...action.dataGoods] };
    case GET_GOODBYID_AC:
      debugger
      return { ...state, goodItem:[action.goodItem]};
    case REMOVE_GOODBYID_AC:
      return{...state,goodItem:null}
    default:
      return state;
  }
};
const getGoods = (dataGoods) => ({ type: GET_GOODS_AC, dataGoods });
const getGood = (goodItem) => ({ type: GET_GOODBYID_AC, goodItem });
export const removeGood=()=>({type:REMOVE_GOODBYID_AC});


export const getGoodsThunk = () => async (dispatch) => {
  let response = await testAPI.getGoods();
  dispatch(getGoods(response));
};

export const getGoodsThunkById = (id) => async (dispatch) => {
  let response = await testAPI.getGood(id);
  debugger
   //var a=response.data.good.goods=response.data.review;
   //good.reviews=review;
   var data =response.data.data.good;
    data.reviews=response.data.data.review;
  dispatch(getGood(data));
};
export default CatalogReducer;
