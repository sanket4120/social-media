import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
} from '../constants/postsConstants';
import axios from 'axios';

const getAllPosts = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_POSTS_REQUEST });

    const res = await axios.get('/api/posts');

    dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: res.data.posts });
  } catch (error) {
    dispatch({ type: GET_ALL_POSTS_FAIL, payload: 'Server Error' });
  }
};

export { getAllPosts };
