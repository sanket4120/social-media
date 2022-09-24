import {
  ADD_BOOKMARK_FAIL,
  ADD_BOOKMARK_REQUEST,
  ADD_BOOKMARK_SUCCESS,
  FOLLOW_USER_FAIL,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  GET_BOOKMARKS_REQUEST,
  LIKE_POST_FAIL,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  REMOVE_BOOKMARK_FAIL,
  REMOVE_BOOKMARK_REQUEST,
  REMOVE_BOOKMARK_SUCCESS,
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
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
} from '../constants/userConstants';
import toast from 'react-hot-toast';
import axios from 'axios';
import { UPDATE_USER_FOLLOWERS } from '../constants/userDetailsConstants';

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
    dispatch({
      type: UPDATE_USER_FOLLOWERS,
      payload: res.data.followUser.followers,
    });
  } catch (error) {
    dispatch({ type: FOLLOW_USER_FAIL, payload: 'Server Error' });
  }
};

const unfollowUser = (unfollowUserId) => async (dispatch) => {
  try {
    dispatch({ type: UNFOLLOW_USER_REQUEST });

    const res = await axios.post(`/api/users/unfollow/${unfollowUserId}`);
    dispatch({ type: UNFOLLOW_USER_SUCCESS, payload: res.data.user });
    dispatch({
      type: UPDATE_USER_FOLLOWERS,
      payload: res.data.followUser.followers,
    });
  } catch (error) {
    dispatch({ type: UNFOLLOW_USER_FAIL, payload: 'Server Error' });
  }
};

const getBookmarks = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BOOKMARKS_REQUEST });
    const res = await axios.get('/api/users/bookmark');
    dispatch({ type: GET_BOOKMARKS_REQUEST, payload: res.data.bookmarks });
  } catch (error) {
    dispatch({ type: GET_BOOKMARKS_REQUEST, payload: 'Server Error' });
  }
};

const addToBookmarks = (postId) => async (dispatch) => {
  try {
    dispatch({ type: ADD_BOOKMARK_REQUEST });
    const res = await axios.post(`/api/users/bookmark/${postId}`);
    dispatch({ type: ADD_BOOKMARK_SUCCESS, payload: res.data.bookmarks });
    toast.success('Added to bookmarks');
  } catch (error) {
    dispatch({ type: ADD_BOOKMARK_FAIL, payload: 'Server Error' });
  }
};

const removeFromBookmarks = (postId) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_BOOKMARK_REQUEST });
    const res = await axios.post(`/api/users/remove-bookmark/${postId}`);
    dispatch({ type: REMOVE_BOOKMARK_SUCCESS, payload: res.data.bookmarks });
    toast.success('Removed from bookmarks');
  } catch (error) {
    dispatch({ type: REMOVE_BOOKMARK_FAIL, payload: 'Server Error' });
  }
};

const likePost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: LIKE_POST_REQUEST });
    const res = await axios.post(`/api/posts/like/${postId}`);
    dispatch({ type: LIKE_POST_SUCCESS, payload: res.data.posts });
    toast.success('Added to liked posts');
  } catch (error) {
    dispatch({ type: LIKE_POST_FAIL, payload: 'Server Error' });
  }
};

const dislikePost = (postId) => async (dispatch) => {
  try {
    dispatch({ type: LIKE_POST_REQUEST });
    const res = await axios.post(`/api/posts/dislike/${postId}`);
    dispatch({ type: LIKE_POST_SUCCESS, payload: res.data.posts });
    toast.success('Removed from liked posts');
  } catch (error) {
    dispatch({ type: LIKE_POST_FAIL, payload: 'Server Error' });
  }
};

const createPost = (post) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_POST_REQUEST });
    const res = await axios.post('/api/posts', { postData: { content: post } });
    dispatch({ type: CREATE_POST_SUCCESS, payload: res.data.posts });
  } catch (error) {
    console.log(error.response.data);
    dispatch({ type: CREATE_POST_FAIL, error: 'Server Error' });
  }
};

export {
  login,
  signup,
  logout,
  followUser,
  unfollowUser,
  getBookmarks,
  addToBookmarks,
  removeFromBookmarks,
  likePost,
  dislikePost,
  createPost,
};
