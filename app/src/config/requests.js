import axios from "axios";
import CONFIG from "../config/config";
import { REQUEST_STARTED, REQUEST_FINISHED } from "../reducers/requests";

export const client = axios.create({
  baseURL: CONFIG.API_URL,
  responseType: "json"
});

export const globalOptions = {
  interceptors: {
    request: [
      function({ getState, dispatch, getSourceAction }, req) {
        if (getState().user.token !== "") {
          req.headers["Authorization"] = "Bearer " + getState().user.token;
        }

        let action = getSourceAction(req).type;

        dispatch({
          type: REQUEST_STARTED,
          name: action
        });

        return req;
      }
    ]
  },

  onComplete: function({ action, dispatch }, req) {
    let previousAction = action.meta.previousAction.type;

    dispatch({
      type: REQUEST_FINISHED,
      name: previousAction
    });

    return req;
  }
};
