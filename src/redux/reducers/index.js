import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./userReducer";
import menuReducer from "./menuReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    userReducer,
    menuReducer
  });
