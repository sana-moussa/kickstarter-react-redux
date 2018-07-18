import uuid from "node-uuid";
import { SHOW_ALERT, DISMISS_ALERT } from "../actions/alert";

export const alertsReducer = function(state = [], action) {
  switch (action.type) {
    case SHOW_ALERT:
      return [
        ...state,
        {
          message: action.message,
          options: action.options,
          id: uuid()
        }
      ];

    case DISMISS_ALERT:
      return state.filter(alert => {
        if (alert.id === action.id) {
          return false;
        } else {
          return true;
        }
      });

    default:
      return state;
  }
};
