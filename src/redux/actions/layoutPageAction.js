import { createActions } from "redux-actions";

export const layoutPageTypes = {
  SAVE_MENU_INDEX: "SAVE_MENU_INDEX",
  SAVE_MENU_COLLAPSED: "SAVE_MENU_COLLAPSED"
};

export default createActions({
  [layoutPageTypes.SAVE_MENU_INDEX]: keyPath => ({ keyPath }),
  [layoutPageTypes.SAVE_MENU_COLLAPSED]: collapsed => ({ collapsed })
});
