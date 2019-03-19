import { handleActions } from "redux-actions";
import { menuTypes } from "../actions/menuAction";

const initState = {
  index: "1",
  subIndex: ""
};

const menuReducer = handleActions(
  {
    [menuTypes.SAVE_MENU_INDEX]: (state, action) => {
      console.log("aciton=", action);

      const { keyPath } = action.payload;
      let index = keyPath[0];
      let subIndex = null;
      if (keyPath.length === 2) {
        subIndex = keyPath[1];
      }
      return {
        ...state,
        index,
        subIndex
      };
    }
  },
  initState
);

export default menuReducer;
