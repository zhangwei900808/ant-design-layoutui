import { createActions } from "redux-actions";

export const menuTypes = {
  SAVE_MENU_INDEX: "SAVE_MENU_INDEX"
};

export default createActions({
  SAVE_MENU_INDEX: keyPath => ({ keyPath })
});
