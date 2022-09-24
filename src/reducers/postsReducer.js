import {
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
} from '../constants/postsConstants';

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
    default:
      return state;
  }
};

export default postsReducer;
