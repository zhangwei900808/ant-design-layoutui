import { handleActions } from "redux-actions";
import { userTypes } from "../actions/userAction";

const initState = {
  userList: []
};

const userReducer = handleActions(
  {
    [userTypes.GET_USER_LIST]: (state, action) => {
      return {
        ...state
      };
    },
    [userTypes.GET_USER_LIST_SUCCESS]: (state, action) => {
      return {
        ...state,
        userList: action.response
      };
    }
  },
  initState
);

export default userReducer;
