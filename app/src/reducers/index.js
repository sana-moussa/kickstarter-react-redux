import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { i18nReducer } from "react-redux-i18n";
import { alertsReducer } from "./alert";

const appReducer = combineReducers({
  i18n: i18nReducer,
  form: formReducer,
  alerts: alertsReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
