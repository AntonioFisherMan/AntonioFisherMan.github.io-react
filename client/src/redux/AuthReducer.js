
import {returnErrors,clearErrors} from './ErrorReducer'
import { testAPI } from "../api/api";

 const USER_LOADING="USER_LOADING"
const USER_LOADED="USER_LOADED"
const AUTH_ERROR="AUTH_ERROR"
const LOGIN_SUCCESS="LOGIN_SUCCESS"
const LOGIN_FAIL="LOGIN_FAIL"
 const LOGOUT_SUCCESS="LOGOUT_SUCCESS"
const REGISTER_SUCCESS="REGISTER_SUCCESS"
const REGISTER_FAIL="REGISTER_FAIL"



const initialState = {
  token: localStorage.getItem("token")||"",
  isAuth: null,
  isLoading: false,
  user:null,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return { ...state, isLoading: true };
    case USER_LOADED:
      return { ...state, isLoading: false, isAuth: true, user: action.payload };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token',action.payload.token)
      return { ...state, ...action.payload, isAuth: true, isLoading: false };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOGOUT_SUCCESS:
   localStorage.removeItem('token')
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
};

export const userLoad=(payload)=>({type:USER_LOADED,payload})


export const getAuth=()=>async (dispatch,getState)=>{
  try {
    const token=getState().auth.token;
    debugger
     let response=await testAPI.getAuth(token)
      dispatch(userLoad(response.data))
  } catch (error) {
    dispatch({type:AUTH_ERROR})
  }
}
export const login = (email,password) => async(dispatch) => {
  dispatch({type:USER_LOADING})
  testAPI.login(email,password).then(response=>{
    dispatch(userLoad(response.data.user))
    dispatch({type:LOGIN_SUCCESS,payload:response.data})
    dispatch(clearErrors(null,null,null))
  }).catch(err=>{
    dispatch(returnErrors(err.response.data,err.response.status,'LOGIN_FAIL'))
    dispatch({type:LOGIN_FAIL})
  })
};

export const register=(name,email,password)=>dispatch=>{
  testAPI.register(name,email,password).then(response=>{
    dispatch({type:REGISTER_SUCCESS,payload:response.data})
  }).catch(err=>{
      dispatch(returnErrors(err.response.data,err.response.status,'REGISTER_FAIL'))
       dispatch({type:REGISTER_FAIL})
  })
}

export const logout=()=>({type:LOGOUT_SUCCESS})

export default AuthReducer;
