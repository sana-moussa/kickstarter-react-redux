import { showAlert } from "./alert";
import { ALERT_TYPES } from "../config";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export function loginUser(username, password) {
  return dispatch => {
    return dispatch(loginUserRequest(username, password)).then(response => {
      if (response.error) {
        let errorMessage = "An error occurred";
        dispatch(showAlert(errorMessage, { type: ALERT_TYPES.ERROR }));
      }
    });
  };
}

export function logoutUser() {
  return {
    type: LOGOUT
  };
}

function loginUserRequest(username, password) {
  return {
    type: LOGIN,
    payload: {
      request: {
        method: "POST",
        data: {
          username: username,
          password: password
        },
        url: "/login"
      }
    }
  };
}
