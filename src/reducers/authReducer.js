import { SocialAPI } from "../api/api";
// Action Types
const SET_LOGIN = "set-login";

const initState = {
  userId: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

// Action Creator
export const setLoginAC = (users) => ({ type: SET_LOGIN, payload: users });

// Thunk Creator
export const setLoginThunk = (email, password) => {
  return (dispatch) => {
    SocialAPI.setLogin(email, password)
    .then((res) => {
      dispatch(setLoginAC(res.data.data.userId));
    })
  };
};
export default authReducer;
