import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./userReducer";
import layoutPageReducer from "./layoutPageReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    userReducer,
    layoutPageReducer
  });
