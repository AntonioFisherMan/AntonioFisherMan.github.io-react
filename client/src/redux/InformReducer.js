import { testAPI } from "../api/api";

const GET_INFORM_OF_USER = "GET_INFORM_OF_USER";

let initialState = {
  inform: null,
};

let InformReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFORM_OF_USER:
      return { ...state, inform: action.inform };
    default:
      return state;
  }
};

const addInform=(inform)=>({type:GET_INFORM_OF_USER,inform})


export const getInform=(id)=>dispatch=>{
  debugger
   testAPI.getInform(id).then(response=>{
       dispatch(addInform(response.data))
   })
}
export const updateInform=(inform)=>dispatch=>{
   testAPI.updateInform(inform).then(response=>{
       dispatch(addInform(response.data))
   })
}

export default InformReducer