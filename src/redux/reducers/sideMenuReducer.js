import { handleActions } from "redux-actions";
import { sideMenuTypes } from "../actions/sideMenuAction";

const initState = {
  index: "1",
  subIndex: ""
};

const sideMenuReducer = handleActions(
  {
    [sideMenuTypes.SAVE_SIDE_MENU_INDEX]: (state, action) => {
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

export default sideMenuReducer;
