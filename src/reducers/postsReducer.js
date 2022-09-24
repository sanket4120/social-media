import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
} from '../constants/postsConstants';
import {
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
} from '../constants/userConstants';

const initialState = { posts: [], loading: false, error: null };

const postsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_POSTS_REQUEST:
      return { ...state, loading: true };
    case GET_ALL_POSTS_SUCCESS:
      return { ...state, loading: false, posts: payload, error: null };
    case GET_ALL_POSTS_FAIL:
      return { ...state, loading: false, posts: [] };
    case LIKE_POST_REQUEST:
      return { ...state, likeLoading: true };
    case LIKE_POST_SUCCESS:
      return { ...state, likeLoading: false, posts: payload };
    case LIKE_POST_FAIL:
      return { ...state, likeLoading: false, error: payload };
    case CREATE_POST_REQUEST:
      return { ...state, createPostLoading: true };
    case CREATE_POST_SUCCESS:
      return { ...state, createPostLoading: false, posts: payload };
    case CREATE_POST_FAIL:
      return { ...state, createPostLoading: false, error: payload };
    default:
      return state;
  }
};

export default postsReducer;
