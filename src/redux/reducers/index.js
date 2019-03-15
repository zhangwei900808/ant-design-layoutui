import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
// import visibilityFilter from './VisibilityFilter';
// import todoReducer from "./todoReducer";

export default history =>
  combineReducers({
    router: connectRouter(history)
    // todos: todoReducer
  });
