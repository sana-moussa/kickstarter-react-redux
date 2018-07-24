import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { i18nReducer } from "react-redux-i18n";
import storage from "redux-persist/lib/storage";
import { alertsReducer } from "./alert";
import { authenticationReducer } from "./authentication";
import { registrationReducer } from "./registration";
import requestReducer from "./requests";
import { LOGOUT } from "../actions/authentication";

const appReducer = combineReducers({
  i18n: i18nReducer,
  form: formReducer,
  alerts: alertsReducer,
  requests: requestReducer,
  user: authenticationReducer,
  registering: registrationReducer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    // on logout, clear the whole state except the translations
    Object.keys(state).forEach(key => {
      storage.removeItem(`persist:${key}`);
    });

    Object.keys(state).forEach(key => {
      key !== "i18n" ? (state[key] = undefined) : null;
    });
  }
  return appReducer(state, action);
};

export default rootReducer;
