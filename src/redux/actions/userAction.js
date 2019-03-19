import { createActions } from "redux-actions";

export const userTypes = {
  GET_USER_LIST: "GET_USER_LIST",
  GET_USER_LIST_SUCCESS: "GET_USER_LIST_SUCCESS"
};

export default createActions({
  GET_USER_LIST: () => {}
});
