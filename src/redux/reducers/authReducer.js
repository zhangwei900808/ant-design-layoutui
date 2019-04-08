import { handleActions } from "redux-actions";
import { authTypes } from "../actions/authAction";

const initState = {
  token: "",
  user: null
};

const authReducer = handleActions(
  {
    [authTypes.AUTH_SUCCESS]: (state, action) => {
      return Object.assign({}, state, {
        token: action.data.token,
        user: action.data.user
      });
    },
    [authTypes.SIGN_OUT]: (state, action) => {
      return Object.assign({}, state, {
        token: "",
        user: null
      });
    }
  },
  initState
);

export default authReducer;
