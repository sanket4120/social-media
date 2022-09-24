import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from '../constants/userDetailsConstants';
import axios from 'axios';

const getUserDetails = (username) => async (dispatch) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });

    let res = await axios.get(`/api/users/${username}`);
    const user = res.data.user;
    res = await axios.get(`/api/posts/user/${username}`);
    user.posts = res.data.posts;
    dispatch({ type: USER_DETAILS_SUCCESS, payload: user });
  } catch (error) {
    console.log(error);
    dispatch({ type: USER_DETAILS_FAIL, payload: 'Server Error' });
  }
};

export { getUserDetails };
