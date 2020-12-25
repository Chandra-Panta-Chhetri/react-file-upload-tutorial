import USER_ACTION_TYPES from "./user.action.types";
import { takeLatest, put, call, all } from "redux-saga/effects";
import { createNewUserFail, createNewUserSuccess } from "./user.actions";

function* createUser({ payload: newUserInfo }) {
  try {
    yield console.log(newUserInfo, "About to create a new user");
    //logic to create new user
    yield put(createNewUserSuccess({}));
  } catch (err) {
    yield put(createNewUserFail(err.message));
  }
}

function* watchSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.CREATE_NEW_USER, createUser);
}

export default function* userSagas() {
  yield all([call(watchSignUpStart)]);
}
