import * as types from "../types";

const INITIAL_STATE = {
  authUser: null
};

const setAuthUser = (state, action) => {
  return {
    ...state,
    authUser: action.authUser
  };
};

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_AUTH_USER: {
      return setAuthUser(state, action);
    }
    default:
      return state;
  }
}

export default authReducer;
