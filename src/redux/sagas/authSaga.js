import { call, put, takeLatest } from "redux-saga/effects";
import { push, replace } from "connected-react-router";
import { message } from "antd";
import authAction, { authTypes } from "../actions/authAction";
import { layoutPageTypes } from "../actions/layoutPageAction";
import apis from "../apis/1.0";
import { createHashHistory } from "history";
const history = createHashHistory();

function strokeItem(token) {
  localStorage.setItem("token", token);
}

function clearItem(name) {
  localStorage.removeItem(name);
}

function* signout(action) {
  // 清除token
  yield call(clearItem, "token");
  // 设置选中第一个菜单
  yield put({
    type: layoutPageTypes.SAVE_MENU_INDEX,
    payload: {
      keyPath: ["1"]
    }
  });
  yield put({
    type: layoutPageTypes.SAVE_MENU_COLLAPSED,
    payload: {
      collapsed: false
    }
  });

  //跳转到登录页面
  // hash 跳转 history.push("/login")
  // history 跳转 yield put(push('/login'))
  history.push("/login");
}

function* fetchData(action) {
  try {
    const res = yield call(apis.login, action.payload);

    if (res.success) {
      yield call(strokeItem, res.data.token);
      yield put({ type: authTypes.AUTH_SUCCESS, data: res.data });
      yield put(push("/"));
    }
  } catch (error) {
    message.info("用户名或密码错误");
    yield call(clearItem, "token");
  }
}

export default function* watchAuthRoot() {
  yield takeLatest(authTypes.AUTH_REQUEST, fetchData);
  yield takeLatest(authTypes.SIGN_OUT, signout);
}
