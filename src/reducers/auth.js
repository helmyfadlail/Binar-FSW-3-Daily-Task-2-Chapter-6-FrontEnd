import { LOGGED_IN_SUCCESS, LOGOUT } from "../actions/authActions";

const initialState = { user: null, errorMessage: false };

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN_SUCCESS:
      return {
        ...state,
        errorMessage: false,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        errorMessage: false,
        user: null,
      };

    default:
      return state;
  }
};

export default users;
