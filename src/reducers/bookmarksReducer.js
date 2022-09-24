import {
  ADD_BOOKMARK_FAIL,
  ADD_BOOKMARK_REQUEST,
  ADD_BOOKMARK_SUCCESS,
  GET_BOOKMARKS_REQUEST,
  GET_BOOKMARK_FAIL,
  GET_BOOKMARK_SUCCESS,
  REMOVE_BOOKMARK_FAIL,
  REMOVE_BOOKMARK_REQUEST,
  REMOVE_BOOKMARK_SUCCESS,
} from '../constants/userConstants';

const initialState = { bookmarks: [], loading: false, error: null };

const bookmarksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_BOOKMARK_REQUEST:
    case GET_BOOKMARKS_REQUEST:
    case REMOVE_BOOKMARK_REQUEST:
      return { ...state, loading: true };
    case ADD_BOOKMARK_SUCCESS:
    case GET_BOOKMARK_SUCCESS:
    case REMOVE_BOOKMARK_SUCCESS:
      return { ...state, error: null, loading: false, bookmarks: payload };
    case ADD_BOOKMARK_FAIL:
    case GET_BOOKMARK_FAIL:
    case REMOVE_BOOKMARK_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export { bookmarksReducer };
