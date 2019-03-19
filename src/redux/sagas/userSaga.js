import { call, put, takeEvery } from "redux-saga/effects";
import { userTypes } from "../actions/userAction";
import Apis from "../apis";

function* fetchData(action) {
  try {
    const data = yield call(Apis.getUsers);

    // 创建redux action，相当于dispatch，这点千万要注意
    yield put({ type: userTypes.GET_USER_LIST_SUCCESS, response: data });
  } catch (ex) {
    console.log("error=", ex);
  }
}

export default function* watchUser() {
  yield takeEvery(userTypes.GET_USER_LIST, fetchData);
}
