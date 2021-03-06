import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";
import authSaga from "./authSaga";

/*添加对action的监听 */
export default function* rootSaga() {
  yield all([fork(userSaga), fork(authSaga)]);
}
