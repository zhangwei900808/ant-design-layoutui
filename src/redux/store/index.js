import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
//createBrowserHistory
import { createHashHistory } from "history";
import createRootReducer from "../reducers";
import rootSaga from "../sagas";
{
  /* 解决github gh-pages发布必须以Hash浏览否则history模式就会报错问题，
          如果想使用history模式去掉下面的HashRouter即可 */
}
export const history = createHashHistory();
// create the router history middleware
const historyRouterMiddleware = routerMiddleware(history);
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// 组合middleware
const middleWares = [sagaMiddleware, historyRouterMiddleware, logger];

const persistConfig = {
  key: "root",
  storage
};

const persistReducers = persistReducer(persistConfig, createRootReducer(history));

export default function configureStore(preloadedState) {
  const store = createStore(persistReducers, preloadedState, compose(applyMiddleware(...middleWares)));
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { persistor, store };
}
