export const SHOW_ALERT = "SHOW_ALERT";
export const DISMISS_ALERT = "DISMISS_ALERT";

export function showAlert(message, options) {
  return {
    type: SHOW_ALERT,
    message,
    options
  };
}

export function dismissAlert(id) {
  return {
    type: DISMISS_ALERT,
    id
  };
}
