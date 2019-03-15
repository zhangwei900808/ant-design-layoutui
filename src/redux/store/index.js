import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { createBrowserHistory } from "history";
import createRootReducer from "../reducers";
import rootSaga from "../sagas";

export const history = createBrowserHistory();
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

const persistReducers = persistReducer(
  persistConfig,
  createRootReducer(history)
);

export default function configureStore(preloadedState) {
  const store = createStore(
    persistReducers,
    preloadedState,
    compose(applyMiddleware(...middleWares))
  );
  let persistor = persistStore(store);
  sagaMiddleware.run(rootSaga);
  return { persistor, store };
}
