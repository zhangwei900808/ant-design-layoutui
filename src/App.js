import React from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/es/integration/react";

import configureStore, { history } from "./redux/store";
import routes from "./router";

const { persistor, store } = configureStore(/* provide initial state if any */);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<div />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <>
          <Switch>{renderRoutes(routes)}</Switch>
        </>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);

export default App;
