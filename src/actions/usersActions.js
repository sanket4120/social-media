import axios from 'axios';
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from '../constants/usersConstants';

const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USERS_REQUEST });

    const res = await axios.get('/api/users');
    dispatch({ type: GET_USERS_SUCCESS, payload: res.data.users });
  } catch (error) {
    dispatch({ type: GET_USERS_SUCCESS, payload: 'Server Error' });
  }
};

export { getAllUsers };
