import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./userReducer";
import layoutPageReducer from "./layoutPageReducer";
import authReducer from "./authReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    userReducer,
    layoutPageReducer,
    authReducer
  });
