import { usersAPI } from "../../src/api/api";

//HelperFunction
import { followUnfollowChange } from "../utils/helperFunctions/followUnfollowChange";
const FOLLOW_AC = "Follow";
const UN_FOLLOW_AC = "UnFollow";
const SETUSERS_AC = "SetUsers";
const SETPAGE_AC = "SetPage";
const SETTOTAL_AC = "SetTotalCount";
const SETFETCH_AC = "SetFetch";
const SETSTATUS_AC = "SetStatus";
const DELETEUSER_AC = "DeleteUser";

let initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  status: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_AC:
      return {
        ...state,
        users:followUnfollowChange(state.users,"id",action.user_id,{followed:true})
      };
    case UN_FOLLOW_AC:
      return {
        ...state,
        users:followUnfollowChange(state.users,"id",action.user_id,{followed:false})
      };
    case SETUSERS_AC: {
      return { ...state, users: [...action.users] };
    }
    case SETPAGE_AC: {
      return { ...state, currentPage: action.page_id };
    }
    case SETTOTAL_AC: {
      return { ...state, totalUsersCount: action.totalCount };
    }
    case SETFETCH_AC: {
      return { ...state, isFetching: action.isFetching };
    }
    case SETSTATUS_AC: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

//ACTION

export const follow = (user_id) => ({ type: FOLLOW_AC, user_id });
export const unfollow = (user_id) => ({ type: UN_FOLLOW_AC, user_id });
export const setUsers = (users) => ({ type: SETUSERS_AC, users });
export const setPage = (page_id) => ({ type: SETPAGE_AC, page_id });
export const setTotalCount = (totalCount) => ({
  type: SETTOTAL_AC,
  totalCount,
});
export const setFetch = (isFetching) => ({ type: SETFETCH_AC, isFetching });
export const setStatus = (status) => ({ type: SETSTATUS_AC, status });
export const deleteUser = (user_id) => ({ type: DELETEUSER_AC, user_id });

//THUNK
export const getUsersThunkCreator = (currentPage, pageSize) => async (dispatch) => {
  dispatch(setFetch(true));
  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setFetch(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalCount(data.totalCount));
};
export const getStatusThunkCreator = (user_id) => async (dispatch) => {
  let data = await usersAPI.getStatus(user_id);
  dispatch(setStatus(data));
};

export const updateStatus = (user_id) => async (dispatch) => {
  let data = await usersAPI.getStatus(user_id);
  if (data.resultCode === 0) {
    dispatch(setStatus(data.status));
  }
};
export default userReducer;
