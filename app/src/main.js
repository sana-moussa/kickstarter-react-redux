import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";
import App from "./containers/app";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";
import "bootstrap/dist/css/bootstrap.css";
import AlertTemplate from "./components/alert";

require("../sass/main.scss");

//options for alerts
const options = {
  offset: "10px", // the margin of each alert
  position: "top center", //'top left','top right', 'top center', 'bottom left'  'bottom right', 'bottom center'
  timeout: 0, //0 means it will never remove itself
  type: "info", //'info', 'success', 'danger', 'warning'
  transition: "scale", //'fade', 'scale'
  zIndex: 100
};

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);
