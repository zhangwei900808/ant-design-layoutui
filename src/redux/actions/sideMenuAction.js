import { createActions } from "redux-actions";

export const sideMenuTypes = {
  SAVE_SIDE_MENU_INDEX: "SAVE_SIDE_MENU_INDEX"
};

export default createActions({
  [sideMenuTypes.SAVE_SIDE_MENU_INDEX]: keyPath => ({ keyPath })
});
