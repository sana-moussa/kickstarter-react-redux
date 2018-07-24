export const REQUEST_STARTED = "REQUEST_STARTED";
export const REQUEST_FINISHED = "REQUEST_FINISHED";

const DEFAULT_STATE = [];

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case REQUEST_STARTED: {
      let requestName = action.name;
      let newState = state.slice();

      newState[requestName] = true;

      return newState;
    }
    case REQUEST_FINISHED: {
      let requestName = action.name;
      let newState = state.slice();

      newState[requestName] = false;

      return newState;
    }
    default: {
      return state;
    }
  }
}
