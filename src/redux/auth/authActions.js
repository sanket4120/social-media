import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from './authConstants';
import axios from 'axios';
import toast from 'react-hot-toast';

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

export { login, signup, logout };
