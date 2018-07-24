import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../actions/authentication";

const DEFAULT_STATE = {
  activeClient: "",
  isAuthenticated: false,
  token: ""
};

export const authenticationReducer = function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      if (action.payload.data.token) {
        return Object.assign({}, state, {
          token: action.payload.data.token,
          isAuthenticated: true,
          activeClient: action.payload.data.user
        });
      }

      return DEFAULT_STATE;
    }
    // Heads up! LOGOUT is handled seperately on index file
    case LOGOUT:
    case LOGIN_FAIL: {
      return DEFAULT_STATE;
    }
    default: {
      return state;
    }
  }
};
