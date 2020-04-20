import { testAPI } from "../api/api"

const GET_GOODS_AC="GET_GOODS_AC"
let initialState={
    goods:[]
}

const CatalogReducer=(state=initialState,action)=>{
    switch(action.type){
        case GET_GOODS_AC:
            return{...state,goods:[...action.dataGoods]}
        default: return state
    }
}
const getGoods=(dataGoods)=>({type:GET_GOODS_AC,dataGoods})


export const getGoodsThunk=()=>async(dispatch)=>{
    let response= await testAPI.getGoods()
        dispatch(getGoods(response))

}

export default CatalogReducer