import { createActions } from "redux-actions";
export let nextTodoId = 0;

/**在这里约定user 的action type */
const GET_USER_LIST = "GET_USER_LIST";
const GET_USER_LIST_SUCCESS = "GET_USER_LIST_SUCCESS";

export const userTypes = {
  GET_USER_LIST,
  GET_USER_LIST_SUCCESS
};

export default createActions({
  GET_USER_LIST: () => {}
});
