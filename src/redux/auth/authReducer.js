import { setAuthToken } from '../../utils/setAuthToken';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from './authConstants';

const initialState = {
  isAuthenticated: false,
  userInfo: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_LOGIN_REQUEST:
    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNUP_SUCCESS:
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('token', payload.encodedToken);
      setAuthToken(payload.encodedToken);
      return {
        loading: false,
        userInfo: payload.user,
        isAuthenticated: true,
        error: null,
      };
    case USER_SIGNUP_FAIL:
    case USER_LOGIN_FAIL:
      localStorage.removeItem('token');
      setAuthToken(null);
      return {
        loading: false,
        error: payload,
        userInfo: null,
        isAuthenticated: false,
      };
    case USER_LOGOUT:
      localStorage.removeItem('token');
      setAuthToken(null);
      return {
        ...state,
        isAuthenticated: false,
        userInfo: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
