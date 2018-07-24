import { showAlert } from "./alert";
import { ALERT_TYPES } from "../config/index";

export const REGISTRATION = "REGISTRATION";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_FAIL = "REGISTRATION_FAIL";

export function registerUser(email, username, password) {
  return dispatch => {
    return dispatch(registerUserRequest(email, username, password)).then(
      response => {
        if (response.error) {
          let errorMessage = "An error occurred";
          dispatch(showAlert(errorMessage, { type: ALERT_TYPES.ERROR }));
        }
      }
    );
  };
}

function registerUserRequest(email, username, password) {
  return {
    type: REGISTRATION,
    payload: {
      request: {
        method: "POST",
        data: {
          email: email,
          username: username,
          password: password
        },
        url: "/register"
      }
    }
  };
}
