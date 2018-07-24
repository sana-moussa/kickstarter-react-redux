import { applyMiddleware, createStore, compose } from "redux";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";
import axiosMiddleware from "redux-axios-middleware";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore
} from "react-redux-i18n";

import rootReducer from "../reducers";
import { globalOptions, client } from "../config/requests";
import CONFIG from "../config/config";
import translationsObject from "../translations";

// for redux devtools, install extenion
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["i18n", "form", "alerts"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(
      ReduxPromise,
      ReduxThunk,
      axiosMiddleware(client, globalOptions)
    )
  )
);

const persistor = persistStore(store);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale(CONFIG.DEFAULT_LOCALE));

export { store, persistor };
