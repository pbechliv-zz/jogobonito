const INITIAL_STATE = {
  authUser: null
};

const setAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser
});

function authReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "AUTH_USER_SET": {
      return setAuthUser(state, action);
    }
    default:
      return state;
  }
}

export default authReducer;
