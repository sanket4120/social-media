import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from '../constants/usersConstants';

const initialState = { loading: false, users: [], error: null };

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS_REQUEST:
      return { ...state, loading: true };
    case GET_USERS_SUCCESS:
      return { ...state, loading: false, users: payload, error: null };
    case GET_USERS_FAIL:
      return { ...state, loading: false, users: [], error: payload };
    default:
      return state;
  }
};

export default usersReducer;
