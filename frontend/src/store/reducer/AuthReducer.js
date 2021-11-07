import {
    AUTH_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
  } from '../constants/AuthConstants';
  
  export const authReducer = (state = {}, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          loginSuccess: true,
        };
      case LOGOUT_SUCCESS:
        return {
          loginSuccess: false,
        };
      case AUTH_FAIL:
        return {
          error: action.payload,
        };
      default:
        return state;
    }
  };
  