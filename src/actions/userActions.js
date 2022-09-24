import {
  FOLLOW_USER_FAIL,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAIL,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from '../constants/userConstants';
import axios from 'axios';
import toast from 'react-hot-toast';
import { USER_DETAILS_SUCCESS } from '../constants/userDetailsConstants';

const login = (loginCredentials) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  try {
    const res = await axios.post('/api/auth/login', {
      ...loginCredentials,
    });

    toast.success('Logged in successfully');

    const { foundUser: user, encodedToken } = res.data;
    dispatch({ type: USER_LOGIN_SUCCESS, payload: { user, encodedToken } });
  } catch (e) {
    const errors = e.response.data.errors;
    if (errors) {
      errors.map((error) => toast.error(error));
    }

    dispatch({ type: USER_LOGIN_FAIL, payload: errors });
  }
};

const signup = (userDetails) => async (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });

  try {
    const res = await axios.post('/api/auth/signup', {
      ...userDetails,
    });

    toast.success('Signed up successfully');

    const { createdUser: user, encodedToken } = res.data;
    dispatch({ type: USER_SIGNUP_SUCCESS, payload: { user, encodedToken } });
  } catch (e) {
    const errors = e.response.data.errors;

    if (errors) {
      errors.map((error) => toast.error(error));
    }

    dispatch({ type: USER_SIGNUP_FAIL, payload: errors });
  }
};

const logout = () => (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  document.location.href = '/';
};

const followUser = (followUserId) => async (dispatch) => {
  try {
    dispatch({ type: FOLLOW_USER_REQUEST });

    const res = await axios.post(`/api/users/follow/${followUserId}`);
    dispatch({ type: FOLLOW_USER_SUCCESS, payload: res.data.user });
    dispatch({ type: USER_DETAILS_SUCCESS, payload: res.data.followUser });
  } catch (error) {
    dispatch({ type: FOLLOW_USER_FAIL, payload: 'Server Error' });
  }
};

const unfollowUser = (unfollowUserId) => async (dispatch) => {
  try {
    dispatch({ type: UNFOLLOW_USER_REQUEST });

    const res = await axios.post(`/api/users/unfollow/${unfollowUserId}`);
    dispatch({ type: UNFOLLOW_USER_SUCCESS, payload: res.data.user });
    dispatch({ type: USER_DETAILS_SUCCESS, payload: res.data.followUser });
  } catch (error) {
    dispatch({ type: UNFOLLOW_USER_FAIL, payload: 'Server Error' });
  }
};

export { login, signup, logout, followUser, unfollowUser };
