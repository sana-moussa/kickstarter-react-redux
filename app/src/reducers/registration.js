import {
  REGISTRATION_SUCCESS,
  REGISTRATION_FAIL
} from "../actions/registration";

const DEFAULT_STATE = {
  isRegistered: false
};

export const registrationReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REGISTRATION_SUCCESS: {
      return Object.assign({}, state, {
        isRegistered: true
      });
    }
    case REGISTRATION_FAIL: {
      return DEFAULT_STATE;
    }
    default: {
      return state;
    }
  }
};
