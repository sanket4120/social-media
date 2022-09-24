import { setAuthToken } from '../utils/setAuthToken';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAIL,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAIL,
} from '../constants/userConstants';

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
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
        user: payload.user,
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
        user: null,
        isAuthenticated: false,
      };
    case USER_LOGOUT:
      localStorage.removeItem('token');
      setAuthToken(null);
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        loading: false,
        error: null,
      };
    case FOLLOW_USER_REQUEST:
    case UNFOLLOW_USER_REQUEST:
      return { ...state, loading: true };
    case UNFOLLOW_USER_SUCCESS:
    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: payload,
      };
    case UNFOLLOW_USER_FAIL:
    case FOLLOW_USER_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default userReducer;
