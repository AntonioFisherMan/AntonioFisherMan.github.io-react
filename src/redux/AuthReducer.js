import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  password: null,
  isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

const SetAuthUserData = (data, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  data,
  isAuth,
});

export const getAuthThunkCreator = () => async (dispatch) => {
  let response = await authAPI.getAuth();
  if (response.data.resultCode === 0) {
    dispatch(SetAuthUserData(response.data.data, true));
  } else {
    alert(response.data.messages);
  }
};

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
  let response= await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) dispatch(getAuthThunkCreator());
    else {
      let errorMessage =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "some error";
      dispatch(stopSubmit("login", { _error: errorMessage }));
    }
};
export const logoutThunk = () => async(dispatch) => {
  let response = await authAPI.logout()
  if (response.data.resultCode === 0) dispatch(SetAuthUserData(null, false));
};

export default AuthReducer;
