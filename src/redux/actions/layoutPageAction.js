import { createActions } from "redux-actions";

export const layoutPageTypes = {
  SAVE_MENU_INDEX: "SAVE_MENU_INDEX"
};

export default createActions({
  [layoutPageTypes.SAVE_MENU_INDEX]: keyPath => ({ keyPath })
});
