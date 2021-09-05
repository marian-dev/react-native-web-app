import { SET_LOADER } from "./actions/ui";
import { API_SUCCESS, API_ERROR } from "./actions/api";
import { LOGOUT } from "./actions/auth";

export default (
  state = {
    isAuthUser: !!localStorage.getItem("user"),
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token"),
    isLoading: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case API_SUCCESS:
      //console.log(action);
      console.log(action.payload);
      if(action.payload.token != null) {
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
        return { ...state, isAuthUser: true, user: action.payload.user, token: action.payload.token };
      }
      return { ...state, cars: action.payload};
    case API_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADER:
      return { ...state, isLoading: action.payload };
    case LOGOUT:
      localStorage.removeItem("user");
      return { ...state, isAuthUser: false, user: {} };
    default:
      return state;
  }
};