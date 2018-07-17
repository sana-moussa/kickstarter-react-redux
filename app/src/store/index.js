import { applyMiddleware, createStore, compose } from "redux";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore
} from "react-redux-i18n";

import rootReducer from "../reducers";
import CONFIG from "../config/config";
import translationsObject from "../translations";

// for redux devtools, install extenion
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["i18n"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(ReduxPromise, ReduxThunk))
);

const persistor = persistStore(store);

syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale(CONFIG.DEFAULT_LOCALE));

export { store, persistor };
