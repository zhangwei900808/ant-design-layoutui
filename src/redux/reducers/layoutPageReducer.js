import { handleActions } from "redux-actions";
import { layoutPageTypes } from "../actions/layoutPageAction";

const initState = {
  index: "1",
  subIndex: "",
  collapsed: false
};

const layoutPageReducer = handleActions(
  {
    [layoutPageTypes.SAVE_MENU_INDEX]: (state, action) => {
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
    },
    [layoutPageTypes.SAVE_MENU_COLLAPSED]: (state, action) => {
      const { collapsed } = action.payload;
      return Object.assign({}, state, {
        collapsed
      });
    }
  },
  initState
);

export default layoutPageReducer;
