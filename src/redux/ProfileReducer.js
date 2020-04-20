import { stopSubmit } from "redux-form";
import { usersAPI } from "../../src/api/api";

const SETPROFILE_AC = "SETPROFILE_AC";
const SETPHOTOSUCCESS_AC = "SETPHOTOSUCCESS_AC";
const SETSTATUS_AC = "SetStatus";
const SET_GLOBAL_ERROR = "SET_GLOBAL_ERROR";

let initialState = {
  profile: null,
  status: null,
  globalError: null,
};

//Reducer
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETSTATUS_AC: {
  
      return { ...state, status: action.status };
    }
    case SETPROFILE_AC: {
      return { ...state, profile: action.profileData };
    }
    case SETPHOTOSUCCESS_AC: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }
   
    case SET_GLOBAL_ERROR: {
      return { ...state, globalError: action.globalError };
    }
    default:
      return state;
  }
};

//ActionCreator
export const setStatus = (status) => ({ type: SETSTATUS_AC, status });
export const setProfileInform = (profileData) => ({
  type: SETPROFILE_AC,
  profileData,
});
export const setPhotoSuccess = (photos) => ({
  type: SETPHOTOSUCCESS_AC,
  photos,
});
export const setGlobalError = (globalError) => ({
  type: SET_GLOBAL_ERROR,
  globalError,
});

//ThunkCreator
export const getStatusThunkCreator = (user_id) => async (dispatch) => {
  let data = await usersAPI.getStatus(user_id);
  dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  try {
    let response = await usersAPI.updateStatus(status);
    if (response.resultCode === 0) {
      dispatch(setStatus(status));
    } else {
      dispatch(setGlobalError(response.messages[0]));
      const timer=setTimeout(()=>{
        dispatch(setGlobalError(null));
      },5000)
      return ()=>clearTimeout(timer);
    
    }
  } catch (error) {
    dispatch(setGlobalError(error));
    const timer = setTimeout(() => {
      dispatch(setGlobalError(null));
    }, 3000);
    return () => clearTimeout(timer);
  }
};

export const getProfileThunk = (user_id) => async (dispatch) => {
  try {
    let response = await usersAPI.getProfileInform(user_id);
    dispatch(setProfileInform(response.data));
  } catch (error) {
    dispatch(setGlobalError(error));
    const timer = setTimeout(() => {
      dispatch(setGlobalError(null));
    }, 3000);
    return () => clearTimeout(timer);
  }
};
export const saveProfile = (data) => async (dispatch) => {
  try {
    let response = await usersAPI.saveProfile(data);
    if (response.data.resultCode === 0) {
      dispatch(setProfileInform(data));
    } else {
      let errorMessage =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "someError";
      dispatch(stopSubmit("edit-profile", { _error: errorMessage }));
      return Promise.reject(errorMessage);
    }
  } catch (error) {
    dispatch(setGlobalError(error));
    const timer = setTimeout(() => {
      dispatch(setGlobalError(null));
    }, 3000);
    return () => clearTimeout(timer);
  }
};

export const savePhoto = (photo) => async (dispatch) => {
  try {
    let response = await usersAPI.savePhoto(photo);
    if (response.data.resultCode === 0) {
      dispatch(setPhotoSuccess(response.data.data.photos));
    }else{
      return Promise.reject(response.data.messages[0]);
    }
  } catch (error) {
    dispatch(setGlobalError(error));
    const timer = setTimeout(() => {
      dispatch(setGlobalError(null));
    }, 3000);
    return () => clearTimeout(timer);
  }
};
export default ProfileReducer;
