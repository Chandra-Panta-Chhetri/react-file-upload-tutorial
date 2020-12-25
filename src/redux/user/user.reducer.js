import USER_ACTION_TYPES from "./user.action.types";

const INITIAL_STATE = {
  currentUser: null,
  isCreatingUser: false
};

const userReducer = (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTION_TYPES.CREATE_NEW_USER:
      return {
        ...prevState,
        isCreatingUser: true
      };
    case USER_ACTION_TYPES.CREATE_NEW_USER_SUCCESS:
      return {
        ...prevState,
        currentUser: action.payload,
        isCreatingUser: false
      };
    case USER_ACTION_TYPES.CREATE_NEW_USER_FAIL:
      return {
        ...prevState,
        currentUser: null,
        isCreatingUser: false
      };
    default:
      return prevState;
  }
};

export default userReducer;
