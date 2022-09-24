import {
  UPDATE_USER_FOLLOWERS,
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
} from '../constants/userDetailsConstants';

const initialState = { loading: false, error: null, user: null };

const userDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };
    case UPDATE_USER_FOLLOWERS:
      return { ...state, user: { ...state.user, followers: payload } };
    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: payload,
      };
    default:
      return state;
  }
};

export default userDetailsReducer;
