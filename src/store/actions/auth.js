import * as types from "../types";

export const setAuthUser = authUser => ({
  type: types.SET_AUTH_USER,
  authUser: authUser
});
