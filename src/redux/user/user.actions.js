import USER_ACTION_TYPES from "./user.action.types";

export const createNewUser = (newUserInfo) => ({
  type: USER_ACTION_TYPES.CREATE_NEW_USER,
  payload: newUserInfo
});

export const createNewUserFail = (errorMsg) => ({
  type: USER_ACTION_TYPES.CREATE_NEW_USER_FAIL,
  payload: errorMsg
});

export const createNewUserSuccess = (user) => ({
  type: USER_ACTION_TYPES.CREATE_NEW_USER_SUCCESS,
  payload: user
});
