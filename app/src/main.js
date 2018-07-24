import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/app";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import "bootstrap/dist/css/bootstrap.css";

import Loading from "./components/loading";
require("../sass/main.scss");

render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);
