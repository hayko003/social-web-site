import { SocialAPI } from "../api/api";
// Action Types
const GET_ALL = "get-all";
const IS_FETCHING = "is-fetching";
const CHANGE_PAGE = "change-page";
const TOTAL_USER_COUNT = "total-user-count";

const initState = {
  users: [],
  isFetching: false,
  currentPage: 1,
  totalUsersCount: 0,
  totalUsersPageCount: 100,
};

const usersReducers = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        users: action.payload,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case TOTAL_USER_COUNT:
      return {
        ...state,
        totalUsersCount: action.payload,
      };
    default:
      return state;
  }
};

// Action Creator
export const getUsersAC = (users) => ({
  type: GET_ALL,
  payload: users,
});

const isFetchingAC = (bool) => ({
  type: IS_FETCHING,
  payload: bool,
});

export const changePageAC = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});

export const totalUsersCountAC = (totalCount) => ({
  type: TOTAL_USER_COUNT,
  payload: totalCount,
});

// Thunk Creator
export const getUsersThunk = (page = 1) => {
  return (dispatch) => {
    dispatch(isFetchingAC(true));
    SocialAPI.getAll(page).then((res) => {
      dispatch(totalUsersCountAC(res.data.totalCount))
      dispatch(getUsersAC(res.data.items));
      dispatch(isFetchingAC(false));
    });
  };
};
export default usersReducers;
