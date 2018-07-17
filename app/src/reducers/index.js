import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { i18nReducer } from "react-redux-i18n";

const appReducer = combineReducers({
  i18n: i18nReducer,
  form: formReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
