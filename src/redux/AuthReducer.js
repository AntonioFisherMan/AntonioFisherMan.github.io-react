import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_URL="SET_CAPTCHA_URL"

let initialState = {
  id: null,
  email: null,
  password: null,
  isAuth: false,
  captchaUrl:null
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
      };
      case SET_CAPTCHA_URL:
        return{...state,captchaUrl:action.captchaUrl}
    default:
      return state;
  }
};

const SetAuthUserData = (data, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  data,
  isAuth,
});
const SetCaptcha=(captchaUrl)=>({type:SET_CAPTCHA_URL,captchaUrl})


export const getAuthThunkCreator = () => async (dispatch) => {
  let response = await authAPI.getAuth();
  if (response.data.resultCode === 0) {
    dispatch(SetAuthUserData(response.data.data, true));
  } else {
    alert(response.data.messages);
  }
};

export const loginThunk = (email, password, rememberMe,captcha) => async (dispatch) => {
  debugger
  let response= await authAPI.login(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) dispatch(getAuthThunkCreator());
    else {
      if(response.data.resultCode===10)
      {
        dispatch(getCaptchaUrlThunk())
      }
      let errorMessage =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "some error";
      dispatch(stopSubmit("login", { _error: errorMessage }));
    }
};

export const getCaptchaUrlThunk=()=>async(dispatch)=>{
  let response=await securityAPI.getCaptchaUrl();
  dispatch(SetCaptcha(response.data.url));
}

export const logoutThunk = () => async(dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) dispatch(SetAuthUserData(null, false));
};

export default AuthReducer;
