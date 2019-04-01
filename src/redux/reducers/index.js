import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./userReducer";
import sideMenuReducer from "./sideMenuReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    userReducer,
    sideMenuReducer
  });
